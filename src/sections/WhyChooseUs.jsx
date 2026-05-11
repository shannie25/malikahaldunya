import React from 'react';
import { Users, Gem, Briefcase, Award, Headphones, TrendingUp } from 'lucide-react';

export default function WhyChooseUs() {
  const reasons = [
    {
      icon: Users,
      title: 'Professional Team',
      description: 'Highly trained and certified professionals with extensive industry experience and technical expertise.',
      color: 'from-blue-500 to-blue-600',
    },
    {
      icon: Gem,
      title: 'Quality Materials',
      description: 'Only premium-grade materials from trusted suppliers ensuring durability and performance excellence.',
      color: 'from-purple-500 to-purple-600',
    },
    {
      icon: Briefcase,
      title: 'Industrial Expertise',
      description: 'Decades of combined experience across various industrial and construction sectors in the UAE.',
      color: 'from-emerald-500 to-emerald-600',
    },
    {
      icon: Award,
      title: 'UAE Standards',
      description: 'Full compliance with all local and international standards and regulations for quality assurance.',
      color: 'from-amber-500 to-amber-600',
    },
    {
      icon: Headphones,
      title: 'Reliable Support',
      description: '24/7 technical support and dedicated customer service for all your inquiries and concerns.',
      color: 'from-cyan-500 to-cyan-600',
    },
    {
      icon: TrendingUp,
      title: 'Proven Track Record',
      description: 'Successfully completed 100+ projects with a 98% client satisfaction rate and repeat business.',
      color: 'from-rose-500 to-rose-600',
    },
  ];

  return (
    <section id="why-us" className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-slate-600/10 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-blue-400 font-semibold text-sm uppercase tracking-widest">Why Choose Us</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6">
            Excellence in Every Project
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
            We stand out from the competition through our unwavering commitment to quality, professionalism, and customer satisfaction.
          </p>
        </div>

        {/* Reasons Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <div
                key={index}
                className="group relative bg-gradient-to-br from-slate-800 to-slate-900 p-8 rounded-xl border border-slate-700 hover:border-blue-500/50 transition-all duration-300 hover:shadow-2xl"
              >
                {/* Icon Background */}
                <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br ${reason.color} opacity-10 rounded-full blur-2xl group-hover:opacity-20 transition-opacity duration-300`} />

                {/* Content */}
                <div className="relative z-10">
                  <div className={`w-16 h-16 bg-gradient-to-br ${reason.color} rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon size={32} className="text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-300 transition-colors">
                    {reason.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    {reason.description}
                  </p>
                  <div className="mt-6 h-1 w-0 bg-gradient-to-r from-blue-500 to-blue-400 group-hover:w-12 transition-all duration-300" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Statistics Section */}
        <div className="bg-gradient-to-r from-blue-600/10 to-slate-600/10 border border-slate-700 rounded-xl p-12">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <h4 className="text-4xl font-bold text-blue-400 mb-2">100+</h4>
              <p className="text-gray-400">Projects Completed</p>
            </div>
            <div>
              <h4 className="text-4xl font-bold text-blue-400 mb-2">10+</h4>
              <p className="text-gray-400">Years in Business</p>
            </div>
            <div>
              <h4 className="text-4xl font-bold text-blue-400 mb-2">500+</h4>
              <p className="text-gray-400">Satisfied Clients</p>
            </div>
            <div>
              <h4 className="text-4xl font-bold text-blue-400 mb-2">98%</h4>
              <p className="text-gray-400">Satisfaction Rate</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
