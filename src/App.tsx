import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ServicesSection } from './components/ServicesSection';
import { FeatureBar } from './components/FeatureBar';
import { AboutSection } from './components/AboutSection';
import { BeforeAfterSection } from './components/BeforeAfterSection';
import { GallerySection } from './components/GallerySection';
import { WhyChooseMeSection } from './components/WhyChooseMeSection';
import { BookingBanner } from './components/BookingBanner';
import { Footer } from './components/Footer';
import { ServiceDetailModal } from './components/ServiceDetailModal';
import { QuoteCalculatorModal } from './components/QuoteCalculatorModal';
import { ServicePackage } from './types';

export default function App() {
  const [selectedService, setSelectedService] = useState<ServicePackage | null>(null);
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: 'ease-in-out',
      offset: 60,
    });
  }, []);

  return (
    <div className="min-h-screen bg-[#070B14] text-slate-100 font-sans selection:bg-blue-500 selection:text-white">
      {/* HEADER NAVBAR */}
      <Header onOpenQuoteModal={() => setQuoteModalOpen(true)} />

      {/* HERO SECTION */}
      <Hero onOpenQuoteModal={() => setQuoteModalOpen(true)} />

      {/* SERVICES SECTION */}
      <ServicesSection 
        onSelectService={(service) => setSelectedService(service)} 
        onOpenQuoteModal={() => setQuoteModalOpen(true)}
      />

      {/* FEATURE BAR */}
      <FeatureBar />

      {/* ATTENTION TO DETAIL / ABOUT SECTION */}
      <AboutSection />

      {/* INTERACTIVE BEFORE & AFTER COMPARISON */}
      <BeforeAfterSection />

      {/* GALLERY OF RESULTS */}
      <GallerySection />

      {/* WHY CHOOSE ME & NOTTINGHAMSHIRE COVERAGE */}
      <WhyChooseMeSection />

      {/* BOOKING CTA BANNER */}
      <BookingBanner />

      {/* FOOTER */}
      <Footer />

      {/* SERVICE DETAIL MODAL */}
      <ServiceDetailModal
        service={selectedService}
        onClose={() => setSelectedService(null)}
        onOpenQuoteModal={() => setQuoteModalOpen(true)}
      />

      {/* INSTANT QUOTE CALCULATOR MODAL */}
      <QuoteCalculatorModal
        isOpen={quoteModalOpen}
        onClose={() => setQuoteModalOpen(false)}
      />
    </div>
  );
}
