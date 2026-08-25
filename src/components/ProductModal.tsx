import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, MessageSquare, ShieldCheck, Gem, Layers } from 'lucide-react';
import { ProductItem, SITE_CONFIG } from '../config/siteContent';

interface ProductModalProps {
  product: ProductItem | null;
  onClose: () => void;
}

export const ProductModal: React.FC<ProductModalProps> = ({
  product,
  onClose,
}) => {
  if (!product) return null;

  const handleWhatsAppInquiry = () => {
    const rawNumber = SITE_CONFIG.contact.whatsappNumber.replace(/[^0-9]/g, '');
    const text = encodeURIComponent(
      `Hello ${SITE_CONFIG.brandName}, I am interested in inquiring about "${product.name}". Please share more details and pricing.`
    );
    window.open(`https://wa.me/${rawNumber}?text=${text}`, '_blank');
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[9000] flex items-center justify-center p-3 sm:p-6 lg:p-10 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/85 backdrop-blur-md"
        />

        {/* Modal Container with Rounded Radius & Mobile Responsiveness */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.94, y: 20 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-4xl bg-charcoal-900 border border-gold/30 rounded-2xl shadow-2xl z-10 text-ivory-100 overflow-hidden flex flex-col md:flex-row my-auto max-h-[90vh]"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-3 right-3 sm:top-4 sm:right-4 z-20 bg-charcoal-950/80 hover:bg-gold text-ivory-100 hover:text-charcoal-950 p-2 sm:p-2.5 rounded-full border border-gold/30 transition-all duration-200 active:scale-95"
            aria-label="Close dialog"
          >
            <X className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>

          {/* Left Column: Image */}
          <div className="relative w-full md:w-1/2 h-64 sm:h-80 md:h-auto min-h-[220px] md:min-h-[440px] bg-charcoal-950 flex items-center justify-center overflow-hidden shrink-0">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover md:object-contain p-2"
            />
          </div>

          {/* Right Column: Information & Actions */}
          <div className="w-full md:w-1/2 p-5 sm:p-8 lg:p-10 flex flex-col justify-between overflow-y-auto">
            <div>
              <div className="flex items-center space-x-2 text-gold text-[9px] sm:text-[10px] tracking-[0.3em] uppercase mb-1.5">
                <span>{product.category}</span>
              </div>

              <h3 className="font-serif text-xl sm:text-3xl lg:text-4xl text-ivory-100 font-light mb-1.5 sm:mb-2">
                {product.name}
              </h3>

              <p className="font-sans text-[11px] sm:text-xs tracking-wider text-gold/90 uppercase mb-3 sm:mb-4">
                {product.tagline}
              </p>

              <div className="w-12 h-[1px] bg-gold/40 mb-4 sm:mb-5" />

              <p className="font-sans text-xs sm:text-sm text-ivory-200/80 leading-relaxed mb-4 sm:mb-6">
                {product.description}
              </p>

              {/* Specifications removed as requested */}
            </div>

            {/* Actions */}
            <div className="flex flex-col gap-3 pt-2">
              <button
                onClick={handleWhatsAppInquiry}
                className="w-full bg-gold hover:bg-gold-light active:scale-[0.99] text-charcoal-950 py-3 sm:py-3.5 px-6 rounded-full text-xs uppercase tracking-widest font-medium transition-all duration-300 flex items-center justify-center space-x-2 shadow-[0_5px_20px_rgba(201,162,75,0.2)]"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Inquire on WhatsApp</span>
              </button>
            </div>

          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
