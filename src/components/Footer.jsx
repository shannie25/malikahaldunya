import React from 'react';
import { Mail, Phone, MapPin, ArrowRight } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Contact', href: '#contact' },
  ];

  const emails = [
    { label: 'Info', email: 'info@malikahaldunya.ae' },
    { label: 'Sales', email: 'sales@malikahaldunya.ae' },
    { label: 'Technical', email: 'technical@malikahaldunya.ae' },
    { label: 'Engineering', email: 'engineering@malikahaldunya.ae' },
    { label: 'Accounts', email: 'accounts@malikahaldunya.ae' },
    { label: 'Operations', email: 'operation@malikahaldunya.ae' },
  ];

  return (
    <footer className="bg-dark-blue border-t border-slate-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">MH</span>
              </div>
              <div>
                <h3 className="text-white font-bold">Malika Haldunya</h3>
                <p className="text-gray-400 text-sm">Insulation Works LLC</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Advanced Waterproofing, Insulation & Protective Coating Solutions for the UAE construction industry.
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
                <span className="text-gray-400 text-sm">+971 XXXX XXXX</span>
              </li>
              <li className="flex items-start gap-3">
                <Mail size={18} className="text-blue-400 flex-shrink-0 mt-1" />
                <a href="mailto:info@malikahaldunya.ae" className="text-gray-400 hover:text-white text-sm transition-colors">
                  info@malikahaldunya.ae
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-blue-400 flex-shrink-0 mt-1" />
                <span className="text-gray-400 text-sm">Abu Dhabi, UAE</span>
              </li>
            </ul>
          </div>

          {/* Email Directories */}
          <div>
            <h4 className="text-white font-bold mb-4">Email Directory</h4>
            <ul className="space-y-2">
              {emails.map((item) => (
                <li key={item.email}>
                  <a
                    href={`mailto:${item.email}`}
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
            &copy; {currentYear} Malika Haldunya Insulation Works LLC. All rights reserved.
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
