import React, { useState } from 'react';
import { Sparkles, MapPin, ZoomIn, X, ChevronRight } from 'lucide-react';
import { GALLERY_ITEMS, WHATSAPP_LINK } from '../data/servicesData';
import { GalleryItem } from '../types';

export const GallerySection: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'exterior' | 'interior' | 'wheels' | 'correction'>('all');
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);

  const filterTabs = [
    { id: 'all', label: 'ALL WORK' },
    { id: 'exterior', label: 'EXTERIOR' },
    { id: 'interior', label: 'INTERIOR' },
    { id: 'wheels', label: 'WHEELS' },
    { id: 'correction', label: 'PAINT CORRECTION' },
  ] as const;

  const filteredItems = activeFilter === 'all' 
    ? GALLERY_ITEMS 
    : GALLERY_ITEMS.filter(item => item.category === activeFilter);

  return (
    <section id="gallery" className="bg-[#070B14] py-24 relative text-white border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* HEADER */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12" data-aos="fade-up">
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-blue-400 font-bold tracking-[0.25em] text-xs uppercase">
              <Sparkles className="w-4 h-4 text-blue-400" />
              <span>RECENT WORK & SHOWCASE</span>
            </div>
            <h2 className="font-heading text-4xl sm:text-5xl font-black uppercase tracking-tight text-white">
              GALLERY OF RESULTS
            </h2>
          </div>

          {/* FILTER TABS */}
          <div className="flex flex-wrap gap-2">
            {filterTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveFilter(tab.id as any)}
                className={`text-xs font-bold uppercase tracking-wider px-4 py-2.5 rounded-xl transition-all duration-200 border ${
                  activeFilter === tab.id
                    ? 'bg-blue-600 border-blue-500 text-white shadow-lg'
                    : 'bg-slate-900/80 border-slate-800 text-slate-400 hover:text-white hover:border-slate-700'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* GALLERY GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6" data-aos="fade-up" data-aos-delay="100">
          {filteredItems.map((item, idx) => (
            <div
              key={item.id}
              onClick={() => setSelectedItem(item)}
              className="bg-slate-900/90 border border-slate-800 rounded-2xl overflow-hidden group cursor-pointer hover:border-blue-500/50 transition-all duration-300 flex flex-col justify-between"
            >
              <div className="relative h-64 overflow-hidden bg-slate-950">
                <img
                  src={item.afterImage}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#070B14] via-transparent to-transparent opacity-80 group-hover:opacity-40 transition-opacity" />

                {/* ZOOM ICON HOVER */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/40 backdrop-blur-[2px]">
                  <div className="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center shadow-2xl scale-75 group-hover:scale-100 transition-transform">
                    <ZoomIn className="w-6 h-6" />
                  </div>
                </div>

                <div className="absolute top-3 left-3 bg-slate-900/80 text-blue-400 text-[10px] font-extrabold uppercase tracking-widest px-2.5 py-1 rounded-full border border-slate-700">
                  {item.category}
                </div>
              </div>

              <div className="p-5 space-y-2">
                <h3 className="font-heading font-extrabold text-sm uppercase text-white tracking-wide group-hover:text-blue-400 transition-colors line-clamp-1">
                  {item.carModel}
                </h3>
                <div className="flex items-center gap-1.5 text-xs text-slate-400">
                  <MapPin className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                  <span>{item.location}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* LIGHTBOX MODAL */}
      {selectedItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-fade-in">
          <div className="bg-[#0A0F1D] border border-slate-700 rounded-2xl max-w-3xl w-full p-6 relative overflow-hidden shadow-2xl text-white space-y-4">
            
            <button
              onClick={() => setSelectedItem(null)}
              className="absolute top-4 right-4 p-2 bg-slate-800 text-slate-300 hover:text-white rounded-full focus:outline-none"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="space-y-1">
              <span className="text-blue-400 text-xs font-bold uppercase tracking-widest">
                {selectedItem.category} Detail Showcase
              </span>
              <h3 className="font-heading text-2xl font-black uppercase text-white">
                {selectedItem.title}
              </h3>
              <p className="text-slate-400 text-xs flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-blue-400" />
                <span>{selectedItem.location}</span>
              </p>
            </div>

            <div className="rounded-xl overflow-hidden max-h-[420px] bg-black">
              <img
                src={selectedItem.afterImage}
                alt={selectedItem.title}
                className="w-full h-full object-contain"
                referrerPolicy="no-referrer"
              />
            </div>

            <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
              <p className="text-slate-300 text-xs">
                Want similar showroom results for your vehicle in Nottinghamshire?
              </p>
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs uppercase tracking-wider px-5 py-2.5 rounded-xl flex items-center gap-2 transition"
              >
                <span>Book This Detail</span>
                <ChevronRight className="w-4 h-4" />
              </a>
            </div>

          </div>
        </div>
      )}
    </section>
  );
};
