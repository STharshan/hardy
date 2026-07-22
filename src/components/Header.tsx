import React, { useState, useEffect } from 'react';
import { Phone, Menu, X, Sparkles, MessageSquare } from 'lucide-react';
import { DISPLAY_PHONE, PHONE_NUMBER, WHATSAPP_LINK } from '../data/servicesData';
import logo from '../../assets/logo.png';

interface HeaderProps {
  onOpenQuoteModal: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenQuoteModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Active section tracking
      const sections = ['home', 'services', 'about', 'why-us', 'gallery', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'HOME', href: '#home', id: 'home' },
    { name: 'SERVICES', href: '#services', id: 'services' },
    { name: 'ABOUT ME', href: '#about', id: 'about' },
    { name: 'WHY CHOOSE ME', href: '#why-us', id: 'why-us' },
    { name: 'GALLERY', href: '#gallery', id: 'gallery' },
    { name: 'CONTACT', href: '#contact', id: 'contact' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-[#080C16]/95 backdrop-blur-md py-3 border-b border-slate-800/80 shadow-2xl' 
          : 'bg-gradient-to-b from-[#080C16]/90 via-[#080C16]/60 to-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* HARDY'S VALETING LOGO */}
          <a href="#home" className="group flex items-center">
            <img
              src={logo}
              alt="Hardy's Valeting logo"
              className="h-10 w-auto sm:h-18 object-contain transition-transform duration-200 group-hover:scale-105"
            />
          </a>

          {/* DESKTOP NAVIGATION */}
          <nav className="hidden lg:flex items-center space-x-7">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`text-xs font-bold tracking-widest transition-all duration-200 relative py-1 ${
                    isActive 
                      ? 'text-white font-extrabold' 
                      : 'text-slate-300 hover:text-white'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-500 rounded-full animate-fade-in" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* DESKTOP PHONE CALL CTA BUTTON */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={onOpenQuoteModal}
              className="hidden xl:inline-flex text-xs font-bold uppercase tracking-wider text-blue-400 hover:text-blue-300 border border-blue-500/40 hover:border-blue-400 px-4 py-2.5 rounded-full transition-all bg-blue-950/30 hover:bg-blue-900/40"
            >
              Get Quote
            </button>

            <a
              href={`tel:${PHONE_NUMBER}`}
              className="flex items-center gap-2.5 bg-slate-900/80 hover:bg-slate-800 text-white text-xs font-bold tracking-wider px-4 py-2.5 rounded-full border border-slate-700/80 hover:border-blue-500/60 transition-all duration-300 shadow-lg group"
            >
              <div className="w-7 h-7 rounded-full bg-blue-600/30 group-hover:bg-blue-600 text-blue-400 group-hover:text-white flex items-center justify-center transition-colors">
                <Phone className="w-3.5 h-3.5" />
              </div>
              <span>{DISPLAY_PHONE}</span>
            </a>
          </div>

          {/* MOBILE MENU TOGGLE */}
          <div className="lg:hidden flex items-center gap-2">
            <a
              href={`tel:${PHONE_NUMBER}`}
              className="sm:hidden p-2 text-white bg-blue-600/80 rounded-full border border-blue-400/30"
              aria-label="Call Hardy"
            >
              <Phone className="w-4 h-4" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-300 hover:text-white bg-slate-900/80 border border-slate-800 rounded-xl focus:outline-none"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* MOBILE DRAWER NAV */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0A0F1D]/98 border-b border-slate-800 px-4 pt-4 pb-6 space-y-3 animate-fade-in">
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`text-sm font-bold tracking-wider px-3 py-2.5 rounded-lg transition-colors ${
                  activeSection === link.id
                    ? 'bg-blue-600/20 text-blue-400 border border-blue-500/30'
                    : 'text-slate-300 hover:bg-slate-800/60 hover:text-white'
                }`}
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="pt-4 border-t border-slate-800 flex flex-col gap-2.5">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenQuoteModal();
              }}
              className="w-full py-3 bg-blue-600 text-white font-bold text-xs uppercase tracking-wider rounded-xl text-center shadow-lg hover:bg-blue-500 transition"
            >
              Instant Quote & Booking
            </button>

            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2.5 bg-emerald-600/20 border border-emerald-500/40 text-emerald-300 font-bold text-xs uppercase tracking-wider rounded-xl flex items-center justify-center gap-2"
            >
              <MessageSquare className="w-4 h-4 text-emerald-400" />
              WhatsApp Quick Message
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
