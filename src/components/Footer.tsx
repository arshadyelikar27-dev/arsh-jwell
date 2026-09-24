import React from 'react';
import { ArrowUp, MessageSquare, MapPin, Phone, Mail, Instagram } from 'lucide-react';
import { SITE_CONFIG } from '../config/siteContent';

export const Footer: React.FC = () => {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  const handleWhatsApp = (number: string) => {
    const raw = number.replace(/[^0-9]/g, '');
    const text = encodeURIComponent(`Hello ${SITE_CONFIG.brandName}, I would like to inquire about your fine jewellery collection.`);
    window.open(`https://wa.me/91${raw}?text=${text}`, '_blank');
  };

  const linkStyle: React.CSSProperties = {
    color: '#5C3D2E', textDecoration: 'none', fontSize: '13px', lineHeight: 1.7,
    transition: 'color 0.2s',
  };

  return (
    <footer
      id="footer"
      data-mr
      style={{
        background: '#FFFFFF',
        borderTop: '1px solid rgba(201,162,75,0.25)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Subtle glow */}
      <div
        style={{
          position: 'absolute', bottom: 0, left: '50%', transform: 'translateX(-50%)',
          width: '700px', height: '250px', borderRadius: '50%',
          background: 'rgba(201,162,75,0.04)', filter: 'blur(120px)', pointerEvents: 'none',
        }}
      />

      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '60px 32px 0', position: 'relative', zIndex: 1 }}>

        {/* Brand Row */}
        <div
          style={{
            display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between',
            paddingBottom: '40px', borderBottom: '1px solid rgba(201,162,75,0.18)', gap: '20px',
          }}
        >
          <div>
            <img
              src="/images/vb_malgeekar_logo.webp"
              alt="व्ही बी माकणीकर"
              style={{ height: '52px', width: 'auto', objectFit: 'contain', display: 'block', marginBottom: '8px' }}
            />
            <span style={{ fontSize: '13px', letterSpacing: '0.15em', textTransform: 'uppercase', color: '#C9A24B', fontWeight: 800, fontFamily: 'Mukta, sans-serif' }}>
              उत्कृष्ट दागिनेकार &bull; स्था. १९६६
            </span>
          </div>

          {/* Social Links */}
          <div style={{ display: 'flex', gap: '16px' }}>
            <a
              href="https://wa.me/917410105757?text=Hello%20Maknikar%20Jewellers,%20I%20would%20like%20to%20inquire%20about%20your%20fine%20jewellery%20collection."
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                width: '44px', height: '44px', borderRadius: '50%',
                background: 'rgba(201,162,75,0.06)', border: '1px solid rgba(201,162,75,0.3)',
                color: '#C9A24B', transition: 'all 0.3s ease'
              }}
              onMouseEnter={e => {
                e.currentTarget.style.background = '#C9A24B';
                e.currentTarget.style.color = '#FFFFFF';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = 'rgba(201,162,75,0.06)';
                e.currentTarget.style.color = '#C9A24B';
              }}
              aria-label="WhatsApp"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
            </a>
            <a
              href="https://www.instagram.com/maknikar_jewellers?stkn=MWc2N3I4dnltNzBidQ=="
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                width: '44px', height: '44px', borderRadius: '50%',
                background: 'rgba(201,162,75,0.06)', border: '1px solid rgba(201,162,75,0.3)',
                color: '#C9A24B', transition: 'all 0.3s ease'
              }}
              onMouseEnter={e => {
                e.currentTarget.style.background = '#C9A24B';
                e.currentTarget.style.color = '#FFFFFF';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = 'rgba(201,162,75,0.06)';
                e.currentTarget.style.color = '#C9A24B';
              }}
              aria-label="Instagram"
            >
              <Instagram size={20} />
            </a>
          </div>
        </div>

        {/* Three Columns */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '40px',
            padding: '48px 0',
            borderBottom: '1px solid rgba(201,162,75,0.15)',
          }}
        >
          {/* Creations */}
          <div>
            <h4 style={{ fontFamily: 'Mukta, sans-serif', fontSize: '15px', color: '#1A0A00', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '20px', fontWeight: 700 }}>
              संग्रह
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {['हिरे व सोलिटेअर', 'कुंदन आणि पोलकी', 'वधूचे मंगळसूत्र', 'पाचू आणि रत्नदागिने'].map(item => (
                <li key={item}>
                  <a href="#collection" style={linkStyle}
                    onMouseEnter={e => (e.currentTarget.style.color = '#C9A24B')}
                    onMouseLeave={e => (e.currentTarget.style.color = '#5C3D2E')}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Visit Us */}
          <div>
            <h4 style={{ fontFamily: 'Mukta, sans-serif', fontSize: '15px', color: '#1A0A00', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '20px', fontWeight: 700 }}>
              आमच्याकडे या
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              <div style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                <MapPin size={14} style={{ color: '#C9A24B', flexShrink: 0, marginTop: '2px' }} />
                <div>
                  <p style={{ margin: 0, fontSize: '13px', color: '#1A0A00', lineHeight: 1.6 }}>{SITE_CONFIG.contact.address}</p>
                  <p style={{ margin: 0, fontSize: '12px', color: '#5C3D2E', lineHeight: 1.5 }}>{SITE_CONFIG.contact.addressEn}</p>
                </div>
              </div>
              <div style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                <Phone size={14} style={{ color: '#C9A24B', flexShrink: 0, marginTop: '2px' }} />
                <div>
                  <p style={{ margin: 0, fontSize: '13px', color: '#1A0A00' }}>+91 {SITE_CONFIG.contact.whatsappNumber}</p>
                  <p style={{ margin: 0, fontSize: '13px', color: '#1A0A00' }}>+91 {SITE_CONFIG.contact.whatsappNumber2}</p>
                </div>
              </div>
              <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                <Mail size={14} style={{ color: '#C9A24B', flexShrink: 0 }} />
                <a href={`mailto:${SITE_CONFIG.contact.email}`}
                  style={{ fontSize: '13px', color: '#5C3D2E', textDecoration: 'none', wordBreak: 'break-all' }}
                  onMouseEnter={e => (e.currentTarget.style.color = '#C9A24B')}
                  onMouseLeave={e => (e.currentTarget.style.color = '#5C3D2E')}
                >
                  {SITE_CONFIG.contact.email}
                </a>
              </div>
            </div>
          </div>

          {/* WhatsApp CTA */}
          <div
            style={{
              background: 'rgba(107,45,139,0.04)',
              border: '1px solid rgba(107,45,139,0.18)',
              borderRadius: '16px',
              padding: '24px',
              display: 'flex',
              flexDirection: 'column',
              gap: '16px',
            }}
          >
            <div>
              <p style={{ fontSize: '13px', letterSpacing: '0.15em', textTransform: 'uppercase', color: '#C9A24B', fontWeight: 800, marginBottom: '8px', fontFamily: 'Mukta, sans-serif' }}>
                विशेष चौकशी
              </p>
              <p style={{ fontSize: '13px', color: '#5C3D2E', lineHeight: 1.7, margin: 0, fontFamily: 'Mukta, sans-serif' }}>
                आमच्या तज्ज सोनारांशी थेट संपर्क साधा आणि तुमच्या अनुरूप हस्तनिर्मित दागिन्यांसाठी विचारना करा.
              </p>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <button
                onClick={() => handleWhatsApp(SITE_CONFIG.contact.whatsappNumber)}
                style={{
                  padding: '10px 16px', borderRadius: '999px',
                  border: '1px solid rgba(201,162,75,0.45)',
                  background: 'rgba(201,162,75,0.08)',
                  color: '#7A5C1E', fontSize: '11px', letterSpacing: '0.12em',
                  textTransform: 'uppercase', fontWeight: 600, cursor: 'pointer',
                  display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px',
                  transition: 'background 0.2s',
                }}
                onMouseEnter={e => (e.currentTarget.style.background = '#C9A24B', e.currentTarget.style.color = '#FFFFFF')}
                onMouseLeave={e => (e.currentTarget.style.background = 'rgba(201,162,75,0.08)', e.currentTarget.style.color = '#7A5C1E')}
              >
                <MessageSquare size={13} />
                WA: {SITE_CONFIG.contact.whatsappNumber}
              </button>
              <button
                onClick={() => handleWhatsApp(SITE_CONFIG.contact.whatsappNumber2)}
                style={{
                  padding: '10px 16px', borderRadius: '999px',
                  border: '1px solid rgba(107,45,139,0.35)',
                  background: 'rgba(107,45,139,0.07)',
                  color: '#6B2D8B', fontSize: '11px', letterSpacing: '0.12em',
                  textTransform: 'uppercase', fontWeight: 600, cursor: 'pointer',
                  display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px',
                  transition: 'background 0.2s',
                }}
                onMouseEnter={e => (e.currentTarget.style.background = '#6B2D8B', e.currentTarget.style.color = '#FFFFFF')}
                onMouseLeave={e => (e.currentTarget.style.background = 'rgba(107,45,139,0.07)', e.currentTarget.style.color = '#6B2D8B')}
              >
                <MessageSquare size={13} />
                WA: {SITE_CONFIG.contact.whatsappNumber2}
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          style={{
            display: 'flex', flexWrap: 'wrap', alignItems: 'center',
            justifyContent: 'space-between', gap: '16px',
            padding: '24px 0',
            fontSize: '11px', color: 'rgba(92,61,46,0.55)',
          }}
        >
          <span>&copy; {new Date().getFullYear()} {SITE_CONFIG.brandName} दागिने. सर्व हक्क राखीव.</span>
          <button
            onClick={scrollToTop}
            style={{
              display: 'flex', alignItems: 'center', gap: '8px',
              background: 'none', border: '1px solid rgba(201,162,75,0.3)',
              borderRadius: '999px', padding: '7px 16px',
              color: '#5C3D2E', fontSize: '10px', letterSpacing: '0.2em',
              textTransform: 'uppercase', cursor: 'pointer', transition: 'border-color 0.2s, color 0.2s',
            }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = '#C9A24B'; e.currentTarget.style.color = '#C9A24B'; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(201,162,75,0.3)'; e.currentTarget.style.color = '#5C3D2E'; }}
          >
            वर जा <ArrowUp size={12} style={{ color: '#C9A24B' }} />
          </button>
        </div>
      </div>

      {/* Bottom strip */}
      <div
        style={{
          background: 'rgba(201,162,75,0.05)',
          borderTop: '1px solid rgba(201,162,75,0.12)',
          padding: '12px',
          textAlign: 'center',
          fontSize: '12px',
          letterSpacing: '0.15em',
          textTransform: 'uppercase',
          color: 'rgba(92,61,46,0.55)',
          fontFamily: 'Mukta, sans-serif',
        }}
      >
        प्रेमाने घडवलेले, लातूर, महाराष्ट्र
      </div>
    </footer>
  );
};
