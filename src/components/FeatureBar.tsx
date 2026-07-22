import React from 'react';
import { ShieldCheck, Droplets, MapPin, Calendar } from 'lucide-react';
import { VALUE_PROPS } from '../data/servicesData';

export const FeatureBar: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'shieldCheck':
        return <ShieldCheck className="w-6 h-6 text-blue-400" />;
      case 'droplets':
        return <Droplets className="w-6 h-6 text-blue-400" />;
      case 'mapPin':
        return <MapPin className="w-6 h-6 text-blue-400" />;
      case 'calendar':
      default:
        return <Calendar className="w-6 h-6 text-blue-400" />;
    }
  };

  return (
    <section className="bg-[#091120] border-y border-slate-800/80 py-10 relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {VALUE_PROPS.map((prop, idx) => (
            <div 
              key={prop.id} 
              className="flex items-start gap-4 p-2 group"
              data-aos="fade-up"
              data-aos-delay={idx * 100}
            >
              <div className="w-12 h-12 rounded-xl bg-slate-900/90 border border-slate-700/80 group-hover:border-blue-500/60 flex items-center justify-center shrink-0 transition-colors shadow-inner">
                {getIcon(prop.icon)}
              </div>
              <div className="space-y-1">
                <h4 className="font-heading font-extrabold text-xs sm:text-sm tracking-wider uppercase text-white group-hover:text-blue-400 transition-colors">
                  {prop.title}
                </h4>
                <p className="text-slate-400 text-xs leading-relaxed">
                  {prop.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
