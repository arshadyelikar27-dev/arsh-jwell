import React from 'react';
import { motion } from 'framer-motion';

// ─── Data ─────────────────────────────────────────────────────────────────────

interface ProductItem {
  id: string;
  label: string;
  image: string;
}

interface JewellerySection {
  id: string;
  title: string;
  titleMr: string;
  products: ProductItem[];
}

const SECTIONS: JewellerySection[] = [
  {
    id: 'gold',
    title: 'Gold Jewellery',
    titleMr: 'सोन्याचे दागिने',
    products: [
      {
        id: 'g1',
        label: 'Gold Floral Bangles',
        image: '/images/product-03.png',
      },
      {
        id: 'g2',
        label: 'Gold Lotus Necklace',
        image: '/images/product-02.png',
      },
      {
        id: 'g3',
        label: 'Temple Long Necklace',
        image: '/images/product-24.png',
      },
      {
        id: 'g4',
        label: 'Antique Gold Vaddanam',
        image: '/images/product-25.png',
      },
      {
        id: 'g5',
        label: 'Gold Jhumka Earrings',
        image: '/images/product-01.png',
      },
    ],
  },
  {
    id: 'diamond',
    title: 'Diamond Jewellery',
    titleMr: 'हिऱ्यांचे दागिने',
    products: [
      {
        id: 'd1',
        label: 'Diamond Layered Necklace',
        image: '/images/product-04.png',
      },
      {
        id: 'd2',
        label: 'Diamond Necklace',
        image: '/images/product-05.png',
      },
      {
        id: 'd3',
        label: 'Emerald Diamond Choker',
        image: '/images/product-06.png',
      },
      {
        id: 'd4',
        label: 'Sapphire Diamond Vaddanam',
        image: '/images/product-07.png',
      },
      {
        id: 'd5',
        label: 'Diamond Drop Earrings',
        image: '/images/product-08.png',
      },
    ],
  },
  {
    id: 'kundan',
    title: 'Kundan Jewellery',
    titleMr: 'कुंदन दागिने',
    products: [
      {
        id: 'k1',
        label: 'Kundan Polki Necklace',
        image: '/images/product-09.png',
      },
      {
        id: 'k2',
        label: 'Navratna Polki Choker',
        image: '/images/product-10.png',
      },
      {
        id: 'k3',
        label: 'Antique Long Necklace',
        image: '/images/product-11.png',
      },
      {
        id: 'k4',
        label: 'Peacock Kundan Vaddanam',
        image: '/images/product-12.png',
      },
      {
        id: 'k5',
        label: 'Kundan Jhumka Earrings',
        image: '/images/product-13.png',
      },
    ],
  },
  {
    id: 'polki',
    title: 'Polki Jewellery',
    titleMr: 'पोलकी दागिने',
    products: [
      {
        id: 'pk1',
        label: 'Polki Emerald Necklace',
        image: '/images/product-14.png',
      },
      {
        id: 'pk2',
        label: 'Polki Necklace Set',
        image: '/images/product-15.png',
      },
      {
        id: 'pk3',
        label: 'Uncut Diamond Earrings',
        image: '/images/product-16.png',
      },
      {
        id: 'pk4',
        label: 'Long Polki Necklace',
        image: '/images/product-17.png',
      },
      {
        id: 'pk5',
        label: 'Ruby Polki Choker',
        image: '/images/product-18.png',
      },
    ],
  },
  {
    id: 'mangalsutra',
    title: 'Mangalsutra',
    titleMr: 'मंगळसूत्र',
    products: [
      {
        id: 'm1',
        label: 'Traditional Mangalsutra',
        image: '/images/product-19.png',
      },
      {
        id: 'm2',
        label: 'Diamond Heart Mangalsutra',
        image: '/images/product-20.png',
      },
      {
        id: 'm3',
        label: 'Simple Mangalsutra',
        image: '/images/product-21.png',
      },
      {
        id: 'm4',
        label: 'Temple Gold Mangalsutra',
        image: '/images/product-22.png',
      },
      {
        id: 'm5',
        label: 'Sapphire Drop Mangalsutra',
        image: '/images/product-23.png',
      },
    ],
  },
];


// ─── Product Card ─────────────────────────────────────────────────────────────

const ProductCard: React.FC<{ item: ProductItem; delay: number }> = ({ item, delay }) => {
  const [hovered, setHovered] = React.useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.55, delay, ease: [0.16, 1, 0.3, 1] }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', cursor: 'pointer', minWidth: 0 }}
    >
      {/* Image Box */}
      <div
        style={{
          width: '100%',
          aspectRatio: '3/4',
          overflow: 'hidden',
          borderRadius: '4px',
          background: '#F0EBE3',
          boxShadow: hovered
            ? '0 8px 32px rgba(0,0,0,0.18)'
            : '0 2px 10px rgba(0,0,0,0.08)',
          transition: 'box-shadow 0.35s ease',
        }}
      >
        <img
          src={item.image}
          alt={item.label}
          loading="lazy"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            transform: hovered ? 'scale(1.06)' : 'scale(1)',
            transition: 'transform 0.7s cubic-bezier(0.16, 1, 0.3, 1)',
          }}
          onError={(e) => {
            (e.currentTarget as HTMLImageElement).src =
              'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=600&q=80&fit=crop';
          }}
        />
      </div>

      {/* Label */}
      <div style={{ marginTop: '12px', textAlign: 'center', position: 'relative', paddingBottom: '8px' }}>
        <span
          style={{
            fontSize: '12px',
            letterSpacing: '0.18em',
            textTransform: 'uppercase',
            fontWeight: 700,
            color: hovered ? '#C9A24B' : '#1A0A00',
            transition: 'color 0.25s ease',
            fontFamily: 'Plus Jakarta Sans, sans-serif',
          }}
        >
          {item.label}
        </span>
        {/* Underline indicator */}
        <motion.div
          animate={{ width: hovered ? '100%' : '0%' }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            height: '1.5px',
            background: '#C9A24B',
            borderRadius: '2px',
          }}
        />
      </div>
    </motion.div>
  );
};

// ─── Section Row ──────────────────────────────────────────────────────────────

const SectionRow: React.FC<{ section: JewellerySection; sectionIndex: number }> = ({ section, sectionIndex }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-60px' }}
    transition={{ duration: 0.8, delay: sectionIndex * 0.05, ease: [0.16, 1, 0.3, 1] }}
    style={{ marginBottom: '72px' }}
  >
    {/* Section Title */}
    <div style={{ textAlign: 'center', marginBottom: '32px' }}>
      <motion.h2
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
        style={{
          fontFamily: 'Cormorant Garamond, serif',
          fontSize: 'clamp(1.6rem, 3.5vw, 2.6rem)',
          fontWeight: 400,
          color: '#1A0A00',
          margin: '0 0 6px',
          letterSpacing: '0.05em',
          textTransform: 'uppercase',
        }}
      >
        {section.title}
      </motion.h2>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.16 }}
        style={{ fontSize: '13px', color: '#C9A24B', letterSpacing: '0.2em', margin: 0, fontWeight: 500 }}
      >
        {section.titleMr}
      </motion.p>
      {/* Gold divider line */}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        style={{
          height: '1px',
          background: 'linear-gradient(to right, transparent, #C9A24B 30%, #C9A24B 70%, transparent)',
          margin: '18px auto 0',
          maxWidth: '300px',
          transformOrigin: 'center',
        }}
      />
    </div>

    {/* Products Row */}
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(5, 1fr)',
        gap: '16px',
      }}
      className="section-product-row"
    >
      {section.products.map((item, idx) => (
        <ProductCard key={item.id} item={item} delay={idx * 0.07} />
      ))}
    </div>
  </motion.div>
);

// ─── Main Collection ──────────────────────────────────────────────────────────

export const Collection: React.FC = () => (
  <section
    id="collection"
    className="relative overflow-hidden"
    style={{ background: '#FAFAFA', padding: '80px 0 100px' }}
  >
    {/* Ambient glows */}
    <div
      className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full pointer-events-none"
      style={{ background: 'rgba(201,162,75,0.06)', filter: 'blur(120px)' }}
    />
    <div
      className="absolute bottom-0 left-0 w-[350px] h-[350px] rounded-full pointer-events-none"
      style={{ background: 'rgba(107,45,139,0.05)', filter: 'blur(130px)' }}
    />

    <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 32px', position: 'relative', zIndex: 1 }}>

      {/* ── Page Header ── */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '16px',
          justifyContent: 'space-between',
          alignItems: 'flex-end',
          marginBottom: '64px',
          paddingBottom: '24px',
          borderBottom: '1px solid rgba(201,162,75,0.3)',
        }}
      >
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
            <div style={{ width: '28px', height: '1px', background: '#C9A24B' }} />
            <span
              style={{
                fontSize: '13px',
                letterSpacing: '0.3em',
                textTransform: 'uppercase',
                color: '#C9A24B',
                fontWeight: 800,
              }}
            >
              निवडक संग्रह
            </span>
          </div>
          <h2
            style={{
              fontFamily: 'Cormorant Garamond, serif',
              fontSize: 'clamp(2rem, 4vw, 3.5rem)',
              color: '#1A0A00',
              fontWeight: 300,
              margin: 0,
            }}
          >
            आमचा संग्रह
          </h2>
        </div>
        <p
          style={{
            fontSize: '13px',
            color: '#5C3D2E',
            maxWidth: '380px',
            lineHeight: 1.7,
            fontWeight: 300,
          }}
        >
          अनुभवी कारागिरांनी मेहनतीने घडवलेले दागिने, पिढ्यानपिढ्यांना जपलेली कला.
        </p>
      </motion.div>

      {/* ── Jewellery Sections ── */}
      {SECTIONS.map((section, idx) => (
        <SectionRow key={section.id} section={section} sectionIndex={idx} />
      ))}

      {/* ── Bottom Tagline ── */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
        style={{
          textAlign: 'center',
          marginTop: '20px',
          paddingTop: '40px',
          borderTop: '1px solid rgba(201,162,75,0.2)',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '16px',
            marginBottom: '16px',
          }}
        >
          <div
            style={{
              height: '1px',
              width: '60px',
              background: 'linear-gradient(to right, transparent, #C9A24B)',
            }}
          />
          <span style={{ fontSize: '20px', color: '#C9A24B' }}>✦</span>
          <div
            style={{
              height: '1px',
              width: '60px',
              background: 'linear-gradient(to left, transparent, #C9A24B)',
            }}
          />
        </div>
        <p
          style={{
            fontFamily: 'Cormorant Garamond, serif',
            fontSize: 'clamp(1.1rem, 2.5vw, 1.6rem)',
            color: '#3D2B1F',
            fontWeight: 400,
            margin: 0,
            fontStyle: 'italic',
          }}
        >
          "प्रत्येक दागिना एक अमर कथा सांगतो."
        </p>
        <p
          style={{
            fontSize: '12px',
            color: '#7A6555',
            marginTop: '6px',
            letterSpacing: '0.1em',
          }}
        >
          Every piece tells a timeless story.
        </p>
      </motion.div>
    </div>

    {/* Responsive 5-col → 2-col on mobile */}
    <style>{`
      @media (max-width: 900px) {
        .section-product-row {
          grid-template-columns: repeat(3, 1fr) !important;
        }
      }
      @media (max-width: 540px) {
        .section-product-row {
          grid-template-columns: repeat(2, 1fr) !important;
        }
      }
    `}</style>
  </section>
);
