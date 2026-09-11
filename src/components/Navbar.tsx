import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu, X, MessageSquare, MapPin } from 'lucide-react';
import { SITE_CONFIG } from '../config/siteContent';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'Collection', href: '#collection' },
    { name: 'Contact', href: '#footer' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleWhatsApp = () => {
    const num = SITE_CONFIG.contact.whatsappNumber.replace(/[^0-9]/g, '');
    const text = encodeURIComponent(`Hello ${SITE_CONFIG.brandName}, I would like to inquire about your fine jewellery.`);
    window.open(`https://wa.me/91${num}?text=${text}`, '_blank');
  };

  return (
    <>
      {/* ── Combined Fixed Header (strip + nav as one block, no blur/animation) ── */}
      <div
        className="fixed top-0 left-0 w-full z-[100] bg-white border-b-2 border-[#C9A24B]/35"
      >
        {/* Top Info Strip */}
        <div className="bg-[#6B2D8B] border-b border-[#6B2D8B]/60 flex items-center justify-center gap-2 sm:gap-5 flex-wrap px-2 sm:px-4 py-1.5 text-[10px] sm:text-[11px] tracking-widest text-white">
          <span className="hidden md:flex items-center gap-1.5">
            <MapPin size={11} className="text-[#C9A24B] shrink-0" />
            <strong className="font-semibold text-white">{SITE_CONFIG.contact.address}</strong>
          </span>
          <span className="hidden md:inline text-[#C9A24B]/70">|</span>
          <span className="flex items-center gap-1.5">
            <MessageSquare size={11} className="text-[#C9A24B] shrink-0" />
            <a
              href={`https://wa.me/91${SITE_CONFIG.contact.whatsappNumber}?text=${encodeURIComponent('नमस्कार! मला व्ही बी माकणीकर यांच्या दागिन्यांबद्दल चौकशी करायची आहे. कृपया मला अधिक माहिती द्या.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold text-white no-underline inline-flex items-center gap-1 cursor-pointer transition-colors hover:text-[#C9A24B]"
            >
              📲 +91 {SITE_CONFIG.contact.whatsappNumber}
            </a>
            <span className="text-[#C9A24B]/50">/</span>
            <strong className="font-bold text-white">
              +91 {SITE_CONFIG.contact.whatsappNumber2}
            </strong>
          </span>
        </div>

        {/* Main Navbar */}
        <div className="bg-white px-4 py-2.5 md:px-8 md:py-3 flex items-center justify-between">
          {/* Logo */}
          <a href="#hero" onClick={(e) => handleNavClick(e, '#hero')} className="flex items-center">
            <img
              src="/images/vb_malgeekar_logo.png"
              alt="व्ही बी माकणीकर"
              className="h-[32px] sm:h-[38px] md:h-[46px] w-auto object-contain"
            />
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex gap-10 items-center">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="font-sans text-[11px] font-bold tracking-[0.22em] uppercase text-[#1A0A00] no-underline transition-colors hover:text-[#C9A24B]"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Inquire Button */}
          <button
            onClick={handleWhatsApp}
            className="hidden sm:flex items-center gap-1.5 bg-[#6B2D8B] text-white px-5 py-2.5 rounded-full text-[11px] font-bold tracking-[0.2em] uppercase cursor-pointer transition-colors hover:bg-[#9B59C4]"
          >
            <MessageSquare size={13} />
            चौकशी करा
          </button>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden bg-transparent border-none cursor-pointer text-[#1A0A00] p-1.5"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Drawer */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="bg-white border-t border-[#C9A24B]/20 px-6 py-6 overflow-hidden md:hidden"
            >
              <nav className="flex flex-col gap-4">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="font-serif text-[18px] text-[#1A0A00] no-underline border-b border-gray-100 pb-2"
                  >
                    {link.name}
                  </a>
                ))}
                <button
                  onClick={() => { setMobileMenuOpen(false); handleWhatsApp(); }}
                  className="mt-2 bg-[#6B2D8B] text-white rounded-full px-5 py-3 text-[11px] tracking-[0.2em] uppercase font-bold cursor-pointer hover:bg-[#9B59C4] transition-colors"
                >
                  व्हॉट्सॲपवर चौकशी करा
                </button>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Spacer so content doesn't hide behind fixed header */}
      <div className="h-[80px] md:h-[100px]" />
    </>
  );
};
