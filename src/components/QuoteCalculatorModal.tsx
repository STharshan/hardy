import React, { useState } from 'react';
import { X, Check, Calculator, MessageSquare, Phone, Sparkles } from 'lucide-react';
import { SERVICES_DATA, ADDONS, DISPLAY_PHONE, PHONE_NUMBER } from '../data/servicesData';

interface QuoteCalculatorModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const QuoteCalculatorModal: React.FC<QuoteCalculatorModalProps> = ({ isOpen, onClose }) => {
  const [selectedVehicle, setSelectedVehicle] = useState<'hatch' | 'sedan' | 'suv' | 'van'>('sedan');
  const [selectedServiceId, setSelectedServiceId] = useState<string>(SERVICES_DATA[0].id);
  const [selectedAddons, setSelectedAddons] = useState<string[]>([]);
  const [userLocation, setUserLocation] = useState<string>('Nottingham');
  const [vehicleModelInput, setVehicleModelInput] = useState<string>('');

  if (!isOpen) return null;

  // Pricing multiplier for vehicle sizes
  const vehicleMultipliers = {
    hatch: 1.0,
    sedan: 1.1,
    suv: 1.25,
    van: 1.4,
  };

  const selectedService = SERVICES_DATA.find(s => s.id === selectedServiceId) || SERVICES_DATA[0];
  const basePriceNum = parseInt(selectedService.priceStart.replace(/[^0-9]/g, '')) || 50;
  
  const calculatedServicePrice = Math.round(basePriceNum * vehicleMultipliers[selectedVehicle]);
  const addonsTotalPrice = selectedAddons.reduce((sum, addonId) => {
    const item = ADDONS.find(a => a.id === addonId);
    return sum + (item ? item.price : 0);
  }, 0);

  const totalPrice = calculatedServicePrice + addonsTotalPrice;

  const toggleAddon = (addonId: string) => {
    if (selectedAddons.includes(addonId)) {
      setSelectedAddons(selectedAddons.filter(id => id !== addonId));
    } else {
      setSelectedAddons([...selectedAddons, addonId]);
    }
  };

  const generateWhatsAppMessage = () => {
    const addonsText = selectedAddons.length > 0 
      ? selectedAddons.map(id => ADDONS.find(a => a.id === id)?.name).filter(Boolean).join(', ') 
      : 'None';

    const text = `Hi Hardy! I generated an instant estimate on your website:\n\n` +
      `🚗 Vehicle: ${vehicleModelInput || selectedVehicle.toUpperCase()}\n` +
      `🧼 Service: ${selectedService.title}\n` +
      `✨ Add-ons: ${addonsText}\n` +
      `📍 Location: ${userLocation}\n` +
      `💰 Total Estimate: ~£${totalPrice}\n\n` +
      `Could we arrange an appointment?`;

    return `https://wa.me/447368366877?text=${encodeURIComponent(text)}`;
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fade-in">
      <div className="bg-[#0B1222] border border-slate-700/80 rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 relative shadow-2xl text-white space-y-6">
        
        {/* CLOSE BUTTON */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 bg-slate-800 text-slate-300 hover:text-white rounded-full focus:outline-none transition"
        >
          <X className="w-5 h-5" />
        </button>

        {/* HEADER */}
        <div className="space-y-1">
          <div className="flex items-center gap-2 text-blue-400 font-bold text-xs uppercase tracking-widest">
            <Calculator className="w-4 h-4 text-blue-400" />
            <span>INSTANT ESTIMATOR</span>
          </div>
          <h3 className="font-heading text-2xl sm:text-3xl font-black uppercase text-white">
            CALCULATE YOUR DETAIL PRICE
          </h3>
          <p className="text-slate-400 text-xs">
            Select your vehicle size and desired services to calculate an instant quote.
          </p>
        </div>

        {/* STEP 1: VEHICLE SIZE */}
        <div className="space-y-3">
          <label className="block text-xs font-bold uppercase tracking-wider text-slate-300">
            1. Select Vehicle Type
          </label>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
            {[
              { id: 'hatch', label: 'Hatchback / Coupe', icon: '🚗' },
              { id: 'sedan', label: 'Sedan / Estate', icon: '🏎️' },
              { id: 'suv', label: 'SUV / 4x4', icon: '🚙' },
              { id: 'van', label: 'Van / Commercial', icon: '🚐' },
            ].map(v => (
              <button
                key={v.id}
                type="button"
                onClick={() => setSelectedVehicle(v.id as any)}
                className={`p-3 rounded-2xl border text-left transition flex flex-col justify-between space-y-1 ${
                  selectedVehicle === v.id
                    ? 'bg-blue-600/20 border-blue-500 text-white shadow-lg'
                    : 'bg-slate-900 border-slate-800 text-slate-400 hover:border-slate-700'
                }`}
              >
                <span className="text-xl">{v.icon}</span>
                <span className="text-xs font-bold uppercase">{v.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* VEHICLE MODEL INPUT */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div>
            <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-1">
              Your Car Make/Model (Optional)
            </label>
            <input
              type="text"
              placeholder="e.g. BMW 3 Series, Audi Q5"
              value={vehicleModelInput}
              onChange={e => setVehicleModelInput(e.target.value)}
              className="w-full bg-slate-900 border border-slate-800 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-blue-500"
            />
          </div>
          <div>
            <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-1">
              Location in Nottinghamshire
            </label>
            <input
              type="text"
              placeholder="e.g. West Bridgford"
              value={userLocation}
              onChange={e => setUserLocation(e.target.value)}
              className="w-full bg-slate-900 border border-slate-800 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-blue-500"
            />
          </div>
        </div>

        {/* STEP 2: CHOOSE PACKAGE */}
        <div className="space-y-3">
          <label className="block text-xs font-bold uppercase tracking-wider text-slate-300">
            2. Choose Primary Service
          </label>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {SERVICES_DATA.map(s => (
              <button
                key={s.id}
                type="button"
                onClick={() => setSelectedServiceId(s.id)}
                className={`p-3.5 rounded-2xl border text-left transition flex items-center justify-between ${
                  selectedServiceId === s.id
                    ? 'bg-blue-600/20 border-blue-500 text-white shadow'
                    : 'bg-slate-900 border-slate-800 text-slate-400 hover:border-slate-700'
                }`}
              >
                <div>
                  <div className="text-xs font-bold uppercase text-white">{s.title}</div>
                  <div className="text-[10px] text-slate-400">{s.duration}</div>
                </div>
                <div className="text-xs font-black text-blue-400">
                  From {s.priceStart}
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* STEP 3: OPTIONAL ADD-ONS */}
        <div className="space-y-3">
          <label className="block text-xs font-bold uppercase tracking-wider text-slate-300">
            3. Select Extra Protection Add-ons
          </label>
          <div className="space-y-2">
            {ADDONS.map(addon => {
              const isChecked = selectedAddons.includes(addon.id);
              return (
                <div
                  key={addon.id}
                  onClick={() => toggleAddon(addon.id)}
                  className={`p-3 rounded-xl border text-xs cursor-pointer transition flex items-center justify-between ${
                    isChecked
                      ? 'bg-blue-900/30 border-blue-500/80 text-white'
                      : 'bg-slate-900/80 border-slate-800 text-slate-400 hover:border-slate-700'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className={`w-4 h-4 rounded flex items-center justify-center border ${isChecked ? 'bg-blue-600 border-blue-500 text-white' : 'border-slate-700'}`}>
                      {isChecked && <Check className="w-3 h-3" />}
                    </div>
                    <div>
                      <div className="font-bold text-white">{addon.name}</div>
                      <div className="text-[10px] text-slate-400">{addon.description}</div>
                    </div>
                  </div>
                  <div className="font-bold text-blue-400 shrink-0 ml-2">+£{addon.price}</div>
                </div>
              );
            })}
          </div>
        </div>

        {/* TOTAL SUMMARY & ACTIONS */}
        <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-5 space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-xs text-slate-400 font-bold uppercase">Estimated Investment</div>
              <div className="text-2xl font-black text-white font-heading">
                ~£{totalPrice} <span className="text-xs font-normal text-slate-400">(No hidden fees)</span>
              </div>
            </div>
            <div className="text-right">
              <span className="inline-flex items-center gap-1 text-[10px] bg-emerald-500/20 text-emerald-400 px-2.5 py-1 rounded-full font-bold">
                <Sparkles className="w-3 h-3" />
                Mobile Arrival Included
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
            <a
              href={generateWhatsAppMessage()}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-emerald-600 hover:bg-emerald-500 text-white py-3.5 rounded-xl text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg transition"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Book via WhatsApp</span>
            </a>

            <a
              href={`tel:${PHONE_NUMBER}`}
              className="w-full bg-slate-800 hover:bg-slate-700 border border-slate-700 text-white py-3.5 rounded-xl text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition"
            >
              <Phone className="w-4 h-4 text-blue-400" />
              <span>Call {DISPLAY_PHONE}</span>
            </a>
          </div>
        </div>

      </div>
    </div>
  );
};
