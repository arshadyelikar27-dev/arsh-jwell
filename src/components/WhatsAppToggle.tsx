import React, { useState } from 'react';
import { X } from 'lucide-react';
import { SITE_CONFIG } from '../config/siteContent';

const MARATHI_MESSAGE = 'नमस्कार! मला व्ही बी माकणीकर यांच्या दागिन्यांबद्दल चौकशी करायची आहे. कृपया मला अधिक माहिती द्या.';

export const WhatsAppToggle: React.FC = () => {
  const [open, setOpen] = useState(false);

  const openWhatsApp = () => {
    const num = SITE_CONFIG.contact.whatsappNumber.replace(/[^0-9]/g, '');
    const url = `https://wa.me/91${num}?text=${encodeURIComponent(MARATHI_MESSAGE)}`;
    window.open(url, '_blank');
  };

  return (
    <>
      {/* Popup Card */}
      {open && (
        <div
          style={{
            position: 'fixed',
            bottom: '90px',
            right: '24px',
            zIndex: 999,
            width: '300px',
            background: '#FFFFFF',
            borderRadius: '16px',
            boxShadow: '0 8px 32px rgba(0,0,0,0.18)',
            overflow: 'hidden',
            border: '1px solid rgba(0,0,0,0.08)',
          }}
        >
          {/* Header */}
          <div
            style={{
              background: '#25D366',
              padding: '16px 18px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              {/* WA Icon */}
              <div
                style={{
                  width: '42px', height: '42px', borderRadius: '50%',
                  background: '#FFFFFF', display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '22px',
                }}
              >
                💍
              </div>
              <div>
                <p style={{ margin: 0, fontWeight: 700, color: '#FFFFFF', fontSize: '14px' }}>
                  {SITE_CONFIG.brandName}
                </p>
                <p style={{ margin: 0, fontSize: '11px', color: 'rgba(255,255,255,0.85)' }}>
                  सहसा काही मिनिटांत उत्तर देतो
                </p>
              </div>
            </div>
            <button
              onClick={() => setOpen(false)}
              style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#FFFFFF', padding: '4px' }}
            >
              <X size={18} />
            </button>
          </div>

          {/* Message Preview */}
          <div style={{ padding: '16px 18px', background: '#ECE5DD' }}>
            <div
              style={{
                background: '#FFFFFF',
                borderRadius: '0 10px 10px 10px',
                padding: '10px 14px',
                fontSize: '13px',
                color: '#1A0A00',
                lineHeight: 1.6,
                boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
                maxWidth: '85%',
              }}
            >
              {MARATHI_MESSAGE}
            </div>
            <p style={{ margin: '8px 0 0', fontSize: '10px', color: '#999', textAlign: 'left' }}>
              हा संदेश आपोआप टाइप होईल
            </p>
          </div>

          {/* CTA Button */}
          <div style={{ padding: '14px 18px', background: '#FFFFFF' }}>
            <button
              onClick={openWhatsApp}
              style={{
                width: '100%',
                background: '#25D366',
                color: '#FFFFFF',
                border: 'none',
                borderRadius: '999px',
                padding: '12px',
                fontSize: '14px',
                fontWeight: 700,
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
                letterSpacing: '0.05em',
              }}
              onMouseEnter={e => (e.currentTarget.style.background = '#1DA851')}
              onMouseLeave={e => (e.currentTarget.style.background = '#25D366')}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              WhatsApp वर चौकशी करा
            </button>
          </div>
        </div>
      )}

      {/* Floating Toggle Button */}
      <button
        onClick={() => setOpen(!open)}
        style={{
          position: 'fixed',
          bottom: '24px',
          right: '24px',
          zIndex: 1000,
          width: '58px',
          height: '58px',
          borderRadius: '50%',
          background: '#25D366',
          border: 'none',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 4px 20px rgba(37,211,102,0.45)',
          transition: 'transform 0.2s, box-shadow 0.2s',
        }}
        onMouseEnter={e => {
          e.currentTarget.style.transform = 'scale(1.1)';
          e.currentTarget.style.boxShadow = '0 6px 28px rgba(37,211,102,0.60)';
        }}
        onMouseLeave={e => {
          e.currentTarget.style.transform = 'scale(1)';
          e.currentTarget.style.boxShadow = '0 4px 20px rgba(37,211,102,0.45)';
        }}
        aria-label="WhatsApp वर संपर्क करा"
      >
        {open ? (
          <X size={24} color="#FFFFFF" />
        ) : (
          <svg width="28" height="28" viewBox="0 0 24 24" fill="white">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
          </svg>
        )}
      </button>
    </>
  );
};
