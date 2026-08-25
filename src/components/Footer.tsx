import React from 'react';
import { ArrowUp, Instagram, MessageSquare, Facebook } from 'lucide-react';
import { SITE_CONFIG } from '../config/siteContent';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleWhatsApp = () => {
    const rawNumber = SITE_CONFIG.contact.whatsappNumber.replace(/[^0-9]/g, '') || '18005555935';
    window.open(`https://wa.me/${rawNumber}`, '_blank');
  };

  return (
    <footer className="relative bg-charcoal-950 text-ivory-100 pt-24 pb-12 border-t border-gold/15 overflow-hidden">
      
      {/* Background Subtle Ambience */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-gold/[0.015] rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        
        {/* Top Tier: Brand Signature & Monogram */}
        <div className="flex flex-col md:flex-row items-center justify-between pb-16 border-b border-charcoal-800 gap-8">
          
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <div className="flex items-center space-x-3 mb-2">
              <div className="w-6 h-6 border border-gold/60 rotate-45 flex items-center justify-center">
                <div className="w-1.5 h-1.5 bg-gold" />
              </div>
              <span className="font-serif text-2xl sm:text-3xl tracking-[0.2em] uppercase text-ivory-100 font-light">
                {SITE_CONFIG.brandName}
              </span>
            </div>
            <p className="font-sans text-xs tracking-[0.3em] uppercase text-gold font-light">
              Maison de Haute Joaillerie &bull; Paris &bull; London &bull; New York
            </p>
          </div>

          {/* Social Links with Rounded Radius */}
          <div className="flex items-center space-x-3">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-charcoal-900 border border-charcoal-700 hover:border-gold hover:text-gold text-ivory-muted transition-all duration-300 rounded-full"
              title="Instagram"
              aria-label="Instagram"
            >
              <Instagram className="w-4 h-4" />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-charcoal-900 border border-charcoal-700 hover:border-gold hover:text-gold text-ivory-muted transition-all duration-300 rounded-full"
              title="Facebook"
              aria-label="Facebook"
            >
              <Facebook className="w-4 h-4" />
            </a>
            <button
              onClick={handleWhatsApp}
              className="p-3 bg-charcoal-900 border border-charcoal-700 hover:border-gold hover:text-gold text-ivory-muted transition-all duration-300 rounded-full"
              title="WhatsApp"
              aria-label="WhatsApp"
            >
              <MessageSquare className="w-4 h-4" />
            </button>
          </div>

        </div>

        {/* Middle Tier: Navigation Links, Details & Instagram Tag */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 py-16 border-b border-charcoal-800 text-xs text-ivory-muted">
          
          {/* Column 1: Haute Joaillerie Nav */}
          <div>
            <h4 className="font-serif text-base text-ivory-100 tracking-wider uppercase mb-4">
              Creations
            </h4>
            <ul className="space-y-2.5 font-light">
              <li><a href="#collection" className="hover:text-gold transition-colors">Solitaire Diamonds</a></li>
              <li><a href="#collection" className="hover:text-gold transition-colors">Temple Kundan & Polki</a></li>
              <li><a href="#collection" className="hover:text-gold transition-colors">Bridal Mangalsutras</a></li>
              <li><a href="#collection" className="hover:text-gold transition-colors">Emerald & Gemstone Heirlooms</a></li>
              <li><a href="#spotlight" className="hover:text-gold transition-colors">Signature Sovereign Collar</a></li>
            </ul>
          </div>

          {/* Column 2: Atelier Heritage */}
          <div>
            <h4 className="font-serif text-base text-ivory-100 tracking-wider uppercase mb-4">
              Atelier & Services
            </h4>
            <ul className="space-y-2.5 font-light">
              <li><a href="#craftsmanship" className="hover:text-gold transition-colors">Bespoke Custom Commissions</a></li>
              <li><a href="#craftsmanship" className="hover:text-gold transition-colors">GIA & IGI Diamond Grading</a></li>
              <li><a href="#craftsmanship" className="hover:text-gold transition-colors">BIS 916 Gold Hallmarking</a></li>
              <li><a href="#craftsmanship" className="hover:text-gold transition-colors">Heirloom Restoration</a></li>
            </ul>
          </div>

          {/* Column 3: Contact & Instagram */}
          <div>
            <h4 className="font-serif text-base text-ivory-100 tracking-wider uppercase mb-4">
              Direct Inquiries
            </h4>
            <div className="space-y-2 font-light">
              <p className="text-ivory-100">{SITE_CONFIG.contact.displayPhone}</p>
              <p>{SITE_CONFIG.contact.email}</p>
              <p className="text-gold mt-2 font-mono text-[11px]">{SITE_CONFIG.contact.instagram}</p>
              <p className="text-ivory-muted/80">{SITE_CONFIG.contact.instagramDisplay}</p>
            </div>
          </div>

          {/* Column 4: Private Atelier Concierge Card */}
          <div className="p-6 bg-charcoal-900 border border-charcoal-800 rounded-2xl flex flex-col justify-between">
            <div>
              <div className="flex items-center space-x-2 text-gold text-[10px] tracking-widest uppercase mb-2">
                <span>Bespoke Atelier Inquiries</span>
              </div>
              <p className="font-light text-xs text-ivory-200/80 leading-relaxed mb-4">
                Connect directly with our master goldsmiths for bespoke heirloom creations.
              </p>
            </div>
            <button
              onClick={handleWhatsApp}
              className="px-4 py-2.5 bg-gold/10 hover:bg-gold hover:text-charcoal-950 text-gold text-[11px] tracking-[0.2em] uppercase rounded-full font-medium transition-all duration-300 flex items-center justify-center space-x-2 border border-gold/40"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>Inquire on WhatsApp</span>
            </button>
          </div>

        </div>

        {/* Bottom Tier: Copyright & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-ivory-muted/70 font-light">
          <div>
            &copy; {new Date().getFullYear()} {SITE_CONFIG.brandName} Fine Jewellery. All Rights Reserved.
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center space-x-2.5 px-4 py-2 rounded-full border border-charcoal-700 hover:border-gold hover:text-gold text-ivory-muted transition-all duration-300 group focus:outline-none"
            aria-label="Back to top"
          >
            <span className="tracking-[0.2em] uppercase text-[10px]">Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5 text-gold group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>

      </div>
    </footer>
  );
};
