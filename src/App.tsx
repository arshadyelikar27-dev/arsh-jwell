import React from 'react';
import { CustomCursor } from './components/CustomCursor';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { LiveRates } from './components/LiveRates';
import { Collection } from './components/Collection';
import { About } from './components/About';
import { Footer } from './components/Footer';
import { NoiseOverlay } from './components/NoiseOverlay';
import { useSmoothScroll } from './hooks/useSmoothScroll';
import { WhatsAppToggle } from './components/WhatsAppToggle';

export const App: React.FC = () => {
  // Initialize Lenis smooth scroll
  useSmoothScroll();

  return (
    <div className="relative min-h-screen bg-white text-[#1A0A00] selection:bg-royal selection:text-white font-sans overflow-x-hidden">
      {/* Film grain noise texture */}
      <NoiseOverlay />

      {/* Interactive Diamond & Gold Trail Cursor */}
      <CustomCursor />


      {/* Fixed Sticky Navigation */}
      <Navbar />

      {/* 1. Full-Bleed Video Hero Section */}
      <Hero />

      {/* 2. Live Gold & Silver Rate Widget */}
      <LiveRates />

      {/* 3. Collection with Filters */}
      <Collection />

      {/* 4. About Section */}
      <About />

      {/* 5. Minimal Dark Luxury Footer */}
      <Footer />

      {/* WhatsApp Floating Toggle */}
      <WhatsAppToggle />
    </div>
  );
};

export default App;
