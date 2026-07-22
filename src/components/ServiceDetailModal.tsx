import React from 'react';
import { X, CheckCircle2, Clock, Sparkles, MessageSquare, Phone } from 'lucide-react';
import { ServicePackage } from '../types';
import { DISPLAY_PHONE, PHONE_NUMBER, WHATSAPP_LINK } from '../data/servicesData';

interface ServiceDetailModalProps {
  service: ServicePackage | null;
  onClose: () => void;
  onOpenQuoteModal: () => void;
}

export const ServiceDetailModal: React.FC<ServiceDetailModalProps> = ({ service, onClose, onOpenQuoteModal }) => {
  if (!service) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fade-in">
      <div className="bg-[#0B1222] border border-slate-700/80 rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 relative shadow-2xl text-white space-y-6">
        
        {/* CLOSE BUTTON */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 bg-slate-800 text-slate-300 hover:text-white rounded-full focus:outline-none transition z-20"
        >
          <X className="w-5 h-5" />
        </button>

        {/* TOP IMAGE BANNER */}
        <div className="relative h-52 -mx-6 -mt-6 sm:-mx-8 sm:-mt-8 overflow-hidden rounded-t-3xl bg-slate-900">
          <img
            src={service.image}
            alt={service.title}
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B1222] via-[#0B1222]/40 to-transparent" />
          
          <div className="absolute bottom-4 left-6 sm:left-8 right-6 flex items-end justify-between">
            <div>
              <span className="text-blue-400 text-xs font-bold uppercase tracking-widest block mb-1">
                PACKAGE OVERVIEW
              </span>
              <h3 className="font-heading text-3xl font-black uppercase text-white">
                {service.title}
              </h3>
            </div>
            <div className="bg-blue-600 text-white font-black text-sm px-4 py-1.5 rounded-full shadow">
              From {service.priceStart}
            </div>
          </div>
        </div>

        {/* DURATION & SUBTITLE */}
        <div className="space-y-3">
          <div className="flex items-center gap-2 text-xs font-bold text-slate-300">
            <Clock className="w-4 h-4 text-blue-400" />
            <span>Estimated Duration: {service.duration}</span>
          </div>
          <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
            {service.description}
          </p>
        </div>

        {/* INCLUDED FEATURES CHECKLIST */}
        <div className="space-y-3 pt-2 border-t border-slate-800">
          <h4 className="font-heading font-extrabold text-xs uppercase tracking-wider text-slate-200">
            WHAT IS INCLUDED IN THIS DETAIL:
          </h4>
          <div className="space-y-2.5">
            {service.features.map((feature, idx) => (
              <div key={idx} className="flex items-start gap-3 text-xs text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                <span className="leading-relaxed">{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* ACTION BUTTONS */}
        <div className="pt-4 border-t border-slate-800 grid grid-cols-1 sm:grid-cols-2 gap-3">
          <button
            onClick={() => {
              onClose();
              onOpenQuoteModal();
            }}
            className="w-full bg-blue-600 hover:bg-blue-500 text-white py-3.5 rounded-xl font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg transition"
          >
            <Sparkles className="w-4 h-4" />
            <span>Customize & Calculate Quote</span>
          </button>

          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full bg-emerald-600 hover:bg-emerald-500 text-white py-3.5 rounded-xl font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Book via WhatsApp</span>
          </a>
        </div>

      </div>
    </div>
  );
};
