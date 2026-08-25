import React from 'react';
import { motion } from 'framer-motion';
import { SITE_CONFIG } from '../config/siteContent';

export const BrandStatement: React.FC = () => {
  return (
    <section id="brand-statement" className="relative py-28 sm:py-36 md:py-44 bg-charcoal-900 overflow-hidden">
      
      {/* Background Subtle Radial Amber Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-gold/[0.03] rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 sm:px-8 text-center relative z-10">
        
        {/* Section Tag with Gold Hairlines */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="flex items-center justify-center space-x-4 mb-10"
        >
          <div className="w-12 h-[1px] bg-gold/40" />
          <span className="font-sans text-[10px] sm:text-xs tracking-[0.35em] uppercase text-gold font-light">
            OUR PHILOSOPHY
          </span>
          <div className="w-12 h-[1px] bg-gold/40" />
        </motion.div>

        {/* Large Editorial Serif Philosophy Paragraph */}
        <motion.blockquote
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light text-ivory-100 leading-[1.38] md:leading-[1.42] tracking-normal mb-10"
        >
          &ldquo;{SITE_CONFIG.brandStatementDefault}&rdquo;
        </motion.blockquote>

        {/* Gold Monogram Signature Ornament */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-col items-center justify-center space-y-3"
        >
          <div className="flex items-center space-x-3 text-gold/60">
            <span className="h-[1px] w-8 bg-gold/30" />
            <span className="w-1.5 h-1.5 rotate-45 bg-gold/80" />
            <span className="h-[1px] w-8 bg-gold/30" />
          </div>
          <span className="font-serif italic text-sm text-gold/90 tracking-widest">
            {SITE_CONFIG.brandName} &bull; Maison de Haute Joaillerie
          </span>
        </motion.div>

      </div>
    </section>
  );
};
