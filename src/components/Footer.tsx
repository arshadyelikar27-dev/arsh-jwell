import React from 'react';
import { ArrowUp, MessageSquare, MapPin, Phone, Mail } from 'lucide-react';
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
              src="/images/vb_malgeekar_logo.png"
              alt="व्ही बी माकणीकर"
              style={{ height: '52px', width: 'auto', objectFit: 'contain', display: 'block', marginBottom: '8px' }}
            />
            <span style={{ fontSize: '13px', letterSpacing: '0.25em', textTransform: 'uppercase', color: '#C9A24B', fontWeight: 800 }}>
              उत्कृष्ट दागिनेकार &bull; स्था. १९६६
            </span>
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
            <h4 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '16px', color: '#1A0A00', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '20px', fontWeight: 400 }}>
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
            <h4 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '16px', color: '#1A0A00', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '20px', fontWeight: 400 }}>
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
              <p style={{ fontSize: '13px', letterSpacing: '0.25em', textTransform: 'uppercase', color: '#C9A24B', fontWeight: 800, marginBottom: '8px' }}>
                विशेष चौकशी
              </p>
              <p style={{ fontSize: '12px', color: '#5C3D2E', lineHeight: 1.6, margin: 0 }}>
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
          fontSize: '10px',
          letterSpacing: '0.25em',
          textTransform: 'uppercase',
          color: 'rgba(92,61,46,0.45)',
        }}
      >
        प्रेमाने घडवलेले, लातूर, महाराष्ट्र
      </div>
    </footer>
  );
};
