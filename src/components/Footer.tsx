import React from 'react';
import { Sparkles, Phone, MapPin, MessageSquare, Mail, Facebook, Instagram } from 'lucide-react';
import { DISPLAY_PHONE, PHONE_NUMBER, WHATSAPP_LINK, EMAIL_ADDRESS, LOCATION_TEXT } from '../data/servicesData';
import logo from '../../assets/logo.png';

export const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-[#04070D] border-t border-slate-800/80 pt-16 pb-10 text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-16 border-b border-slate-800/80">
          
          {/* COLUMN 1: LOGO & ABOUT */}
          <div className="lg:col-span-4 space-y-5">
            
            {/* LOGO */}
            <a href="#home" className="inline-block group">
              <img
                src={logo}
                alt="Hardy's Valeting logo"
                className="h-18 w-auto object-contain transition-transform duration-200 group-hover:scale-105"
              />
            </a>

            <p className="text-slate-400 text-xs leading-relaxed max-w-sm">
              Mobile valeting & detailing services across Nottinghamshire. Bringing the showroom experience to you.
            </p>

            {/* SOCIAL LINKS */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-slate-900 border border-slate-800 hover:border-blue-500 text-slate-400 hover:text-white flex items-center justify-center transition"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-slate-900 border border-slate-800 hover:border-blue-500 text-slate-400 hover:text-white flex items-center justify-center transition"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-slate-900 border border-slate-800 hover:border-emerald-500 text-slate-400 hover:text-emerald-400 flex items-center justify-center transition"
                aria-label="WhatsApp"
              >
                <MessageSquare className="w-4 h-4" />
              </a>
            </div>

          </div>

          {/* COLUMN 2: QUICK LINKS */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="font-heading font-bold text-xs uppercase tracking-widest text-slate-300">
              QUICK LINKS
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-400 font-medium">
              <li><a href="#home" className="hover:text-white transition">Home</a></li>
              <li><a href="#services" className="hover:text-white transition">Services</a></li>
              <li><a href="#about" className="hover:text-white transition">About Me</a></li>
              <li><a href="#why-us" className="hover:text-white transition">Why Choose Me</a></li>
              <li><a href="#gallery" className="hover:text-white transition">Gallery</a></li>
              <li><a href="#contact" className="hover:text-white transition">Contact</a></li>
            </ul>
          </div>

          {/* COLUMN 3: SERVICES */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-heading font-bold text-xs uppercase tracking-widest text-slate-300">
              SERVICES
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-400 font-medium">
              <li><a href="#services" className="hover:text-white transition">General Detail</a></li>
              <li><a href="#services" className="hover:text-white transition">Interior Detailing</a></li>
              <li><a href="#services" className="hover:text-white transition">Wheel Cleaning</a></li>
              <li><a href="#services" className="hover:text-white transition">Exterior Care</a></li>
            </ul>
          </div>

          {/* COLUMN 4: CONTACT */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-heading font-bold text-xs uppercase tracking-widest text-slate-300">
              CONTACT
            </h4>
            <ul className="space-y-3 text-xs text-slate-300">
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-blue-400 shrink-0" />
                <a href={`tel:${PHONE_NUMBER}`} className="hover:text-white font-bold">{DISPLAY_PHONE}</a>
              </li>
              <li className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-blue-400 shrink-0" />
                <span>{LOCATION_TEXT}</span>
              </li>
              <li className="flex items-center gap-3">
                <MessageSquare className="w-4 h-4 text-emerald-400 shrink-0" />
                <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="hover:text-emerald-400">WhatsApp available</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-blue-400 shrink-0" />
                <a href={`mailto:${EMAIL_ADDRESS}`} className="hover:text-white">{EMAIL_ADDRESS}</a>
              </li>
            </ul>
          </div>

        </div>

        {/* BOTTOM COPYRIGHT */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-slate-400 text-xs gap-4">
          <div>
            © 2024 Hardys Valeting. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-slate-300 transition">Privacy Policy</a>
            <span>|</span>
            <a href="#" className="hover:text-slate-300 transition">Terms & Conditions</a>
          </div>
        </div>

      </div>
    </footer>
  );
};
