import React, { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import Button from '../components/Button';

export default function Hero() {
  const tradeName = 'MALIKAH AL DUNYA INSULATION WORKS AND CLEANING SERVICES - L.L.C - S.P.C';
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl"
          style={{ transform: `translateY(${scrollY * 0.5}px)` }}
        />
        <div
          className="absolute bottom-0 right-1/4 w-96 h-96 bg-slate-600/10 rounded-full blur-3xl"
          style={{ transform: `translateY(${-scrollY * 0.5}px)` }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center min-h-screen">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-in-up">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-blue-600/20 border border-blue-500/30 px-4 py-2 rounded-full w-fit">
              <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
              <span className="text-blue-300 text-sm font-semibold">Welcome to Excellence</span>
            </div>

            {/* Main Heading */}
            <div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
                MALIKAH AL DUNYA
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">
                  Insulation Works & Cleaning Services
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-blue-300 font-semibold mb-6">
                Waterproofing, Insulation, Protective Coating & Cleaning Services
              </p>
              <p className="text-lg text-gray-400 leading-relaxed max-w-xl">
                Delivering premium industrial solutions for the UAE construction industry. Trust our expertise for waterproofing, insulation, protective coatings, and cleaning services that last.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button
                variant="primary"
                size="lg"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Get Quote
                <ArrowRight size={20} />
              </Button>
              <Button
                variant="secondary"
                size="lg"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Contact Us
                <ArrowRight size={20} />
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-12 border-t border-slate-700">
              <div>
                <h3 className="text-3xl font-bold text-blue-400">100+</h3>
                <p className="text-gray-400 text-sm">Successful Projects</p>
              </div>
              <div>
                <h3 className="text-3xl font-bold text-blue-400">10+</h3>
                <p className="text-gray-400 text-sm">Years Experience</p>
              </div>
              <div>
                <h3 className="text-3xl font-bold text-blue-400">500+</h3>
                <p className="text-gray-400 text-sm">Happy Clients</p>
              </div>
            </div>
          </div>

          {/* Right Content - Logo */}
          <div className="relative h-96 md:h-full hidden md:flex items-center justify-center">
            <div className="absolute w-80 h-80 bg-gradient-to-br from-blue-600/30 to-slate-600/30 rounded-full blur-2xl" />
            <img
              src="/logo-transparent.png"
              alt={`${tradeName} logo`}
              className="hero-logo transform hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-8 h-12 border-2 border-gray-500 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-gray-500 rounded-full animate-slide-up" />
        </div>
      </div>
    </section>
  );
}
