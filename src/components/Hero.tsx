import React from 'react';
import { Phone, MessageSquare, ShieldCheck, Sparkles, ChevronRight } from 'lucide-react';
import { DISPLAY_PHONE, PHONE_NUMBER, WHATSAPP_LINK } from '../data/servicesData';

interface HeroProps {
  onOpenQuoteModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenQuoteModal }) => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-28 pb-16 overflow-hidden bg-[#070B14]">
      
      {/* BACKGROUND IMAGE & GRADIENT OVERLAYS */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=1920&q=85"
          alt="Sleek dark luxury sports car headlight detail"
          className="w-full h-full object-cover object-right-top md:object-center opacity-60 scale-105"
          referrerPolicy="no-referrer"
        />
        {/* Dark vignettes & overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#070B14] via-[#070B14]/85 to-transparent z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#070B14] via-transparent to-[#070B14]/70 z-10" />
        <div className="absolute inset-0 bg-radial from-transparent via-[#070B14]/30 to-[#070B14] z-10" />
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* LEFT CONTENT COLUMN */}
          <div className="lg:col-span-7 space-y-6 pt-4" data-aos="fade-right" data-aos-duration="1000">
            
            {/* TAGLINE EYEBROW */}
            <div className="inline-flex items-center gap-2 text-blue-400 font-bold tracking-[0.25em] text-xs sm:text-sm uppercase">
              <Sparkles className="w-4 h-4 text-blue-400 animate-spin-slow" />
              <span>MOBILE VALETING & DETAILING</span>
            </div>

            {/* MAIN HEADLINE */}
            <div className="space-y-1">
              <h1 className="font-heading text-5xl sm:text-7xl lg:text-8xl font-black uppercase tracking-tight text-white leading-none">
                DETAILING
              </h1>
              <div className="flex items-center gap-3">
                <span className="font-heading text-5xl sm:text-7xl lg:text-8xl font-black uppercase tracking-tight bg-gradient-to-r from-blue-400 via-blue-500 to-cyan-300 bg-clip-text text-transparent leading-none">
                  AT ITS BEST
                </span>
                <Sparkles className="w-6 h-6 text-cyan-300 animate-pulse hidden sm:inline-block" />
              </div>
            </div>

            {/* DESCRIPTION */}
            <p className="text-slate-300 text-base sm:text-lg max-w-xl font-normal leading-relaxed pt-2">
              Professional mobile detailing services across Nottinghamshire. I bring the showroom experience directly to your driveway.
            </p>

            {/* ACTION BUTTON CARDS ROW */}
            <div className="pt-4 flex flex-wrap gap-4 items-center" data-aos="fade-up" data-aos-delay="200">
              
              {/* BUTTON 1: CALL OR TEXT */}
              <a
                href={`tel:${PHONE_NUMBER}`}
                className="flex items-center gap-3.5 bg-[#101E38] hover:bg-[#172B52] border border-blue-500/40 hover:border-blue-400 rounded-2xl px-5 py-3.5 text-white shadow-xl transition-all duration-300 group"
              >
                <div className="w-10 h-10 rounded-xl bg-blue-600/30 group-hover:bg-blue-600 text-blue-400 group-hover:text-white flex items-center justify-center transition-colors">
                  <Phone className="w-5 h-5" />
                </div>
                <div className="text-left">
                  <div className="font-heading font-extrabold text-base tracking-wider leading-tight text-white">
                    {DISPLAY_PHONE}
                  </div>
                  <div className="text-[11px] text-slate-400 font-medium">
                    Call or Text
                  </div>
                </div>
              </a>

              {/* BUTTON 2: WHATSAPP ME */}
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3.5 bg-[#0D1526]/90 hover:bg-[#14203A] border border-slate-700/80 hover:border-slate-500 rounded-2xl px-5 py-3.5 text-white shadow-xl transition-all duration-300 group"
              >
                <div className="w-10 h-10 rounded-xl bg-slate-800 group-hover:bg-emerald-600 text-slate-300 group-hover:text-white flex items-center justify-center transition-colors">
                  <MessageSquare className="w-5 h-5 text-emerald-400 group-hover:text-white" />
                </div>
                <div className="text-left">
                  <div className="font-heading font-extrabold text-base tracking-wider leading-tight text-white">
                    WhatsApp Me
                  </div>
                  <div className="text-[11px] text-slate-400 font-medium">
                    Quick Response
                  </div>
                </div>
              </a>

              {/* INSTANT QUOTE TRIGGER BUTTON */}
              <button
                onClick={onOpenQuoteModal}
                className="flex items-center gap-2 text-xs font-extrabold uppercase tracking-widest text-slate-300 hover:text-white underline underline-offset-8 decoration-blue-500 hover:decoration-blue-400 px-3 py-2 transition"
              >
                <span>Calculate Price</span>
                <ChevronRight className="w-4 h-4 text-blue-400" />
              </button>

            </div>

          </div>

          {/* RIGHT FLOATING CARD COLUMN */}
          <div className="lg:col-span-5 flex justify-end lg:pt-32" data-aos="fade-left" data-aos-delay="300">
            <div className="bg-slate-900/85 backdrop-blur-md border border-slate-700/80 rounded-2xl p-5 shadow-2xl flex items-center gap-4 max-w-sm hover:border-blue-500/50 transition-all glow-blue">
              <div className="w-12 h-12 rounded-xl bg-blue-900/40 border border-blue-500/30 flex items-center justify-center shrink-0 text-blue-400">
                <ShieldCheck className="w-7 h-7" />
              </div>
              <div>
                <h4 className="font-heading font-bold text-sm uppercase tracking-wider text-white">
                  QUALITY YOU CAN SEE
                </h4>
                <p className="text-slate-400 text-xs mt-0.5">
                  Attention to detail. Every time.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>

    </section>
  );
};
