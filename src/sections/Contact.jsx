import React from 'react';
import { Mail, Phone, MapPin, MessageCircle, Clock } from 'lucide-react';
import ContactForm from '../components/ContactForm';

export default function Contact() {
  const phoneDisplay = '+971 55 526 7546';
  const phoneLink = 'tel:+971555267546';
  const whatsappLink = 'https://wa.me/971555267546';
  const emailAddresses = [
    'malikah_al_dunya@gmail.com',
    'mahalahkarimah@gmail.com',
  ];
  const gmailLink = (email) => `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(email)}`;

  const contactMethods = [
    {
      icon: Phone,
      label: 'Phone',
      value: phoneDisplay,
      action: phoneLink,
    },
    {
      icon: Mail,
      label: 'Gmail',
      value: emailAddresses[0],
      action: gmailLink(emailAddresses[0]),
      isExternal: true,
    },
    {
      icon: Mail,
      label: 'Gmail',
      value: emailAddresses[1],
      action: gmailLink(emailAddresses[1]),
      isExternal: true,
    },
  ];

  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-slate-600/10 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-blue-400 font-semibold text-sm uppercase tracking-widest">Get in Touch</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6">
            Contact Us Today
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
            Have questions? Our dedicated team is ready to help you with any inquiries or project requirements.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          {/* Contact Information */}
          <div className="space-y-8">
            {/* Quick Contact */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-white">Reach Us Directly</h3>

              {contactMethods.map((method, index) => {
                const Icon = method.icon;
                return (
                  <a
                    key={index}
                    href={method.action}
                    target={method.isExternal ? '_blank' : undefined}
                    rel={method.isExternal ? 'noopener noreferrer' : undefined}
                    className="group flex items-start gap-4 p-6 bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl border border-slate-700 hover:border-blue-500/50 transition-all duration-300 hover:shadow-xl"
                  >
                    <div className="w-12 h-12 bg-blue-600/20 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-blue-600/40 transition-colors">
                      <Icon size={24} className="text-blue-400" />
                    </div>
                    <div className="flex-1">
                      <p className="text-gray-400 text-sm">{method.label}</p>
                      <p className="text-white font-semibold group-hover:text-blue-300 transition-colors">
                        {method.value}
                      </p>
                    </div>
                    <span className="text-blue-400 opacity-0 group-hover:opacity-100 transition-opacity">
                      →
                    </span>
                  </a>
                );
              })}
            </div>

            {/* Additional Contact Options */}
            <div className="space-y-4 pt-4 border-t border-slate-700">
              <h4 className="text-lg font-bold text-white">Other Options</h4>
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-4 bg-green-600/20 hover:bg-green-600/30 border border-green-500/30 text-green-300 hover:text-green-200 rounded-lg transition-all duration-300"
              >
                <MessageCircle size={20} />
                <span className="font-semibold">WhatsApp: {phoneDisplay}</span>
              </a>
              <div className="flex items-center gap-3 p-4 bg-slate-800 border border-slate-700 text-gray-300 rounded-lg">
                <Clock size={20} />
                <span>Available 24/7 for emergencies</span>
              </div>
            </div>

          </div>

          {/* Contact Form */}
          <div className="bg-gradient-to-br from-slate-800 to-slate-900 p-8 rounded-xl border border-slate-700 shadow-2xl">
            <h3 className="text-2xl font-bold text-white mb-6">Send us a Message</h3>
            <ContactForm />
          </div>
        </div>

        {/* Map / Location Section */}
        <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl border border-slate-700 overflow-hidden">
          <div className="grid md:grid-cols-2">
            <div className="p-8 flex flex-col justify-center">
              <h3 className="text-2xl font-bold text-white mb-4">Our Location</h3>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <MapPin size={24} className="text-blue-400 flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-gray-400 text-sm">Headquarters</p>
                    <p className="text-white font-semibold">Abu Dhabi, United Arab Emirates</p>
                    <p className="text-gray-400 text-sm mt-1">
                      Premium industrial solutions serving all of UAE
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* Map Placeholder */}
            <div className="h-64 md:h-auto bg-gradient-to-br from-blue-600/20 to-slate-600/20 flex items-center justify-center">
              <div className="text-center">
                <MapPin size={48} className="text-blue-400 mx-auto mb-3" />
                <p className="text-gray-400">Abu Dhabi, UAE</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
