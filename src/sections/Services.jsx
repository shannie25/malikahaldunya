import React from 'react';
import { Droplet, Shield, Wrench, Zap, Paintbrush, Hammer, Package, Wind, FlaskConical, Waves } from 'lucide-react';
import ServiceCard from '../components/ServiceCard';

export default function Services() {
  const services = [
    {
      icon: Shield,
      title: 'Advanced Combo System Application',
      description: 'Comprehensive multi-layer protective systems combining waterproofing and insulation for maximum durability and performance.',
    },
    {
      icon: Droplet,
      title: 'Membrane Works',
      description: 'Professional membrane installation and maintenance for reliable long-term water protection in all applications.',
    },
    {
      icon: Paintbrush,
      title: 'Epoxy Works',
      description: 'Industrial-grade epoxy coating and flooring solutions for enhanced durability, aesthetics, and chemical resistance.',
    },
    {
      icon: Wrench,
      title: 'GRP Lining Works',
      description: 'Glass Reinforced Plastic lining solutions for superior corrosion resistance and extended asset lifespan.',
    },
    {
      icon: Zap,
      title: 'Hybrid Coating Works',
      description: 'Innovative hybrid coating systems combining multiple protective technologies for superior performance.',
    },
    {
      icon: Hammer,
      title: 'Concrete Crack Injection Works',
      description: 'Advanced concrete repair through precision injection techniques to restore structural integrity.',
    },
    {
      icon: Package,
      title: 'HDPE Works',
      description: 'High-Density Polyethylene solutions for chemical resistance and long-term structural protection.',
    },
    {
      icon: Wind,
      title: 'Polyurea Spray Application Works',
      description: 'Fast-curing polyurea spray coatings providing instant waterproofing and protective coverage.',
    },
    {
      icon: FlaskConical,
      title: 'Cementitious Works',
      description: 'Specialist cement-based coatings and repair solutions for concrete and masonry structures.',
    },
    {
      icon: Waves,
      title: 'Cleaning Services',
      description: 'Professional surface preparation and cleaning services ensuring optimal coating adhesion and longevity.',
    },
  ];

  return (
    <section id="services" className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-blue-400 font-semibold text-sm uppercase tracking-widest">Our Services</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6">
            Comprehensive Industrial Solutions
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
            From waterproofing to protective coatings, we offer a complete range of services tailored to meet your specific needs with precision and expertise.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <div
              key={index}
              className="animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <ServiceCard {...service} />
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-blue-600/20 to-slate-600/20 border border-blue-500/30 rounded-xl p-8 md:p-12 text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Need a Custom Solution?
          </h3>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Our team of experts can develop specialized solutions tailored to your unique requirements. Contact us today for a consultation.
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-lg transition-all duration-300 inline-flex items-center gap-2">
            Request Custom Solution
            <span>→</span>
          </button>
        </div>
      </div>
    </section>
  );
}
