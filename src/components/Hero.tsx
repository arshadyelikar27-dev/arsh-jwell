import React from 'react';
import { motion } from 'framer-motion';
import { SITE_CONFIG } from '../config/siteContent';

export const Hero: React.FC = () => {
  const handleScrollToCollection = () => {
    const el = document.querySelector('#collection');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="relative w-full flex items-center justify-center overflow-hidden"
      style={{ backgroundColor: '#000000', height: '90vh' }}
    >
      {/* Background Video — very subtle */}
      <div className="absolute inset-0 w-full h-full z-0 overflow-hidden">
        <video
          autoPlay loop muted playsInline preload="auto"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ opacity: 0.80, objectPosition: 'top center' }}
        >
          <source src="/Jwell.mp4" type="video/mp4" />
        </video>

        {/* Very soft gold glow — barely visible on white */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] rounded-full blur-[200px] pointer-events-none"
          style={{ background: 'rgba(201,162,75,0.07)' }}
        />
        <div
          className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full blur-[160px] pointer-events-none"
          style={{ background: 'rgba(107,45,139,0.05)' }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-8 text-center flex flex-col items-center" style={{ paddingTop: '80px', paddingBottom: '80px' }}>

        {/* Gold hairline label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex items-center space-x-3 mb-6"
        >
          <div className="w-16 h-[2px]" style={{ background: '#C9A24B' }} />
          <span
            className="font-sans uppercase font-extrabold"
            style={{ color: '#C9A24B', fontSize: '15px', letterSpacing: '0.2em' }}
          >
            {SITE_CONFIG.brandName} &bull; उत्कृष्ट दागिनेकार
          </span>
          <div className="w-16 h-[2px]" style={{ background: '#C9A24B' }} />
        </motion.div>

        {/* Main Headline — strong dark color */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="font-serif font-light tracking-tight leading-tight mb-6"
          style={{
            color: '#FFFFFF',
            fontSize: 'clamp(2rem, 6vw, 5.5rem)',
            lineHeight: 1.1,
            maxWidth: '900px',
            textShadow: '0 2px 20px rgba(0,0,0,0.4)',
          }}
        >
          {SITE_CONFIG.tagline}
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.7 }}
          className="font-sans font-light tracking-wide leading-relaxed px-2 max-w-xl"
          style={{ color: 'rgba(255,255,255,0.90)', fontSize: '1rem', textShadow: '0 1px 8px rgba(0,0,0,0.3)' }}
        >
          {SITE_CONFIG.subTagline}
        </motion.p>

        {/* CTA Button */}
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          onClick={handleScrollToCollection}
          className="mt-10 px-8 py-3 rounded-full font-sans text-xs font-semibold tracking-[0.25em] uppercase transition-all duration-300"
          style={{
            background: '#6B2D8B',
            color: '#FFFFFF',
            boxShadow: '0 4px 20px rgba(107,45,139,0.30)',
          }}
          onMouseEnter={e => (e.currentTarget.style.background = '#9B59C4')}
          onMouseLeave={e => (e.currentTarget.style.background = '#6B2D8B')}
        >
          संग्रह पाहा
        </motion.button>
      </div>

      {/* Scroll-Down Cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.3 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center space-y-2 cursor-pointer"
        onClick={handleScrollToCollection}
      >
        <span className="font-sans text-[9px] tracking-[0.3em] uppercase" style={{ color: '#C9A24B' }}>
          शोधा
        </span>
        <div className="w-[1px] h-8 relative overflow-hidden" style={{ background: 'rgba(201,162,75,0.25)' }}>
          <motion.div
            animate={{ y: ['0%', '100%'] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute top-0 left-0 w-full h-1/2"
            style={{ background: '#C9A24B' }}
          />
        </div>
      </motion.div>
    </section>
  );
};
