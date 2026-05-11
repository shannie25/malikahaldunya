import React from 'react';

export default function ServiceCard({ icon: Icon, title, description }) {
  return (
    <div className="service-card group bg-gradient-to-br from-slate-800 to-slate-900 p-8 rounded-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-slate-700 hover:border-blue-500/50">
      <div className="mb-6">
        <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
          <Icon size={32} className="text-white" />
        </div>
      </div>
      <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-300 transition-colors">
        {title}
      </h3>
      <p className="text-gray-400 leading-relaxed">
        {description}
      </p>
      <div className="mt-6 h-1 w-0 bg-gradient-to-r from-blue-500 to-blue-400 group-hover:w-12 transition-all duration-300" />
    </div>
  );
}
