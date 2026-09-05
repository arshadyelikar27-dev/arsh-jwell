import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SITE_CONFIG } from '../config/siteContent';

export const Collection: React.FC = () => {

  const filteredProducts = SITE_CONFIG.products;

  return (
    <section id="collection" className="relative py-16 sm:py-24 lg:py-32 bg-charcoal-900 overflow-hidden">
      
      {/* Background Decorative Elements — Gold + Royal Purple */}
      <div className="absolute top-0 right-0 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-gold/[0.02] rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[250px] sm:w-[400px] h-[250px] sm:h-[400px] bg-royal/[0.04] rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-16 pb-6 sm:pb-8 border-b border-gold/15">
          <div>
            <div className="flex items-center space-x-3 mb-2 sm:mb-3">
              <span className="w-6 sm:w-8 h-[1px] bg-gold" />
              <span className="font-sans text-[9px] sm:text-xs tracking-[0.3em] uppercase text-gold font-light">
                CURATED ARCHIVE
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-ivory-100 font-light tracking-tight">
              The Collection
            </h2>
          </div>

          <p className="mt-3 md:mt-0 font-sans text-xs sm:text-sm text-ivory-muted max-w-md font-light leading-relaxed">
            Singular expressions of fine joaillerie, handcrafted with unyielding precision and generational reverence.
          </p>
        </div>

        {/* Uniform Luxury Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                className="group relative bg-charcoal-850 border border-charcoal-700/60 rounded-2xl overflow-hidden flex flex-col justify-end royal-border-glow col-span-1"
                style={{ aspectRatio: '3/4' }}
              >
                {/* Stable Image Box preventing image load layout shifts */}
                <div className="absolute inset-0 w-full h-full overflow-hidden bg-charcoal-800 shimmer-sweep-wrapper">
                  <img
                    src={product.image}
                    alt={product.name}
                    loading="eager"
                    decoding="async"
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 filter brightness-[0.92] contrast-[1.03] group-hover:brightness-100"
                  />
                  {/* Dark gradient overlay for text readability at bottom */}
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950 via-charcoal-950/40 to-transparent opacity-85 group-hover:opacity-95 transition-opacity duration-300" />
                </div>

                {/* Bottom Information Card */}
                <div className="relative z-10 p-4 sm:p-6 lg:p-8">
                  <div className="text-[9px] sm:text-[10px] tracking-[0.3em] uppercase text-gold font-light mb-1">
                    {product.category}
                  </div>

                  <h3 className="font-serif text-lg sm:text-2xl lg:text-3xl text-ivory-100 font-light transition-colors duration-300">
                    <span className="truncate">{product.name}</span>
                  </h3>

                  {/* One-Line Description */}
                  <p className="font-sans text-[11px] sm:text-xs text-ivory-200/80 mt-1.5 truncate font-light leading-relaxed">
                    {product.description}
                  </p>
                </div>

              </motion.div>
            ))}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
};
