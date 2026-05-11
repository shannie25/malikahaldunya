import React from 'react';
import { Maximize2 } from 'lucide-react';

export default function ProjectCard({ title, category, image }) {
  return (
    <div className="group relative h-80 rounded-xl overflow-hidden cursor-pointer">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
        style={{
          backgroundImage: `linear-gradient(135deg, rgba(0, 31, 63, 0.7) 0%, rgba(30, 58, 95, 0.7) 100%), url('${image}')`,
          backgroundColor: '#1e3a5f'
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-dark-blue via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      {/* Content */}
      <div className="absolute inset-0 p-6 flex flex-col justify-between">
        {/* Top Badge */}
        <div className="flex justify-end">
          <span className="px-3 py-1 bg-blue-600/80 text-white text-xs font-semibold rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            {category}
          </span>
        </div>

        {/* Bottom Content */}
        <div>
          <h3 className="text-white font-bold text-lg mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
            {title}
          </h3>
          <button className="flex items-center gap-2 text-blue-300 hover:text-white text-sm font-semibold opacity-0 group-hover:opacity-100 transition-all duration-300">
            <Maximize2 size={16} />
            View Details
          </button>
        </div>
      </div>

      {/* Border */}
      <div className="absolute inset-0 border border-blue-500/0 group-hover:border-blue-500/30 rounded-xl transition-colors duration-300" />
    </div>
  );
}
