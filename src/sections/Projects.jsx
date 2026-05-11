import React from 'react';
import ProjectCard from '../components/ProjectCard';

export default function Projects() {
  const projects = [
    {
      title: 'High-Rise Waterproofing',
      category: 'Waterproofing',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=500&h=400&fit=crop',
    },
    {
      title: 'Industrial Facility Insulation',
      category: 'Insulation',
      image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=500&h=400&fit=crop',
    },
    {
      title: 'Commercial Epoxy Flooring',
      category: 'Epoxy Works',
      image: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=500&h=400&fit=crop',
    },
    {
      title: 'Residential Protective Coating',
      category: 'Coating',
      image: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=500&h=400&fit=crop',
    },
    {
      title: 'Infrastructure Protection',
      category: 'Protection',
      image: 'https://images.unsplash.com/photo-1581092918271-0fa34b512b5a?w=500&h=400&fit=crop',
    },
    {
      title: 'Advanced System Application',
      category: 'Combo System',
      image: 'https://images.unsplash.com/photo-1531746790731-6c6bd8c60d7d?w=500&h=400&fit=crop',
    },
  ];

  return (
    <section id="projects" className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-blue-400 font-semibold text-sm uppercase tracking-widest">Portfolio</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6">
            Featured Projects
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
            Explore our portfolio of successful projects showcasing our expertise and commitment to excellence in every application.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {projects.map((project, index) => (
            <div
              key={index}
              className="animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <ProjectCard {...project} />
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-blue-600/20 to-slate-600/20 border border-blue-500/30 rounded-xl p-12">
          <h3 className="text-3xl font-bold text-white mb-4">
            Ready to Start Your Project?
          </h3>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            Let us show you how our expertise can transform your infrastructure with our comprehensive solutions.
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-lg transition-all duration-300 inline-flex items-center gap-2">
            Schedule Consultation
            <span>→</span>
          </button>
        </div>
      </div>
    </section>
  );
}
