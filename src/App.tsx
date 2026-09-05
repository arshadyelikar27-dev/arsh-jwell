import React from 'react';
import { CustomCursor } from './components/CustomCursor';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Collection } from './components/Collection';
import { Footer } from './components/Footer';
import { NoiseOverlay } from './components/NoiseOverlay';
import { useSmoothScroll } from './hooks/useSmoothScroll';

export const App: React.FC = () => {
  // Initialize Lenis smooth scroll
  useSmoothScroll();

  return (
    <div className="relative min-h-screen bg-charcoal-900 text-ivory-100 selection:bg-gold selection:text-charcoal-950 font-sans overflow-x-hidden">
      {/* Film grain noise texture */}
      <NoiseOverlay />

      {/* Interactive Diamond & Gold Trail Cursor */}
      <CustomCursor />


      {/* Fixed Sticky Navigation */}
      <Navbar />

      {/* 1. Full-Bleed Video Hero Section */}
      <Hero />

      {/* 2. Asymmetric Editorial Collection Showroom */}
      <Collection />

      {/* 3. Minimal Dark Luxury Footer */}
      <Footer />
    </div>
  );
};

export default App;
