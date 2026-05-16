import nodemailer from 'nodemailer';

const RECIPIENT_EMAIL = process.env.CONTACT_TO || 'malikah_al_dunya@gmail.com, mahalahkarimah@gmail.com';
const MAX_LENGTHS = {
  name: 120,
  email: 160,
  phone: 60,
  company: 140,
  message: 3000,
};

function clean(value, maxLength) {
  if (typeof value !== 'string') {
    return '';
  }

  return value.trim().replace(/\r?\n/g, ' ').slice(0, maxLength);
}

function cleanMessage(value) {
  if (typeof value !== 'string') {
    return '';
  }

  return value.trim().slice(0, MAX_LENGTHS.message);
}

function isValidEmail(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function escapeHtml(value) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;')
    .replace(/\n/g, '<br />');
}

async function readBody(req) {
  if (req.body) {
    return typeof req.body === 'string' ? JSON.parse(req.body) : req.body;
  }

  const chunks = [];
  for await (const chunk of req) {
    chunks.push(Buffer.from(chunk));
  }

  const rawBody = Buffer.concat(chunks).toString('utf8');
  return rawBody ? JSON.parse(rawBody) : {};
}

function getTransporter() {
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;

  if (!user || !pass) {
    throw new Error('Email service is not configured yet.');
  }

  const port = Number(process.env.SMTP_PORT || 465);

  return nodemailer.createTransport({
    host: process.env.SMTP_HOST || 'smtp.gmail.com',
    port,
    secure: process.env.SMTP_SECURE
      ? process.env.SMTP_SECURE === 'true'
      : port === 465,
    auth: {
      user,
      pass,
    },
  });
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ message: 'Method not allowed.' });
  }

  try {
    const body = await readBody(req);
    const name = clean(body.name, MAX_LENGTHS.name);
    const email = clean(body.email, MAX_LENGTHS.email);
    const phone = clean(body.phone, MAX_LENGTHS.phone);
    const company = clean(body.company, MAX_LENGTHS.company);
    const message = cleanMessage(body.message);

    if (!name || !email || !message) {
      return res.status(400).json({ message: 'Please fill in your name, email, and message.' });
    }

    if (!isValidEmail(email)) {
      return res.status(400).json({ message: 'Please enter a valid email address.' });
    }

    const transporter = getTransporter();
    const safeName = name.replace(/[\r\n]+/g, ' ');
    const text = [
      `Name: ${name}`,
      `Email: ${email}`,
      `Phone: ${phone || 'Not provided'}`,
      `Company: ${company || 'Not provided'}`,
      '',
      'Message:',
      message,
    ].join('\n');

    const html = `
      <h2>New website message</h2>
      <p><strong>Name:</strong> ${escapeHtml(name)}</p>
      <p><strong>Email:</strong> ${escapeHtml(email)}</p>
      <p><strong>Phone:</strong> ${escapeHtml(phone || 'Not provided')}</p>
      <p><strong>Company:</strong> ${escapeHtml(company || 'Not provided')}</p>
      <p><strong>Message:</strong></p>
      <p>${escapeHtml(message)}</p>
    `;

    await transporter.sendMail({
      from: process.env.SMTP_FROM || `"Malikah Al Dunya Website" <${process.env.SMTP_USER}>`,
      to: RECIPIENT_EMAIL,
      replyTo: email,
      subject: `New website message from ${safeName}`,
      text,
      html,
    });

    return res.status(200).json({ message: 'Message sent successfully.' });
  } catch (error) {
    console.error('Contact form error:', error);
    return res.status(500).json({
      message: error.message === 'Email service is not configured yet.'
        ? error.message
        : 'Unable to send your message right now.',
    });
  }
}
