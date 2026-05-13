import React, { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';

export default function Navbar() {
  const tradeName = 'MALIKAH AL DUNYA INSULATION WORKS AND CLEANING SERVICES - L.L.C - S.P.C';
  const phoneLink = 'tel:+971555267546';
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Why Us', href: '#why-us' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-dark-blue/95 backdrop-blur-md shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <img
              src="/logo-transparent.png"
              alt={`${tradeName} logo`}
              className="brand-logo brand-logo-nav"
            />
            <div className="hidden sm:flex flex-col">
              <span className="text-white font-bold text-sm">MALIKAH AL DUNYA</span>
              <span className="text-gray-400 text-xs">Insulation Works & Cleaning Services</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-1 items-center">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* CTA Button and Mobile Menu */}
          <div className="flex items-center space-x-4">
            <a
              href={phoneLink}
              className="hidden sm:flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors duration-200"
            >
              <Phone size={16} />
              <span className="text-sm font-medium">Call</span>
            </a>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden text-white hover:text-gray-300 transition-colors"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-dark-blue/95 backdrop-blur-md border-t border-gray-700">
          <div className="px-4 pt-2 pb-4 space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
