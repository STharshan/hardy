import React from 'react';
import { Calendar, Phone, MessageSquare } from 'lucide-react';
import { DISPLAY_PHONE, PHONE_NUMBER, WHATSAPP_LINK } from '../data/servicesData';

export const BookingBanner: React.FC = () => {
  return (
    <section className="bg-[#070C18] py-16 text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-[#0C1B38] via-[#10244C] to-[#0C1B38] border border-blue-900/60 rounded-3xl p-8 lg:p-12 shadow-2xl relative overflow-hidden" data-aos="zoom-in">
          
          {/* Subtle background glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            
            {/* LEFT TEXT COLUMN */}
            <div className="lg:col-span-7 flex items-center gap-5">
              <div className="w-14 h-14 rounded-2xl bg-blue-900/40 border border-blue-500/30 flex items-center justify-center shrink-0 text-blue-400 shadow-inner">
                <Calendar className="w-7 h-7" />
              </div>
              <div className="space-y-1">
                <div className="text-blue-400 font-extrabold text-xs tracking-widest uppercase">
                  READY FOR THAT SHOWROOM FINISH?
                </div>
                <h3 className="font-heading text-3xl sm:text-4xl font-black uppercase tracking-tight text-white leading-none">
                  BOOK YOUR APPOINTMENT <span className="text-blue-400">TODAY.</span>
                </h3>
              </div>
            </div>

            {/* RIGHT BUTTONS COLUMN */}
            <div className="lg:col-span-5 flex flex-wrap lg:justify-end gap-4 items-center">
              
              {/* BUTTON 1: CALL OR TEXT */}
              <a
                href={`tel:${PHONE_NUMBER}`}
                className="flex items-center gap-3.5 bg-[#101E38] hover:bg-[#182C52] border border-blue-500/40 rounded-2xl px-5 py-3.5 text-white shadow-xl transition duration-300 group"
              >
                <div className="w-9 h-9 rounded-xl bg-blue-600/30 group-hover:bg-blue-600 text-blue-400 group-hover:text-white flex items-center justify-center transition-colors">
                  <Phone className="w-4 h-4" />
                </div>
                <div className="text-left">
                  <div className="font-heading font-extrabold text-sm tracking-wider text-white">
                    {DISPLAY_PHONE}
                  </div>
                  <div className="text-[10px] text-slate-400">
                    Call or Text
                  </div>
                </div>
              </a>

              {/* BUTTON 2: WHATSAPP ME */}
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3.5 bg-[#0B1426] hover:bg-[#121E36] border border-slate-700/80 rounded-2xl px-5 py-3.5 text-white shadow-xl transition duration-300 group"
              >
                <div className="w-9 h-9 rounded-xl bg-slate-800 group-hover:bg-emerald-600 text-slate-300 group-hover:text-white flex items-center justify-center transition-colors">
                  <MessageSquare className="w-4 h-4 text-emerald-400 group-hover:text-white" />
                </div>
                <div className="text-left">
                  <div className="font-heading font-extrabold text-sm tracking-wider text-white">
                    WhatsApp Me
                  </div>
                  <div className="text-[10px] text-slate-400">
                    Quick Response
                  </div>
                </div>
              </a>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
