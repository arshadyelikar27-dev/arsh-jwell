import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SITE_CONFIG } from '../config/siteContent';

export const Collection: React.FC = () => {
  const products = SITE_CONFIG.products;

  return (
    <section
      id="collection"
      className="relative overflow-hidden"
      style={{ background: '#FAFAFA', padding: '80px 0 100px' }}
    >
      {/* Subtle ambient glows */}
      <div
        className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{ background: 'rgba(201,162,75,0.06)', filter: 'blur(120px)' }}
      />
      <div
        className="absolute bottom-0 left-0 w-[350px] h-[350px] rounded-full pointer-events-none"
        style={{ background: 'rgba(107,45,139,0.05)', filter: 'blur(130px)' }}
      />

      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 32px', position: 'relative', zIndex: 1 }}>

        {/* Section Header */}
        <div
          style={{
            display: 'flex', flexWrap: 'wrap', gap: '16px',
            justifyContent: 'space-between', alignItems: 'flex-end',
            marginBottom: '48px', paddingBottom: '24px',
            borderBottom: '1px solid rgba(201,162,75,0.3)',
          }}
        >
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
              <div style={{ width: '28px', height: '1px', background: '#C9A24B' }} />
              <span style={{ fontSize: '13px', letterSpacing: '0.3em', textTransform: 'uppercase', color: '#C9A24B', fontWeight: 800 }}>
                निवडक संग्रह
              </span>
            </div>
            <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(2rem, 4vw, 3.5rem)', color: '#1A0A00', fontWeight: 300, margin: 0 }}>
              आमचा संग्रह
            </h2>
          </div>
          <p style={{ fontSize: '13px', color: '#5C3D2E', maxWidth: '380px', lineHeight: 1.7, fontWeight: 300 }}>
            अनुभवी कारागिरांनी निसनिराळा मेहनतीने घडवलेले दागिने, पिढ्यानपिढ्यांना जपलेली कला.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6">
          <AnimatePresence>
            {products.map((product) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, ease: 'easeOut' }}
                style={{
                  background: '#FFFFFF',
                  borderRadius: '16px',
                  overflow: 'hidden',
                  border: '1px solid rgba(201,162,75,0.18)',
                  boxShadow: '0 2px 12px rgba(0,0,0,0.06)',
                  aspectRatio: '3/4',
                  position: 'relative',
                  cursor: 'pointer',
                  transition: 'box-shadow 0.3s, transform 0.3s',
                }}
                whileHover={{ y: -4, boxShadow: '0 8px 32px rgba(0,0,0,0.12)' }}
              >
                {/* Image */}
                <div style={{ position: 'absolute', inset: 0, overflow: 'hidden' }}>
                  <img
                    src={product.image}
                    alt={product.name}
                    loading="eager"
                    style={{
                      width: '100%', height: '100%', objectFit: 'cover',
                      transition: 'transform 0.6s ease',
                    }}
                    onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.05)')}
                    onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1)')}
                  />
                  {/* Bottom gradient for text readability */}
                  <div
                    style={{
                      position: 'absolute', bottom: 0, left: 0, right: 0, height: '50%',
                      background: 'linear-gradient(to top, rgba(255,255,255,1) 0%, rgba(255,255,255,0.7) 50%, transparent 100%)',
                    }}
                  />
                </div>

                <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '12px 14px', zIndex: 2 }}>
                  <div style={{ fontSize: '10px', letterSpacing: '0.15em', textTransform: 'uppercase', color: '#C9A24B', fontWeight: 800, marginBottom: '2px' }}>
                    {product.category}
                  </div>
                  <h3 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '15px', color: '#1A0A00', fontWeight: 600, margin: 0, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                    {product.name}
                  </h3>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};
