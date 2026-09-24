import React from 'react';
import { motion } from 'framer-motion';

// ─── Stats ─────────────────────────────────────────────────────────────────────
const STATS = [
  { value: '50+', label: 'वर्षांचा अनुभव', sublabel: 'Years of Legacy' },
  { value: '10K+', label: 'समाधानी ग्राहक', sublabel: 'Happy Customers' },
  { value: '1970', label: 'स्थापना वर्ष', sublabel: 'Established Since' },
  { value: '100%', label: 'शुद्ध सोने', sublabel: 'Purity Guaranteed' },
];

// ─── Timeline milestones ───────────────────────────────────────────────────────
const MILESTONES = [
  {
    year: '१९७०',
    title: 'सुरुवात',
    desc: 'पारंपरिक सोनार कुटुंबातून कारागिरीची सुरुवात',
  },
  {
    year: '१९८५',
    title: 'विस्तार',
    desc: 'Latur मध्ये पहिले showroom, नवीन डिझाईन्सची ओळख',
  },
  {
    year: '२०००',
    title: 'आधुनिकता',
    desc: 'Diamond Jewellery व आधुनिक designs चा समावेश',
  },
  {
    year: 'आज',
    title: 'विश्वासाचे नाते',
    desc: 'Bhusar Line, Latur येथे पूर्ण luxury showroom experience',
  },
];

// ─── Paragraphs ────────────────────────────────────────────────────────────────
const PARAGRAPHS = [
  `पारंपरिक सोनार कुटुंबातून आलेल्या आमच्या परिवाराने Gold Jewellery in Latur या क्षेत्रात आपल्या कारागिरीपासून प्रवासाला सुरुवात केली. दागिन्यांची घडण, डिझाईनमधील बारकावे, नक्षीकाम आणि प्रत्येक दागिन्यामागील कौशल्य हीच आमची ओळख बनली. अनेक दशकांच्या अनुभवातून पारंपरिक भारतीय दागिन्यांची सुंदरता आणि आधुनिक Jewellery Designs यांचा सुंदर मिलाफ आम्ही जपला आहे.`,
  `आज Maknikar Jewellers Latur येथे ग्राहकांसाठी विविध प्रकारचे Gold Jewellery, Diamond Jewellery आणि आधुनिक व पारंपरिक दागिन्यांचे designs उपलब्ध करून देण्याचा आमचा प्रयत्न असतो. लग्नसमारंभ, सण-उत्सव, विशेष प्रसंग किंवा रोजच्या वापरासाठी योग्य दागिने निवडताना ग्राहकांना विश्वासार्ह सेवा आणि वैविध्यपूर्ण collection देणे हे आमचे ध्येय आहे.`,
  `काळानुसार ग्राहकांच्या आवडी, फॅशन आणि Jewellery Designs मध्ये मोठे बदल झाले. त्यानुसार आम्हीही आधुनिक काळाशी जुळवून घेतले; मात्र गुणवत्ता, प्रामाणिकपणा, कारागिरी आणि ग्राहकांचा विश्वास ही आमची मूलभूत मूल्ये आजही तितकीच कायम आहेत.`,
  `Bhusar Line, Bhande Galli, Latur परिसरातील आमच्या showroom मध्ये पारंपरिक कारागिरीसोबत आधुनिक jewellery shopping experience देण्याचा आम्ही प्रयत्न करतो. Latur आणि आसपासच्या ग्राहकांसाठी Gold Jewellery Shop in Latur, Diamond Jewellery in Latur आणि Jewellery Showroom in Latur म्हणून विविध प्रसंगांसाठी योग्य दागिने निवडण्यास आम्ही मदत करतो.`,
];

// ─── Component ────────────────────────────────────────────────────────────────
export const About: React.FC = () => (
  <section
    id="about"
    data-mr
    className="relative overflow-hidden"
    style={{
      background: 'linear-gradient(160deg, #0D0507 0%, #1A0A00 55%, #0f0208 100%)',
      padding: '100px 0 110px',
    }}
  >
    {/* ── Ambient background glows ── */}
    <div
      className="absolute top-[-80px] left-[-100px] w-[500px] h-[500px] rounded-full pointer-events-none"
      style={{ background: 'rgba(201,162,75,0.07)', filter: 'blur(140px)' }}
    />
    <div
      className="absolute bottom-[-60px] right-[-80px] w-[420px] h-[420px] rounded-full pointer-events-none"
      style={{ background: 'rgba(107,45,139,0.10)', filter: 'blur(130px)' }}
    />
    <div
      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] rounded-full pointer-events-none"
      style={{ background: 'rgba(201,162,75,0.04)', filter: 'blur(160px)' }}
    />

    <div
      style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 32px', position: 'relative', zIndex: 1 }}
    >
      {/* ── Section Label ── */}
      <motion.div
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.75, delay: 0, ease: [0.16, 1, 0.3, 1] }}
        style={{ marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '12px' }}
      >
        <div style={{ width: '32px', height: '1px', background: '#C9A24B' }} />
        <span
          style={{
            fontSize: '11px',
            letterSpacing: '0.35em',
            textTransform: 'uppercase',
            color: '#C9A24B',
            fontWeight: 800,
            fontFamily: 'Mukta, sans-serif',
          }}
        >
          आमची कहाणी · Our Story
        </span>
      </motion.div>

      {/* ── Main Heading ── */}
      <motion.h2
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.75, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
        style={{
          fontFamily: 'Mukta, sans-serif',
          fontSize: 'clamp(2.2rem, 5vw, 4rem)',
          fontWeight: 700,
          color: '#F5ECD7',
          margin: '0 0 6px',
          letterSpacing: '0.01em',
          lineHeight: 1.15,
        }}
      >
        १९७० पासून दागिने घडवत आलो…
      </motion.h2>
      <motion.h3
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.75, delay: 0.14, ease: [0.16, 1, 0.3, 1] }}
        style={{
          fontFamily: 'Mukta, sans-serif',
          fontSize: 'clamp(1.5rem, 3.5vw, 2.8rem)',
          fontWeight: 600,
          color: '#C9A24B',
          margin: '0 0 40px',
          letterSpacing: '0.01em',
        }}
      >
        आज नाती जपतोय.
      </motion.h3>

      {/* ── Gold Divider ── */}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        style={{
          height: '1px',
          background: 'linear-gradient(to right, #C9A24B 0%, rgba(201,162,75,0.2) 60%, transparent 100%)',
          transformOrigin: 'left',
          marginBottom: '64px',
          maxWidth: '500px',
        }}
      />

      {/* ── Stats Row ── */}
      <motion.div
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.75, delay: 0.18, ease: [0.16, 1, 0.3, 1] }}
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '2px',
          marginBottom: '80px',
        }}
        className="about-stats-grid"
      >
        {STATS.map((stat, i) => (
          <motion.div
            key={stat.value}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.22 + i * 0.08, ease: [0.16, 1, 0.3, 1] }}
            style={{
              padding: '28px 24px',
              borderLeft: i === 0 ? '1px solid rgba(201,162,75,0.25)' : undefined,
              borderRight: '1px solid rgba(201,162,75,0.25)',
              borderTop: '1px solid rgba(201,162,75,0.15)',
              borderBottom: '1px solid rgba(201,162,75,0.15)',
              textAlign: 'center',
              background: 'rgba(201,162,75,0.04)',
              backdropFilter: 'blur(8px)',
            }}
          >
            <div
              style={{
                fontFamily: 'Cormorant Garamond, serif',
                fontSize: 'clamp(2rem, 4vw, 3rem)',
                fontWeight: 600,
                color: '#C9A24B',
                lineHeight: 1,
                marginBottom: '8px',
              }}
            >
              {stat.value}
            </div>
            <div
              style={{
                fontSize: '13px',
                color: '#F5ECD7',
                fontWeight: 600,
                marginBottom: '3px',
                fontFamily: 'Mukta, sans-serif',
              }}
            >
              {stat.label}
            </div>
            <div
              style={{
                fontSize: '10px',
                color: 'rgba(201,162,75,0.65)',
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                fontFamily: 'Plus Jakarta Sans, sans-serif',
              }}
            >
              {stat.sublabel}
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* ── Two-Column Layout: Text + Timeline ── */}
      <div
        style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '72px', alignItems: 'start' }}
        className="about-two-col"
      >
        {/* Left: Paragraphs */}
        <div>
          <motion.p
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.75, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            style={{
              fontFamily: 'Mukta, sans-serif',
              fontSize: 'clamp(1.05rem, 2vw, 1.25rem)',
              color: '#D4A96A',
              lineHeight: 1.75,
              margin: '0 0 32px',
              borderLeft: '3px solid #C9A24B',
              paddingLeft: '20px',
            }}
          >
            Maknikar Jewellers, Latur हा पारंपरिक सोनार कुटुंबाच्या कारागिरीतून सुरू झालेला विश्वासाचा प्रवास आहे. १९७० पासून आम्ही सोन्याच्या दागिन्यांची निर्मिती, बारकाईने केलेले नक्षीकाम आणि उत्कृष्ट कारागिरीच्या माध्यमातून ग्राहकांशी विश्वासाचे नाते जपत आलो आहोत.
          </motion.p>

          {PARAGRAPHS.map((para, i) => (
            <motion.p
              key={i}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.75, delay: 0.15 + i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              style={{
                fontSize: 'clamp(0.9rem, 1.3vw, 1rem)',
                color: 'rgba(245,236,215,0.78)',
                lineHeight: 1.9,
                margin: '0 0 20px',
                fontFamily: 'Mukta, sans-serif',
                fontWeight: 400,
              }}
            >
              {para}
            </motion.p>
          ))}

          {/* Bottom tagline */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.75, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            style={{
              marginTop: '36px',
              padding: '20px 24px',
              background: 'linear-gradient(135deg, rgba(201,162,75,0.12) 0%, rgba(107,45,139,0.08) 100%)',
              border: '1px solid rgba(201,162,75,0.3)',
              borderRadius: '2px',
            }}
          >
            <p
              style={{
                fontFamily: 'Mukta, sans-serif',
                fontSize: 'clamp(1rem, 1.8vw, 1.2rem)',
                color: '#C9A24B',
                fontWeight: 600,
                margin: '0 0 6px',
                lineHeight: 1.6,
              }}
            >
              "१९७० पासून दागिने घडवत आलो… आज नाती जपतोय."
            </p>
            <p
              style={{
                fontSize: '11px',
                color: 'rgba(245,236,215,0.55)',
                letterSpacing: '0.12em',
                margin: 0,
                fontFamily: 'Mukta, sans-serif',
              }}
            >
              Maknikar Jewellers Latur — परंपरेची कारागिरी, आधुनिक डिझाईन्स आणि विश्वासाचे नाते.
            </p>
          </motion.div>
        </div>

        {/* Right: Timeline */}
        <div style={{ paddingTop: '8px' }}>
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.75, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
            style={{ marginBottom: '32px' }}
          >
            <span
              style={{
                fontSize: '11px',
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                color: '#C9A24B',
                fontWeight: 700,
                fontFamily: 'Mukta, sans-serif',
              }}
            >
              आमचा प्रवास · Our Journey
            </span>
          </motion.div>

          {/* Timeline items */}
          <div style={{ position: 'relative' }}>
            {/* Vertical line */}
            <motion.div
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              style={{
                position: 'absolute',
                left: '20px',
                top: '12px',
                bottom: '12px',
                width: '1px',
                background: 'linear-gradient(to bottom, #C9A24B, rgba(201,162,75,0.15))',
                transformOrigin: 'top',
              }}
            />

            {MILESTONES.map((m, i) => (
              <motion.div
                key={m.year}
                initial={{ opacity: 0, x: 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.65, delay: 0.28 + i * 0.12, ease: [0.16, 1, 0.3, 1] }}
                style={{
                  display: 'flex',
                  gap: '24px',
                  alignItems: 'flex-start',
                  marginBottom: i < MILESTONES.length - 1 ? '36px' : 0,
                  position: 'relative',
                }}
              >
                {/* Dot */}
                <div
                  style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '50%',
                    background: 'rgba(201,162,75,0.15)',
                    border: '1px solid rgba(201,162,75,0.5)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                    zIndex: 1,
                  }}
                >
                  <span
                    style={{
                      fontSize: '9px',
                      fontWeight: 700,
                      color: '#C9A24B',
                      letterSpacing: '0.05em',
                      fontFamily: 'Plus Jakarta Sans, sans-serif',
                    }}
                  >
                    ✦
                  </span>
                </div>

                {/* Text */}
                <div style={{ paddingTop: '8px' }}>
                  <div
                    style={{ display: 'flex', alignItems: 'baseline', gap: '10px', marginBottom: '5px' }}
                  >
                    <span
                      style={{
                        fontFamily: 'Mukta, sans-serif',
                        fontSize: '1.5rem',
                        fontWeight: 700,
                        color: '#C9A24B',
                      }}
                    >
                      {m.year}
                    </span>
                    <span
                      style={{
                        fontSize: '12px',
                        fontWeight: 700,
                        color: '#F5ECD7',
                        letterSpacing: '0.1em',
                        textTransform: 'uppercase',
                        fontFamily: 'Mukta, sans-serif',
                      }}
                    >
                      {m.title}
                    </span>
                  </div>
                  <p
                    style={{
                      fontSize: '13px',
                      color: 'rgba(245,236,215,0.65)',
                      lineHeight: 1.65,
                      margin: 0,
                      fontFamily: 'Mukta, sans-serif',
                    }}
                  >
                    {m.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Visit card */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.75, delay: 0.55, ease: [0.16, 1, 0.3, 1] }}
            style={{
              marginTop: '48px',
              padding: '24px',
              background: 'rgba(255,255,255,0.03)',
              border: '1px solid rgba(201,162,75,0.2)',
              borderRadius: '2px',
            }}
          >
            <p
              style={{
                fontSize: '11px',
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                color: '#C9A24B',
                margin: '0 0 10px',
                fontWeight: 700,
                fontFamily: 'Mukta, sans-serif',
              }}
            >
              📍 आमचे ठिकाण
            </p>
            <p
              style={{
                fontSize: '14px',
                color: '#F5ECD7',
                lineHeight: 1.65,
                margin: 0,
                fontFamily: 'Mukta, sans-serif',
              }}
            >
              Bhusar Line, Bhande Galli,
              <br />
              <strong style={{ color: '#C9A24B' }}>Latur, Maharashtra</strong>
            </p>
            <p
              style={{
                fontSize: '12px',
                color: 'rgba(245,236,215,0.5)',
                marginTop: '10px',
                lineHeight: 1.7,
                fontFamily: 'Mukta, sans-serif',
              }}
            >
              छोट्या पारंपरिक कारागिरीच्या प्रवासापासून आजच्या आधुनिक Jewellery Showroom पर्यंतचा हा प्रवास अनेक दशकांच्या मेहनतीचा आणि ग्राहकांनी दिलेल्या प्रेम व विश्वासाचा परिणाम आहे.
            </p>
          </motion.div>
        </div>
      </div>
    </div>

    {/* ── Responsive styles ── */}
    <style>{`
      @media (max-width: 860px) {
        .about-two-col {
          grid-template-columns: 1fr !important;
          gap: 48px !important;
        }
      }
      @media (max-width: 600px) {
        .about-stats-grid {
          grid-template-columns: repeat(2, 1fr) !important;
        }
      }
    `}</style>
  </section>
);
