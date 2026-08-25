import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, MessageSquare } from 'lucide-react';
import { SITE_CONFIG } from '../config/siteContent';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'Collection', href: '#collection' },
    { name: 'Contact', href: '#footer' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleWhatsAppDirect = () => {
    const rawNumber = SITE_CONFIG.contact.whatsappNumber.replace(/[^0-9]/g, '') || '18005555935';
    const text = encodeURIComponent(`Hello ${SITE_CONFIG.brandName}, I would like to inquire about your fine jewellery collection.`);
    window.open(`https://wa.me/${rawNumber}?text=${text}`, '_blank');
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-charcoal-900/90 backdrop-blur-md border-b border-gold/15 py-4 shadow-[0_10px_30px_rgba(0,0,0,0.5)]'
          : 'bg-gradient-to-b from-black/80 via-black/30 to-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex items-center justify-between">
        
        {/* Logo / Brand Name Left */}
        <a
          href="#hero"
          onClick={(e) => handleNavClick(e, '#hero')}
          className="group flex items-center space-x-3 focus:outline-none"
        >
          {/* Subtle gold diamond logo glyph */}
          <div className="relative w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center border border-gold/60 rotate-45 group-hover:border-gold group-hover:scale-105 transition-all duration-300">
            <div className="w-1.5 h-1.5 bg-gold" />
          </div>
          
          <div className="flex flex-col">
            <span className="font-serif text-lg sm:text-2xl tracking-[0.18em] uppercase text-ivory-100 font-light group-hover:text-gold-light transition-colors duration-300">
              {SITE_CONFIG.brandName}
            </span>
            <span className="font-sans text-[8px] sm:text-[9px] tracking-[0.3em] uppercase text-gold/80 font-normal">
              Haute Joaillerie
            </span>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center space-x-8 lg:space-x-12">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="group relative font-sans text-xs tracking-[0.25em] uppercase text-ivory-100/80 hover:text-gold transition-colors duration-300 py-1"
            >
              <span>{link.name}</span>
              <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-gold group-hover:w-full transition-all duration-300 ease-out" />
            </a>
          ))}
        </nav>

        {/* Action CTAs Right with Rounded Radius */}
        <div className="hidden sm:flex items-center space-x-3">
          <button
            onClick={handleWhatsAppDirect}
            className="inline-flex items-center space-x-2 bg-gold hover:bg-gold-light text-charcoal-950 px-5 py-2 rounded-full text-xs font-medium uppercase tracking-[0.2em] transition-all duration-300 shadow-[0_4px_14px_rgba(201,162,75,0.25)]"
            title="Inquire on WhatsApp"
            aria-label="Inquire"
          >
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Inquire</span>
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="flex items-center space-x-3 md:hidden">
          <button
            onClick={handleWhatsAppDirect}
            className="p-2.5 rounded-full border border-gold/30 text-gold hover:bg-gold/10 transition-colors"
            aria-label="Inquire"
          >
            <MessageSquare className="w-4 h-4" />
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-ivory-100 p-2 rounded-full hover:bg-charcoal-800 focus:outline-none hover:text-gold transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="md:hidden bg-charcoal-950/98 border-b border-gold/20 backdrop-blur-xl px-8 py-8"
          >
            <nav className="flex flex-col space-y-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="font-serif text-2xl tracking-[0.1em] text-ivory-100 hover:text-gold transition-colors"
                >
                  {link.name}
                </a>
              ))}
              
              <div className="pt-6 border-t border-charcoal-700 flex flex-col gap-3">
                <button
                  onClick={() => { setMobileMenuOpen(false); handleWhatsAppDirect(); }}
                  className="w-full bg-gold hover:bg-gold-light text-charcoal-950 py-3.5 rounded-full text-center text-xs tracking-[0.2em] uppercase font-medium flex items-center justify-center space-x-2 transition-all duration-300 shadow-[0_4px_14px_rgba(201,162,75,0.25)]"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Inquire</span>
                </button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
