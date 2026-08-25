import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, Diamond } from 'lucide-react';
import { SITE_CONFIG } from '../config/siteContent';

export const SignatureSpotlight: React.FC = () => {
  const piece = SITE_CONFIG.signaturePiece;

  const handleWhatsAppInquire = () => {
    const rawNumber = SITE_CONFIG.contact.whatsappNumber.replace(/[^0-9]/g, '');
    const text = encodeURIComponent(
      `Hello ${SITE_CONFIG.brandName}, I am inquiring about the Signature Showcase: "${piece.title}". Please share further details.`
    );
    window.open(`https://wa.me/${rawNumber}?text=${text}`, '_blank');
  };

  return (
    <section id="spotlight" className="relative w-full min-h-[85vh] lg:min-h-screen bg-charcoal-950 flex items-center justify-center overflow-hidden py-16 sm:py-24">
      
      {/* Full-Bleed Background Imagery */}
      <div className="absolute inset-0 w-full h-full z-0">
        <img
          src={piece.image}
          alt={piece.title}
          loading="lazy"
          className="w-full h-full object-cover filter brightness-[0.4] contrast-[1.1] scale-105"
        />
        {/* Dark Vignettes and Editorial Gradients */}
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal-950 via-charcoal-950/70 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950 via-transparent to-charcoal-950/90" />
      </div>

      {/* Double-Page Magazine Spread Layout */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 w-full">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Overlaid Editorial Typography */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.9 }}
            className="lg:col-span-7 flex flex-col items-start"
          >
            {/* Magazine Header Label */}
            <div className="flex items-center space-x-3 mb-4 sm:mb-6">
              <span className="w-8 sm:w-10 h-[1px] bg-gold" />
              <span className="font-sans text-[9px] sm:text-xs tracking-[0.35em] sm:tracking-[0.4em] uppercase text-gold font-light">
                HIGH JOAILLERIE SPOTLIGHT
              </span>
            </div>

            {/* Subtitle */}
            <span className="font-serif italic text-base sm:text-xl text-gold-light/90 mb-2 sm:mb-3">
              {piece.subtitle}
            </span>

            {/* Headline */}
            <h2 className="font-serif text-2xl sm:text-5xl lg:text-6xl text-ivory-100 font-light leading-[1.15] mb-4 sm:mb-6 max-w-2xl">
              {piece.title}
            </h2>

            {/* Description */}
            <p className="font-sans text-xs sm:text-base text-ivory-200/80 font-light leading-relaxed mb-6 sm:mb-8 max-w-xl">
              {piece.description}
            </p>

            {/* Action Button with Rounded Radius */}
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <button
                onClick={handleWhatsAppInquire}
                className="w-full sm:w-auto bg-gold hover:bg-gold-light active:scale-[0.98] text-charcoal-950 px-6 sm:px-8 py-3.5 sm:py-4 rounded-full text-xs tracking-[0.2em] sm:tracking-[0.25em] uppercase font-medium transition-all duration-300 flex items-center justify-center space-x-2 shadow-[0_10px_30px_rgba(201,162,75,0.25)]"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Inquire on WhatsApp</span>
              </button>
            </div>
          </motion.div>

          {/* Right Column: Spec Card Floating Grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="lg:col-span-5"
          >
            <div className="bg-charcoal-900/85 backdrop-blur-xl border border-gold/30 rounded-2xl p-5 sm:p-8 space-y-4 sm:space-y-6 shadow-2xl">
              <div className="flex items-center justify-between pb-3 sm:pb-4 border-b border-gold/20">
                <span className="font-sans text-[9px] sm:text-[10px] tracking-[0.3em] uppercase text-gold">
                  ARCHIVAL SPECIFICATIONS
                </span>
                <Diamond className="w-4 h-4 text-gold/80" />
              </div>

              <div className="space-y-3 sm:space-y-4">
                {piece.details.map((detail, index) => (
                  <div key={index} className="flex flex-col space-y-0.5 sm:space-y-1">
                    <span className="text-[10px] sm:text-xs tracking-wider uppercase text-ivory-muted font-light">
                      {detail.title}
                    </span>
                    <span className="font-serif text-sm sm:text-lg text-ivory-100 font-normal">
                      {detail.value}
                    </span>
                  </div>
                ))}
              </div>

              <div className="pt-3 sm:pt-4 border-t border-charcoal-700/60 flex items-center justify-between text-[11px] sm:text-xs text-gold/80 italic font-serif">
                <span>Certified Haute Joaillerie</span>
                <span>Piece Unique</span>
              </div>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};
