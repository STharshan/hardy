import React from 'react';
import { Sparkles, CheckCircle2 } from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="bg-[#070B14] py-24 relative overflow-hidden text-white">
      {/* Background glow effects */}
      <div className="absolute -left-40 top-1/2 -translate-y-1/2 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* LEFT IMAGE COLUMN: Hand with microfiber towel wiping black car hood */}
          <div className="lg:col-span-6 relative" data-aos="fade-right">
            <div className="relative rounded-2xl overflow-hidden border border-slate-800 shadow-2xl group">
              <img
                src="https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?auto=format&fit=crop&w=1200&q=80"
                alt="Gloved hand polishing black car hood with microfiber towel"
                className="w-full h-[380px] sm:h-[480px] object-cover group-hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#070B14] via-transparent to-transparent opacity-60" />
              
              {/* Subtle badge on image */}
              <div className="absolute bottom-6 left-6 bg-slate-900/90 backdrop-blur-md border border-slate-700/80 px-4 py-2.5 rounded-xl flex items-center gap-2.5">
                <div className="w-2.5 h-2.5 rounded-full bg-blue-500 animate-ping" />
                <span className="text-xs font-bold uppercase tracking-wider text-slate-200">
                  Nottinghamshire's Premier Mobile Detailer
                </span>
              </div>
            </div>

            {/* Decorative back-plate frame */}
            <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-blue-500/20 rounded-2xl -z-10 hidden sm:block" />
          </div>

          {/* RIGHT TEXT COLUMN */}
          <div className="lg:col-span-6 space-y-6" data-aos="fade-left">
            
            {/* EYEBROW */}
            <div className="flex items-center gap-2 text-blue-400 font-bold tracking-[0.25em] text-xs uppercase">
              <Sparkles className="w-4 h-4 text-blue-400" />
              <span>ATTENTION TO DETAIL</span>
            </div>

            {/* HEADLINE */}
            <div className="space-y-1">
              <h2 className="font-heading text-4xl sm:text-6xl font-black uppercase tracking-tight text-white leading-none">
                BECAUSE THE LITTLE
              </h2>
              <div className="flex items-center gap-3">
                <span className="font-heading text-4xl sm:text-6xl font-black uppercase tracking-tight bg-gradient-to-r from-blue-400 via-blue-500 to-cyan-300 bg-clip-text text-transparent leading-none">
                  THINGS MATTER.
                </span>
                <Sparkles className="w-5 h-5 text-cyan-300 animate-pulse" />
              </div>
            </div>

            {/* PARAGRAPH */}
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed pt-2 font-normal">
              Every detail, every time. I take pride in delivering a finish that speaks for itself.
            </p>

            {/* QUALITY HIGHLIGHT CHECKLIST */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {[
                'Showroom Grade Finish',
                '100% Mobile Equipment & Power',
                'Gentle Scratch-Free Methods',
                'Tailored Paint Protection'
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2.5 text-xs font-bold text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            {/* SIGNATURE */}
            <div className="pt-6 border-t border-slate-800/80">
              <span className="font-signature text-5xl sm:text-6xl text-slate-100 block tracking-wide select-none drop-shadow-md">
                Hardy
              </span>
              <p className="text-slate-400 text-xs font-bold uppercase tracking-widest mt-1">
                Founder & Master Detailer
              </p>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
