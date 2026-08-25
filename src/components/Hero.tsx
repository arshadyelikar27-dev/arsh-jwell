import React from 'react';
import { motion } from 'framer-motion';
import { SITE_CONFIG } from '../config/siteContent';

export const Hero: React.FC = () => {
  const handleScrollToCollection = () => {
    const collectionEl = document.querySelector('#brand-statement') || document.querySelector('#collection');
    if (collectionEl) {
      collectionEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">
      
      {/* Full-bleed Hero Video Background */}
      <div className="absolute inset-0 w-full h-full z-0 overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          poster="/images/hero-poster.jpg"
          className="w-full h-full object-cover scale-105 filter brightness-[0.8] contrast-[1.05]"
        >
          <source src="/videos/hero-video.mp4" type="video/mp4" />
          {/* Fallback image if video cannot play */}
          <img
            src="/images/hero-poster.jpg"
            alt="Haute Joaillerie Atelier"
            className="w-full h-full object-cover"
          />
        </video>

        {/* Dark Gradient Overlays for Text Legibility & Mood */}
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900 via-charcoal-900/40 to-black/60 pointer-events-none" />
        <div className="absolute inset-0 bg-radial-[circle_at_center,_transparent_0%,_rgba(11,11,12,0.6)_100%] pointer-events-none" />
        <div className="absolute inset-0 bg-black/20 pointer-events-none" />
      </div>

      {/* Hero Typography & Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-8 text-center pt-20 sm:pt-24 pb-16 flex flex-col items-center">
        
        {/* Uppercase Letter-Spaced Section Label with Gold Hairlines */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex items-center space-x-2 sm:space-x-3 mb-4 sm:mb-6"
        >
          <div className="w-6 sm:w-12 h-[1px] bg-gold/60" />
          <span className="font-sans text-[9px] sm:text-xs tracking-[0.3em] sm:tracking-[0.35em] uppercase text-gold font-light">
            {SITE_CONFIG.brandName} &bull; FINE ATELIER
          </span>
          <div className="w-6 sm:w-12 h-[1px] bg-gold/60" />
        </motion.div>

        {/* High-Contrast Luxury Serif Headline Tagline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="font-serif text-3xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight text-ivory-100 font-light leading-[1.12] sm:leading-[1.08] mb-4 sm:mb-6 max-w-4xl"
        >
          {SITE_CONFIG.tagline}
        </motion.h1>

        {/* Subtext Description */}
        <motion.p
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.7 }}
          className="font-sans text-xs sm:text-base md:text-lg text-ivory-200/90 font-light tracking-wide max-w-2xl mx-auto leading-relaxed px-2"
        >
          {SITE_CONFIG.subTagline}
        </motion.p>
      </div>

      {/* Subtle Animated Scroll-Down Cue */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        onClick={handleScrollToCollection}
        className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center space-y-2 text-ivory-muted hover:text-gold transition-colors duration-300 group cursor-pointer"
        aria-label="Scroll down"
      >
        <span className="font-sans text-[9px] tracking-[0.3em] uppercase text-ivory-muted/80 group-hover:text-gold transition-colors">
          Discover
        </span>
        <div className="w-[1px] h-6 sm:h-8 bg-charcoal-700 relative overflow-hidden">
          <motion.div
            animate={{ y: ['0%', '100%'] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute top-0 left-0 w-full h-1/2 bg-gold"
          />
        </div>
      </motion.button>
    </section>
  );
};
