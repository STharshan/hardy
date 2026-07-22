import React, { useState } from 'react';
import { Sparkles, SlidersHorizontal } from 'lucide-react';

export const BeforeAfterSection: React.FC = () => {
  const [sliderPos, setSliderPos] = useState(50);

  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSliderPos(Number(e.target.value));
  };

  return (
    <section className="bg-[#090E1A] py-20 border-t border-slate-800/80 text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* SECTION HEADER */}
        <div className="text-center space-y-3 mb-12" data-aos="fade-up">
          <div className="inline-flex items-center gap-2 text-blue-400 font-bold tracking-[0.25em] text-xs uppercase">
            <Sparkles className="w-4 h-4 text-blue-400" />
            <span>THE HARDY'S TRANSFORMATION</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-5xl font-black uppercase tracking-tight text-white">
            SEE THE DIFFERENCE
          </h2>
          <p className="text-slate-400 text-sm max-w-xl mx-auto">
            Drag the interactive slider below to compare a dull, road-grimed vehicle surface against our multi-stage glossy ceramic finish.
          </p>
        </div>

        {/* COMPARISON SLIDER CONTAINER */}
        <div className="max-w-4xl mx-auto relative rounded-2xl overflow-hidden shadow-2xl border border-slate-700/80 select-none group" data-aos="zoom-in">
          
          {/* AFTER IMAGE (UNDERNEATH / RIGHT SIDE) */}
          <div className="relative w-full h-[350px] sm:h-[480px]">
            <img
              src="https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=1200&q=80"
              alt="After Hardy's Detailing - Showroom Mirror Gloss Finish"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            
            {/* AFTER LABEL */}
            <div className="absolute top-4 right-4 bg-blue-600/90 text-white text-xs font-black uppercase tracking-widest px-4 py-1.5 rounded-full shadow-lg border border-blue-400/40">
              AFTER HARDY'S DETAIL
            </div>
          </div>

          {/* BEFORE IMAGE (OVERLAY / LEFT SIDE CROP) */}
          <div 
            className="absolute top-0 left-0 bottom-0 overflow-hidden"
            style={{ width: `${sliderPos}%` }}
          >
            <img
              src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80"
              alt="Before Detailing - Road Grime and Oxidation"
              className="absolute top-0 left-0 w-full h-full object-cover max-w-none filter contrast-90 brightness-75 grayscale-[20%]"
              style={{ width: '100%', minWidth: '100%' }}
              referrerPolicy="no-referrer"
            />
            
            {/* BEFORE LABEL */}
            <div className="absolute top-4 left-4 bg-slate-900/90 text-slate-300 text-xs font-black uppercase tracking-widest px-4 py-1.5 rounded-full shadow-lg border border-slate-700">
              BEFORE
            </div>
          </div>

          {/* VERTICAL DIVIDER LINE & HANDLE */}
          <div 
            className="absolute top-0 bottom-0 w-1 bg-white shadow-[0_0_15px_rgba(255,255,255,0.8)] pointer-events-none"
            style={{ left: `${sliderPos}%` }}
          >
            <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-blue-600 border-2 border-white text-white flex items-center justify-center shadow-2xl">
              <SlidersHorizontal className="w-5 h-5" />
            </div>
          </div>

          {/* HIDDEN RANGE INPUT */}
          <input
            type="range"
            min="0"
            max="100"
            value={sliderPos}
            onChange={handleSliderChange}
            className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-30"
            aria-label="Before and After Comparison Slider"
          />

        </div>

      </div>
    </section>
  );
};
