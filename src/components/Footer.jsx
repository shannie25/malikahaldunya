import React from 'react';
import { Mail, Phone, MapPin, ArrowRight } from 'lucide-react';

export default function Footer() {
  const tradeName = 'MALIKAH AL DUNYA INSULATION WORKS AND CLEANING SERVICES - L.L.C - S.P.C';
  const currentYear = new Date().getFullYear();
  const phoneDisplay = '+971 55 526 7546';
  const phoneLink = 'tel:+971555267546';
  const emailAddresses = [
    'malikah_al_dunya@gmail.com',
    'mahalahkarimah@gmail.com',
  ];
  const gmailLink = (email) => `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(email)}`;

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Contact', href: '#contact' },
  ];

  const emails = [
    { label: 'Primary', email: emailAddresses[0] },
    { label: 'Alternate', email: emailAddresses[1] },
  ];

  return (
    <footer className="bg-dark-blue border-t border-slate-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <img
                src="/logo-transparent.png"
                alt={`${tradeName} logo`}
                className="brand-logo brand-logo-footer"
              />
              <div>
                <h3 className="text-white font-bold">MALIKAH AL DUNYA</h3>
                <p className="text-gray-400 text-sm">Insulation Works & Cleaning Services</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Waterproofing, insulation, protective coating, and cleaning services for the UAE construction industry.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white flex items-center gap-2 transition-colors group"
                  >
                    <ArrowRight size={16} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Phone size={18} className="text-blue-400 flex-shrink-0 mt-1" />
                <a href={phoneLink} className="text-gray-400 hover:text-white text-sm transition-colors">
                  {phoneDisplay}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail size={18} className="text-blue-400 flex-shrink-0 mt-1" />
                <a
                  href={gmailLink(emailAddresses[0])}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white text-sm transition-colors"
                >
                  {emailAddresses[0]}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail size={18} className="text-blue-400 flex-shrink-0 mt-1" />
                <a
                  href={gmailLink(emailAddresses[1])}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white text-sm transition-colors"
                >
                  {emailAddresses[1]}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-blue-400 flex-shrink-0 mt-1" />
                <span className="text-gray-400 text-sm">Abu Dhabi, UAE</span>
              </li>
            </ul>
          </div>

          {/* Gmail Contacts */}
          <div>
            <h4 className="text-white font-bold mb-4">Gmail Contacts</h4>
            <ul className="space-y-2">
              {emails.map((item) => (
                <li key={item.email}>
                  <a
                    href={gmailLink(item.email)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-blue-400 text-xs transition-colors block truncate"
                    title={item.email}
                  >
                    <span className="font-semibold">{item.label}:</span> {item.email}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-slate-700 my-8" />

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm text-center md:text-left mb-4 md:mb-0">
            &copy; {currentYear} {tradeName}. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
