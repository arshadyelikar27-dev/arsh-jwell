import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Hammer } from 'lucide-react';
import { SITE_CONFIG } from '../config/siteContent';

export const Craftsmanship: React.FC = () => {
  return (
    <section id="craftsmanship" className="relative py-20 sm:py-32 bg-charcoal-950 border-t border-b border-charcoal-800 overflow-hidden">
      
      {/* Subtle Radial Glow */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold/[0.02] rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
        
        {/* Split Section: Text Left / Image Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
          
          {/* Left Column: Artistry & Certifications */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6 flex flex-col justify-center"
          >
            <div className="flex items-center space-x-3 mb-4">
              <span className="w-8 h-[1px] bg-gold" />
              <span className="font-sans text-[10px] sm:text-xs tracking-[0.35em] uppercase text-gold font-light">
                {SITE_CONFIG.craftsmanship.label}
              </span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-ivory-100 font-light leading-[1.15] mb-6">
              {SITE_CONFIG.craftsmanship.heading}
            </h2>

            <p className="font-sans text-sm sm:text-base text-ivory-200/90 leading-relaxed font-light mb-4">
              {SITE_CONFIG.craftsmanship.lead}
            </p>

            <p className="font-sans text-xs sm:text-sm text-ivory-muted leading-relaxed font-light mb-8">
              {SITE_CONFIG.craftsmanship.body}
            </p>

            {/* Certifications Badges */}
            <div className="space-y-4 pt-4 border-t border-charcoal-700/60">
              {SITE_CONFIG.craftsmanship.certifications.map((cert, index) => (
                <div key={index} className="flex items-start space-x-3.5">
                  <div className="p-2.5 rounded-xl bg-gold/10 border border-gold/30 text-gold mt-0.5 shrink-0">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-serif text-base text-ivory-100 font-normal">
                      {cert.title}
                    </h4>
                    <p className="font-sans text-xs text-ivory-muted font-light mt-0.5">
                      {cert.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

          </motion.div>

          {/* Right Column: Master Goldsmith Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.9 }}
            className="lg:col-span-6 relative"
          >
            {/* Image Frame with Stable Background to prevent loading shift */}
            <div className="relative p-2.5 sm:p-3 bg-charcoal-900 border border-gold/25 rounded-3xl shadow-2xl">
              <div className="relative aspect-[4/3] sm:aspect-[16/11] rounded-2xl overflow-hidden bg-charcoal-850">
                <img
                  src="/images/craftsmanship.jpg"
                  alt="Master Goldsmith Handcrafting"
                  loading="eager"
                  decoding="async"
                  className="w-full h-full object-cover filter brightness-[0.88] contrast-[1.05] hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent pointer-events-none" />
                
                {/* Floating Atelier Stamp */}
                <div className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4 bg-charcoal-950/90 border border-gold/40 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full flex items-center space-x-2 backdrop-blur-sm">
                  <Hammer className="w-3.5 h-3.5 text-gold" />
                  <span className="font-sans text-[9px] sm:text-[10px] tracking-[0.25em] text-ivory-100 uppercase">
                    Hand-Forged Atelier
                  </span>
                </div>
              </div>
            </div>

            {/* Inset Decorative Monogram Badge */}
            <div className="hidden sm:flex absolute -top-5 -left-5 w-20 h-20 bg-charcoal-950 border border-gold/40 rounded-2xl items-center justify-center rotate-12 shadow-xl">
              <span className="font-serif text-lg text-gold font-light tracking-widest -rotate-12">
                100%
              </span>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};
