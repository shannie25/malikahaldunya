import React, { useState } from 'react';
import Button from './Button';

const initialFormData = {
  name: '',
  email: '',
  phone: '',
  company: '',
  message: '',
};

export default function ContactForm() {
  const [formData, setFormData] = useState(initialFormData);
  const [status, setStatus] = useState({ type: '', message: '' });
  const [isSending, setIsSending] = useState(false);

  const isSuccess = status.type === 'success';
  const isError = status.type === 'error';

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSending(true);
    setStatus({ type: '', message: '' });

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const result = await response.json().catch(() => ({}));

      if (!response.ok) {
        throw new Error(result.message || 'Unable to send your message right now.');
      }

      setStatus({
        type: 'success',
        message: "Thank you! Your message has been sent.",
      });
      setFormData(initialFormData);
    } catch (error) {
      setStatus({
        type: 'error',
        message: error.message || 'Unable to send your message right now.',
      });
    } finally {
      setIsSending(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {(isSuccess || isError) && (
        <div
          className={`${isSuccess ? 'bg-green-500/20 border-green-500 text-green-300' : 'form-status-error'} border px-4 py-3 rounded-lg text-center`}
          role="status"
          aria-live="polite"
        >
          {status.message}
        </div>
      )}

      <div className="grid md:grid-cols-2 gap-6">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
          disabled={isSending}
          className="w-full bg-slate-800 border border-slate-700 text-white placeholder-gray-500 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500 transition-colors"
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
          disabled={isSending}
          className="w-full bg-slate-800 border border-slate-700 text-white placeholder-gray-500 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500 transition-colors"
        />
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <input
          type="tel"
          name="phone"
          placeholder="Phone Number"
          value={formData.phone}
          onChange={handleChange}
          disabled={isSending}
          className="w-full bg-slate-800 border border-slate-700 text-white placeholder-gray-500 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500 transition-colors"
        />
        <input
          type="text"
          name="company"
          placeholder="Company (Optional)"
          value={formData.company}
          onChange={handleChange}
          disabled={isSending}
          className="w-full bg-slate-800 border border-slate-700 text-white placeholder-gray-500 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500 transition-colors"
        />
      </div>

      <textarea
        name="message"
        placeholder="Your Message"
        value={formData.message}
        onChange={handleChange}
        required
        disabled={isSending}
        rows="5"
        className="w-full bg-slate-800 border border-slate-700 text-white placeholder-gray-500 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500 transition-colors resize-none"
      />

      <Button type="submit" variant="primary" size="lg" className="w-full" disabled={isSending}>
        {isSending ? 'Sending...' : 'Send Message'}
      </Button>
    </form>
  );
}
