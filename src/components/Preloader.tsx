import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SITE_CONFIG } from '../config/siteContent';

interface PreloaderProps {
  onComplete: () => void;
}

export const Preloader: React.FC<PreloaderProps> = ({ onComplete }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Check if user has already visited in this session
    const hasVisited = sessionStorage.getItem('jwell_visited');
    if (hasVisited === 'true') {
      setIsVisible(false);
      onComplete();
      return;
    }

    const timer = setTimeout(() => {
      setIsVisible(false);
      sessionStorage.setItem('jwell_visited', 'true');
      setTimeout(onComplete, 800); // Allow fade-out animation to finish
    }, 2800);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          key="preloader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.9, ease: [0.65, 0, 0.35, 1] }}
          className="fixed inset-0 z-[10000] flex flex-col items-center justify-center bg-charcoal-950 text-ivory-100 overflow-hidden"
        >
          {/* Subtle radial gold glow backdrop */}
          <div className="absolute w-[600px] h-[600px] rounded-full bg-gold/5 blur-[120px] pointer-events-none" />

          {/* Animated Diamond Monogram Frame */}
          <div className="relative mb-8">
            <svg
              className="w-24 h-24 sm:w-28 sm:h-28"
              viewBox="0 0 100 100"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Outer Diamond Frame */}
              <motion.polygon
                points="50,5 95,50 50,95 5,50"
                stroke="#C9A24B"
                strokeWidth="1.2"
                strokeDasharray="400"
                strokeDashoffset="400"
                animate={{ strokeDashoffset: 0 }}
                transition={{ duration: 1.8, ease: "easeInOut" }}
              />
              {/* Inner Diamond Frame */}
              <motion.polygon
                points="50,15 85,50 50,85 15,50"
                stroke="rgba(201, 162, 75, 0.4)"
                strokeWidth="0.8"
                strokeDasharray="300"
                strokeDashoffset="300"
                animate={{ strokeDashoffset: 0 }}
                transition={{ duration: 1.8, delay: 0.2, ease: "easeInOut" }}
              />
              {/* Centre Facet Lines */}
              <motion.line
                x1="50" y1="5" x2="50" y2="95"
                stroke="rgba(201, 162, 75, 0.2)"
                strokeWidth="0.8"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1.2, delay: 0.5 }}
              />
              <motion.line
                x1="5" y1="50" x2="95" y2="50"
                stroke="rgba(201, 162, 75, 0.2)"
                strokeWidth="0.8"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1.2, delay: 0.5 }}
              />
            </svg>

            {/* Centre Sparkle Icon */}
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="absolute inset-0 flex items-center justify-center pointer-events-none"
            >
              <div className="w-2.5 h-2.5 bg-gold rotate-45 shadow-[0_0_12px_#DFC07A]" />
            </motion.div>
          </div>

          {/* Brand Name Typography Reveal */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.7 }}
            className="text-center"
          >
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl tracking-[0.2em] uppercase text-ivory-100 font-light mb-2">
              {SITE_CONFIG.brandName}
            </h1>
            <p className="font-sans text-[11px] sm:text-xs tracking-[0.35em] text-gold uppercase font-light">
              Haute Joaillerie &bull; Atelier
            </p>
          </motion.div>

          {/* Golden Progress Line */}
          <div className="w-48 sm:w-64 h-[1px] bg-charcoal-700 mt-10 relative overflow-hidden">
            <motion.div
              initial={{ x: '-100%' }}
              animate={{ x: '100%' }}
              transition={{ duration: 1.6, delay: 0.8, ease: "easeInOut" }}
              className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-gold to-transparent"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
