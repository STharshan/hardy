import React from 'react';
import { Sparkles, Brush, Disc, Car, ArrowRight } from 'lucide-react';
import { SERVICES_DATA } from '../data/servicesData';
import { ServicePackage } from '../types';

interface ServicesSectionProps {
  onSelectService: (service: ServicePackage) => void;
  onOpenQuoteModal: () => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectService, onOpenQuoteModal }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'sparkles':
        return <Sparkles className="w-5 h-5 text-blue-600" />;
      case 'brush':
        return <Brush className="w-5 h-5 text-blue-600" />;
      case 'disc':
        return <Disc className="w-5 h-5 text-blue-600" />;
      case 'car':
      default:
        return <Car className="w-5 h-5 text-blue-600" />;
    }
  };

  return (
    <section id="services" className="bg-[#EEF2F6] text-slate-900 py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* LEFT HEADER COLUMN */}
          <div className="lg:col-span-4 space-y-6 pt-2" data-aos="fade-right">
            <div className="text-blue-700 font-bold tracking-[0.2em] text-xs uppercase">
              OUR SERVICES
            </div>

            <h2 className="font-heading text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.08] uppercase">
              COMPLETE CARE,<br />
              WHEREVER YOU ARE.
            </h2>

            <p className="text-slate-600 text-sm leading-relaxed max-w-md">
              From a quick refresh to a full detail, your car deserves the best – at home, at work, or wherever you are.
            </p>

            <div className="pt-2">
              <button
                onClick={onOpenQuoteModal}
                className="inline-flex items-center gap-2 bg-[#132342] hover:bg-[#0A1428] text-white px-6 py-3.5 rounded-xl font-bold text-xs uppercase tracking-wider transition-all duration-300 shadow-lg hover:shadow-xl group"
              >
                <span>View Services</span>
                <ArrowRight className="w-4 h-4 text-blue-400 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* RIGHT CARDS GRID (2x2 Grid) */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-6" data-aos="fade-left">
            {SERVICES_DATA.map((service, index) => (
              <div
                key={service.id}
                onClick={() => onSelectService(service)}
                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl border border-slate-200/80 transition-all duration-300 group cursor-pointer flex flex-col justify-between"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div>
                  {/* CARD IMAGE CONTAINER */}
                  <div className="relative h-48 overflow-hidden bg-slate-100">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60 group-hover:opacity-30 transition-opacity" />
                    
                    {/* Price Tag Overlay */}
                    <div className="absolute top-3 right-3 bg-slate-900/90 text-white text-xs font-extrabold px-3 py-1 rounded-full border border-slate-700/60 shadow">
                      From {service.priceStart}
                    </div>
                  </div>

                  {/* OVERLAPPING CIRCULAR ICON */}
                  <div className="relative px-6 pt-0 pb-2">
                    <div className="-mt-6 w-12 h-12 rounded-full bg-slate-100 border-2 border-white shadow-md flex items-center justify-center group-hover:bg-blue-50 transition-colors">
                      {getIcon(service.iconName)}
                    </div>
                  </div>

                  {/* CARD TEXT CONTENT */}
                  <div className="px-6 pb-6 space-y-2">
                    <h3 className="font-heading text-lg font-extrabold text-slate-900 uppercase tracking-wide group-hover:text-blue-600 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-slate-600 text-xs leading-relaxed">
                      {service.subtitle}
                    </p>
                  </div>
                </div>

                {/* CARD FOOTER LINK */}
                <div className="px-6 pb-5 pt-0 flex items-center justify-between text-xs font-bold text-blue-700 border-t border-slate-100 mt-2">
                  <span>View Details & Pricing</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};
