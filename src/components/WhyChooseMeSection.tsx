import React from 'react';
import { Sparkles, Star, MapPin, CheckCircle, Shield, ThumbsUp, Wrench } from 'lucide-react';
import { REVIEWS, NOTTINGHAM_AREAS } from '../data/servicesData';

export const WhyChooseMeSection: React.FC = () => {
  return (
    <section id="why-us" className="bg-[#090F1C] py-24 text-white relative border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* SECTION HEADER */}
        <div className="text-center space-y-3 mb-16" data-aos="fade-up">
          <div className="inline-flex items-center gap-2 text-blue-400 font-bold tracking-[0.25em] text-xs uppercase">
            <Sparkles className="w-4 h-4 text-blue-400" />
            <span>UNMATCHED QUALITY & CONVENIENCE</span>
          </div>
          <h2 className="font-heading text-4xl sm:text-5xl font-black uppercase tracking-tight text-white">
            WHY CHOOSE HARDY'S
          </h2>
          <p className="text-slate-400 text-sm max-w-xl mx-auto">
            I combine professional grade equipment with genuine passion for perfection, delivering unbeatable care right at your location.
          </p>
        </div>

        {/* 4 FEATURE PILLARS */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20" data-aos="fade-up" data-aos-delay="100">
          
          <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 space-y-3 hover:border-blue-500/50 transition duration-300">
            <div className="w-12 h-12 rounded-xl bg-blue-900/30 border border-blue-500/30 flex items-center justify-center text-blue-400">
              <Wrench className="w-6 h-6" />
            </div>
            <h3 className="font-heading font-extrabold text-sm uppercase text-white tracking-wider">
              FULLY SELF-CONTAINED
            </h3>
            <p className="text-slate-400 text-xs leading-relaxed">
              Equipped with onboard water and electricity so I can detail your vehicle anywhere, even without outdoor power or tap access.
            </p>
          </div>

          <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 space-y-3 hover:border-blue-500/50 transition duration-300">
            <div className="w-12 h-12 rounded-xl bg-blue-900/30 border border-blue-500/30 flex items-center justify-center text-blue-400">
              <Shield className="w-6 h-6" />
            </div>
            <h3 className="font-heading font-extrabold text-sm uppercase text-white tracking-wider">
              PREMIUM PRODUCTS ONLY
            </h3>
            <p className="text-slate-400 text-xs leading-relaxed">
              Using industry-trusted pH neutral foams, ceramic sealants, and soft plush microfiber mitts to protect your paintwork.
            </p>
          </div>

          <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 space-y-3 hover:border-blue-500/50 transition duration-300">
            <div className="w-12 h-12 rounded-xl bg-blue-900/30 border border-blue-500/30 flex items-center justify-center text-blue-400">
              <CheckCircle className="w-6 h-6" />
            </div>
            <h3 className="font-heading font-extrabold text-sm uppercase text-white tracking-wider">
              SCRATCH-FREE SAFE WASH
            </h3>
            <p className="text-slate-400 text-xs leading-relaxed">
              Multi-bucket wash method with grit guards guarantees zero swirl marks or holograms on your pride and joy.
            </p>
          </div>

          <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 space-y-3 hover:border-blue-500/50 transition duration-300">
            <div className="w-12 h-12 rounded-xl bg-blue-900/30 border border-blue-500/30 flex items-center justify-center text-blue-400">
              <ThumbsUp className="w-6 h-6" />
            </div>
            <h3 className="font-heading font-extrabold text-sm uppercase text-white tracking-wider">
              PROMPT & RELIABLE
            </h3>
            <p className="text-slate-400 text-xs leading-relaxed">
              Punctual arrival, polite clear communication, and dedicated customer care every single visit across Nottinghamshire.
            </p>
          </div>

        </div>

        {/* NOTTINGHAMSHIRE COVERAGE AREA */}
        <div className="bg-gradient-to-r from-slate-900 via-[#0B1528] to-slate-900 border border-slate-800 rounded-3xl p-8 mb-20" data-aos="fade-up">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-5 space-y-4">
              <div className="flex items-center gap-2 text-blue-400 font-bold text-xs uppercase tracking-widest">
                <MapPin className="w-4 h-4 text-blue-400" />
                <span>COVERAGE MAP</span>
              </div>
              <h3 className="font-heading text-3xl font-extrabold uppercase text-white">
                SERVING ALL OF NOTTINGHAMSHIRE
              </h3>
              <p className="text-slate-300 text-xs leading-relaxed">
                Whether you're at home, at work, or at a garage in Nottinghamshire, Hardy's mobile van comes straight to your location.
              </p>
            </div>

            <div className="lg:col-span-7">
              <div className="flex flex-wrap gap-2.5">
                {NOTTINGHAM_AREAS.map((area, idx) => (
                  <span
                    key={idx}
                    className="bg-slate-800/80 border border-slate-700/80 hover:border-blue-500/60 text-slate-200 text-xs font-bold px-3.5 py-1.5 rounded-full transition-all flex items-center gap-1.5"
                  >
                    <MapPin className="w-3 h-3 text-blue-400 shrink-0" />
                    <span>{area}</span>
                  </span>
                ))}
              </div>
            </div>

          </div>
        </div>

        {/* REVIEWS GRID */}
        <div className="space-y-8" data-aos="fade-up">
          <div className="text-center space-y-2">
            <h3 className="font-heading text-2xl font-black uppercase text-white">
              WHAT CUSTOMERS SAY
            </h3>
            <p className="text-slate-400 text-xs">
              Real 5-star feedback from local car owners
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {REVIEWS.map((review) => (
              <div
                key={review.id}
                className="bg-slate-900/90 border border-slate-800 rounded-2xl p-6 space-y-4 flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <p className="text-slate-300 text-xs leading-relaxed italic">
                    "{review.text}"
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs">
                  <div>
                    <div className="font-bold text-white">{review.author}</div>
                    <div className="text-slate-400 text-[11px]">{review.location} • {review.carModel}</div>
                  </div>
                  <div className="text-slate-400 text-[10px] font-semibold">{review.date}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
