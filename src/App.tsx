import React, { useState } from 'react';
import { CustomCursor } from './components/CustomCursor';
import { Preloader } from './components/Preloader';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Collection } from './components/Collection';
import { Footer } from './components/Footer';
import { ProductModal } from './components/ProductModal';
import { NoiseOverlay } from './components/NoiseOverlay';
import { useSmoothScroll } from './hooks/useSmoothScroll';
import { ProductItem } from './config/siteContent';

export const App: React.FC = () => {
  // Initialize Lenis smooth scroll
  useSmoothScroll();

  const [, setPreloaderFinished] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<ProductItem | null>(null);

  return (
    <div className="relative min-h-screen bg-charcoal-900 text-ivory-100 selection:bg-gold selection:text-charcoal-950 font-sans overflow-x-hidden">
      {/* Film grain noise texture */}
      <NoiseOverlay />

      {/* Interactive Diamond & Gold Trail Cursor */}
      <CustomCursor />

      {/* Luxury First-Visit Entrance Preloader */}
      <Preloader onComplete={() => setPreloaderFinished(true)} />

      {/* Fixed Sticky Navigation */}
      <Navbar />

      {/* 1. Full-Bleed Video Hero Section */}
      <Hero />

      {/* 2. Asymmetric Editorial Collection Showroom */}
      <Collection onSelectProduct={(product) => setSelectedProduct(product)} />

      {/* 3. Minimal Dark Luxury Footer */}
      <Footer />

      {/* Modals & Dialogs */}
      <ProductModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />
    </div>
  );
};

export default App;
