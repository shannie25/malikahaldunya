import React from 'react';
import { CheckCircle, Award, Users, Zap } from 'lucide-react';

export default function About() {
  const features = [
    {
      icon: Award,
      title: 'ISO Certified',
      description: 'Maintaining highest international quality standards and certifications.',
    },
    {
      icon: Users,
      title: 'Expert Team',
      description: 'Highly trained professionals with decades of combined experience.',
    },
    {
      icon: Zap,
      title: 'Fast Delivery',
      description: 'Efficient project execution without compromising on quality.',
    },
  ];

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Section Label */}
            <div>
              <span className="text-blue-400 font-semibold text-sm uppercase tracking-widest">About Us</span>
              <h2 className="text-4xl md:text-5xl font-bold text-white mt-4 leading-tight">
                Your Trusted Partner in Industrial Solutions
              </h2>
            </div>

            {/* Description */}
            <div className="space-y-4 text-gray-400 leading-relaxed">
              <p>
                Malika Haldunya Insulation Works LLC is a premier provider of advanced waterproofing, insulation, and protective coating solutions in the United Arab Emirates. With over a decade of experience in the construction and industrial sectors, we have established ourselves as a trusted name in delivering innovative solutions that protect and enhance infrastructure.
              </p>
              <p>
                Our commitment to excellence, combined with cutting-edge technology and a team of highly skilled professionals, allows us to deliver projects that exceed industry standards and client expectations. We serve a diverse portfolio of clients including construction companies, property developers, and industrial facilities.
              </p>
            </div>

            {/* Features List */}
            <div className="space-y-4 pt-4">
              {[
                'Professional and certified team',
                'State-of-the-art materials and equipment',
                'Competitive pricing with premium quality',
                'On-time project completion guarantee',
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle size={20} className="text-blue-400 flex-shrink-0" />
                  <span className="text-gray-300">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Features */}
          <div className="space-y-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-gradient-to-r from-slate-800 to-slate-900 p-8 rounded-xl border border-slate-700 hover:border-blue-500/50 transition-all duration-300 hover:shadow-xl"
              >
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-blue-600/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <feature.icon size={28} className="text-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-lg mb-2">{feature.title}</h3>
                    <p className="text-gray-400 leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              </div>
            ))}

            {/* Additional Info Box */}
            <div className="bg-gradient-to-br from-blue-600/20 to-slate-600/10 p-8 rounded-xl border border-blue-500/30">
              <p className="text-gray-300 leading-relaxed">
                Our goal is to be the preferred solution provider for businesses seeking reliable, high-quality industrial services in the UAE. We continuously invest in research, training, and technology to stay at the forefront of our industry.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
