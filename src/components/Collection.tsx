import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, ArrowUpRight } from 'lucide-react';
import { SITE_CONFIG, ProductItem } from '../config/siteContent';

interface CollectionProps {
  onSelectProduct: (product: ProductItem) => void;
}

export const Collection: React.FC<CollectionProps> = ({ onSelectProduct }) => {

  const filteredProducts = SITE_CONFIG.products;

  // Uniform grid card classes for clean, balanced product showcase
  const getCardClasses = (_index?: number) => {
    return "col-span-1 min-h-[340px] sm:min-h-[380px] h-[340px] sm:h-[380px]";
  };

  const handleWhatsAppQuick = (e: React.MouseEvent, product: ProductItem) => {
    e.stopPropagation();
    const rawNumber = SITE_CONFIG.contact.whatsappNumber.replace(/[^0-9]/g, '');
    const text = encodeURIComponent(`Hello ${SITE_CONFIG.brandName}, I am inquiring about "${product.name}".`);
    window.open(`https://wa.me/${rawNumber}?text=${text}`, '_blank');
  };

  return (
    <section id="collection" className="relative py-16 sm:py-24 lg:py-32 bg-charcoal-900 overflow-hidden">
      
      {/* Background Decorative Element */}
      <div className="absolute top-0 right-0 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-gold/[0.02] rounded-full blur-[120px] pointer-events-none" />

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
            {filteredProducts.map((product, index) => {
              const spanClass = getCardClasses(index);
              return (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.35, ease: "easeOut" }}
                  onClick={() => onSelectProduct(product)}
                  data-cursor="INSPECT"
                  className={`group relative bg-charcoal-850 border border-charcoal-700/60 hover:border-gold/60 rounded-2xl cursor-pointer overflow-hidden transition-all duration-500 flex flex-col justify-end ${spanClass}`}
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

                  {/* Quick Action Buttons Top Right */}
                  <div className="absolute top-3 right-3 sm:top-4 sm:right-4 z-10 flex items-center space-x-2 opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-all duration-300 sm:translate-y-2 sm:group-hover:translate-y-0">
                    <button
                      onClick={(e) => handleWhatsAppQuick(e, product)}
                      className="p-2.5 rounded-full bg-charcoal-900/90 text-gold hover:bg-gold hover:text-charcoal-950 border border-gold/40 transition-colors shadow-lg active:scale-95"
                      title="WhatsApp Inquiry"
                      aria-label="WhatsApp Inquiry"
                    >
                      <MessageSquare className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  {/* Bottom Information Card */}
                  <div className="relative z-10 p-4 sm:p-6 lg:p-8">
                    <div className="text-[9px] sm:text-[10px] tracking-[0.3em] uppercase text-gold font-light mb-1">
                      {product.category}
                    </div>

                    <h3 className="font-serif text-lg sm:text-2xl lg:text-3xl text-ivory-100 font-light group-hover:text-gold-light transition-colors duration-300 flex items-center justify-between">
                      <span className="truncate pr-3">{product.name}</span>
                      <ArrowUpRight className="w-4 h-4 text-gold/60 opacity-80 sm:opacity-0 sm:group-hover:opacity-100 sm:group-hover:translate-x-1 sm:group-hover:-translate-y-1 transition-all duration-300 flex-shrink-0" />
                    </h3>

                    {/* One-Line Description */}
                    <p className="font-sans text-[11px] sm:text-xs text-ivory-200/80 mt-1.5 truncate font-light leading-relaxed">
                      {product.description}
                    </p>
                  </div>

                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
};

