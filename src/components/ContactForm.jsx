import React, { useState } from 'react';
import Button from './Button';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', phone: '', company: '', message: '' });
    }, 3000);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {submitted && (
        <div className="bg-green-500/20 border border-green-500 text-green-300 px-4 py-3 rounded-lg text-center">
          Thank you! We'll get back to you soon.
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
          className="w-full bg-slate-800 border border-slate-700 text-white placeholder-gray-500 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500 transition-colors"
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
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
          className="w-full bg-slate-800 border border-slate-700 text-white placeholder-gray-500 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500 transition-colors"
        />
        <input
          type="text"
          name="company"
          placeholder="Company (Optional)"
          value={formData.company}
          onChange={handleChange}
          className="w-full bg-slate-800 border border-slate-700 text-white placeholder-gray-500 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500 transition-colors"
        />
      </div>

      <textarea
        name="message"
        placeholder="Your Message"
        value={formData.message}
        onChange={handleChange}
        required
        rows="5"
        className="w-full bg-slate-800 border border-slate-700 text-white placeholder-gray-500 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500 transition-colors resize-none"
      />

      <Button type="submit" variant="primary" size="lg" className="w-full">
        Send Message
      </Button>
    </form>
  );
}