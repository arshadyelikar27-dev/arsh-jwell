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
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          zIndex: 100,
          background: '#FFFFFF',
          borderBottom: '2px solid rgba(201,162,75,0.35)',
        }}
      >
        {/* Top Info Strip */}
        <div
          style={{
            background: '#6B2D8B',
            borderBottom: '1px solid rgba(107,45,139,0.6)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '20px',
            flexWrap: 'wrap',
            padding: '6px 16px',
            fontSize: '11px',
            letterSpacing: '0.1em',
            color: '#FFFFFF',
          }}
        >
          <span style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
            <MapPin size={11} style={{ color: '#C9A24B', flexShrink: 0 }} />
            <strong style={{ fontWeight: 600, color: '#FFFFFF' }}>{SITE_CONFIG.contact.address}</strong>
          </span>
          <span style={{ color: 'rgba(201,162,75,0.7)' }}>|</span>
          <span style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
            <MessageSquare size={11} style={{ color: '#C9A24B', flexShrink: 0 }} />
            <a
              href={`https://wa.me/91${SITE_CONFIG.contact.whatsappNumber}?text=${encodeURIComponent('नमस्कार! मला व्ही बी माकणीकर यांच्या दागिन्यांबद्दल चौकशी करायची आहे. कृपया मला अधिक माहिती द्या.')}`}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontWeight: 700,
                color: '#FFFFFF',
                textDecoration: 'none',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '4px',
                cursor: 'pointer',
                transition: 'color 0.2s',
              }}
              onMouseEnter={e => (e.currentTarget.style.color = '#C9A24B')}
              onMouseLeave={e => (e.currentTarget.style.color = '#FFFFFF')}
            >
              📲 +91 {SITE_CONFIG.contact.whatsappNumber}
            </a>
            <span style={{ color: 'rgba(201,162,75,0.5)' }}>/</span>
            <strong style={{ fontWeight: 700, color: '#FFFFFF' }}>
              +91 {SITE_CONFIG.contact.whatsappNumber2}
            </strong>
          </span>
        </div>

        {/* Main Navbar */}
        <div
          style={{
            background: '#FFFFFF',
            padding: '12px 32px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          {/* Logo */}
          <a href="#hero" onClick={(e) => handleNavClick(e, '#hero')} style={{ display: 'flex', alignItems: 'center' }}>
            <img
              src="/images/vb_malgeekar_logo.png"
              alt="व्ही बी माकणीकर"
              style={{ height: '46px', width: 'auto', objectFit: 'contain' }}
            />
          </a>

          {/* Desktop Nav Links */}
          <nav style={{ display: 'flex', gap: '40px', alignItems: 'center' }} className="hidden md:flex">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                style={{
                  fontFamily: 'Plus Jakarta Sans, sans-serif',
                  fontSize: '11px',
                  fontWeight: 700,
                  letterSpacing: '0.22em',
                  textTransform: 'uppercase',
                  color: '#1A0A00',
                  textDecoration: 'none',
                }}
                onMouseEnter={e => (e.currentTarget.style.color = '#C9A24B')}
                onMouseLeave={e => (e.currentTarget.style.color = '#1A0A00')}
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Inquire Button */}
          <button
            onClick={handleWhatsApp}
            className="hidden sm:flex"
            style={{
              alignItems: 'center',
              gap: '7px',
              background: '#6B2D8B',
              color: '#FFFFFF',
              border: 'none',
              padding: '10px 22px',
              borderRadius: '999px',
              fontSize: '11px',
              fontWeight: 700,
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              cursor: 'pointer',
            }}
            onMouseEnter={e => (e.currentTarget.style.background = '#9B59C4')}
            onMouseLeave={e => (e.currentTarget.style.background = '#6B2D8B')}
          >
            <MessageSquare size={13} />
            चौकशी करा
          </button>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            style={{
              background: 'none', border: 'none', cursor: 'pointer',
              color: '#1A0A00', padding: '6px',
            }}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Drawer — simple dropdown, no blur */}
        {mobileMenuOpen && (
          <div
            style={{
              background: '#FFFFFF',
              borderTop: '1px solid rgba(201,162,75,0.2)',
              padding: '24px 32px',
            }}
          >
            <nav style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  style={{
                    fontFamily: 'Cormorant Garamond, serif',
                    fontSize: '22px',
                    color: '#1A0A00',
                    textDecoration: 'none',
                  }}
                >
                  {link.name}
                </a>
              ))}
              <button
                onClick={() => { setMobileMenuOpen(false); handleWhatsApp(); }}
                style={{
                  marginTop: '8px', background: '#6B2D8B', color: '#fff',
                  border: 'none', borderRadius: '999px', padding: '13px 24px',
                  fontSize: '11px', letterSpacing: '0.2em', textTransform: 'uppercase',
                  fontWeight: 700, cursor: 'pointer',
                }}
              >
                व्हॉट्सॲपवर चौकशी करा
              </button>
            </nav>
          </div>
        )}
      </div>

      {/* Spacer so content doesn't hide behind fixed header (~30px strip + ~70px nav = 100px) */}
      <div style={{ height: '100px' }} />
    </>
  );
};
