'use client';

import Link from 'next/link';

const floatingIcons = [
  { src: '/icons/moon.png',    style: { top: '12%',    left: '7%',   width: 64, height: 64 }, delay: '0s',   anim: 'animate-float' },
  { src: '/icons/star.png',    style: { top: '18%',    right: '9%',  width: 48, height: 48 }, delay: '1s',   anim: 'animate-float-delayed' },
  { src: '/icons/blossom.png', style: { bottom: '28%', left: '4%',   width: 56, height: 56 }, delay: '2s',   anim: 'animate-float' },
  { src: '/icons/sparkle.png', style: { top: '44%',    right: '5%',  width: 40, height: 40 }, delay: '0.5s', anim: 'animate-float-delayed' },
  { src: '/icons/mosque.png',  style: { bottom: '14%', right: '11%', width: 64, height: 64 }, delay: '1.5s', anim: 'animate-float' },
  { src: '/icons/leaf.png',    style: { top: '64%',    left: '9%',   width: 44, height: 44 }, delay: '3s',   anim: 'animate-float-delayed' },
];

const trustItems = [
  { src: '/icons/palette.png',   text: '20+ free templates' },
  { src: '/icons/lightning.png', text: 'Ready in 2 minutes' },
  { src: '/icons/unlock.png',    text: 'No account needed' },
];

const features = [
  {
    src: '/icons/templates-icon.png',
    title: 'Beautiful Templates',
    desc: 'Choose from a growing library of warm Eid card designs, crafted for every style.',
  },
  {
    src: '/icons/edit-icon.png',
    title: 'Fully Customisable',
    desc: 'Change text, colours, stickers and backgrounds to make every card uniquely yours.',
  },
  {
    src: '/icons/download-icon.png',
    title: 'Download & Share',
    desc: 'Export your card as a high-quality image or PDF and share it with loved ones instantly.',
  },
];

export default function LandingPage() {
  return (
    <main>

      {/* ── HERO ── */}
      <section style={{
        position: 'relative',
        minHeight: '92vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        background: `
          radial-gradient(ellipse 80% 60% at 20% 20%, rgba(212,160,80,0.18) 0%, transparent 60%),
          radial-gradient(ellipse 60% 50% at 80% 10%, rgba(245,201,154,0.22) 0%, transparent 55%),
          radial-gradient(ellipse 70% 60% at 60% 90%, rgba(232,149,109,0.15) 0%, transparent 60%),
          #fdf8f0
        `,
      }}>

        {/* Floating icons */}
        {floatingIcons.map((icon, i) => (
          <div
            key={i}
            aria-hidden="true"
            className={icon.anim}
            style={{
              position: 'absolute',
              ...icon.style,
              animationDelay: icon.delay,
              background: 'rgba(255,255,255,0.65)',
              backdropFilter: 'blur(8px)',
              border: '1px solid rgba(255,255,255,0.85)',
              borderRadius: '16px',
              padding: '8px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              pointerEvents: 'none',
              userSelect: 'none',
            }}
          >
            <img src={icon.src} alt="" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
          </div>
        ))}

        {/* Hero content */}
        <div style={{
          position: 'relative',
          zIndex: 10,
          textAlign: 'center',
          padding: '0 1.5rem',
          maxWidth: '860px',
          margin: '0 auto',
        }}>

          {/* Badge */}
          <div
            className="animate-fade-up"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '6px 18px',
              borderRadius: '999px',
              marginTop: '1rem',
              background: 'rgba(255,255,255,0.75)',
              backdropFilter: 'blur(8px)',
              border: '1px solid rgba(212,160,80,0.4)',
              color: '#a0722a',
              fontSize: '0.85rem',
              fontWeight: 600,
              marginBottom: '1.5rem',
              opacity: 0,
              animationDelay: '0.1s',
            }}
          >
            <img src="/icons/sparkles-badge.png" alt="" style={{ width: 16, height: 16, objectFit: 'contain' }} />
            Celebrate Eid with heartfelt cards
            <img src="/icons/sparkles-badge.png" alt="" style={{ width: 12, height: 12, objectFit: 'contain' }} />
          </div>

          {/* Heading */}
          <h1
            className="animate-fade-up"
            style={{
              fontSize: 'clamp(2.2rem, 5.5vw, 4rem)',
              lineHeight: 1.15,
              letterSpacing: '-0.01em',
              marginBottom: '1.25rem',
              opacity: 0,
              animationDelay: '0.25s',
            }}
          >
            <span style={{ color: '#4a4a4a' }}>Send Eid Greetings</span>
            <br />
            <span className="shimmer-text">That Feel Personal ✦</span>
          </h1>

          {/* Subtext */}
          <p
            className="animate-fade-up"
            style={{
              fontSize: 'clamp(1rem, 2vw, 1.15rem)',
              color: '#8a8a8a',
              lineHeight: 1.7,
              maxWidth: '560px',
              margin: '0 auto 2.5rem',
              opacity: 0,
              animationDelay: '0.4s',
            }}
          >
            Design beautiful Eid cards in minutes — pick a template, personalise your
            message, add stickers, and share instantly with the people you love.
          </p>

          {/* CTA buttons */}
          <div
            className="animate-fade-up"
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '1rem',
              justifyContent: 'center',
              opacity: 0,
              animationDelay: '0.55s',
            }}
          >
            <Link href="/editor" style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '14px 32px',
              borderRadius: '16px',
              background: 'linear-gradient(135deg, #d4813a, #c9952a)',
              color: '#fff',
              fontWeight: 700,
              fontSize: '1rem',
              textDecoration: 'none',
              boxShadow: '0 4px 20px rgba(201,149,42,0.35)',
              transition: 'transform 0.2s, box-shadow 0.2s',
            }}>
              <img src="/icons/magic-wand.png" alt="" style={{ width: 18, height: 18, objectFit: 'contain' }} />
              Start Creating
            </Link>

            <Link href="/gallery" style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '14px 32px',
              borderRadius: '16px',
              background: 'rgba(255,255,255,0.75)',
              backdropFilter: 'blur(8px)',
              border: '1px solid rgba(200,180,140,0.4)',
              color: '#6b4a1e',
              fontWeight: 600,
              fontSize: '1rem',
              textDecoration: 'none',
              transition: 'transform 0.2s, box-shadow 0.2s',
            }}>
              Browse Templates
            </Link>
          </div>

          {/* Trust strip */}
          <div
            className="animate-fade-up"
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              gap: '1.5rem',
              marginTop: '2.5rem',
              opacity: 0,
              animationDelay: '0.7s',
            }}
          >
            {trustItems.map(({ src, text }) => (
              <span key={text} style={{
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                color: '#b8966a',
                fontSize: '0.875rem',
              }}>
                <img src={src} alt="" style={{ width: 16, height: 16, objectFit: 'contain', opacity: 0.7 }} />
                {text}
              </span>
            ))}
          </div>
        </div>

        {/* Wave divider */}
        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, lineHeight: 0 }}>
          <svg viewBox="0 0 1440 80" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', display: 'block' }} preserveAspectRatio="none" aria-hidden="true">
            <path d="M0,40 C360,80 1080,0 1440,40 L1440,80 L0,80 Z" fill="#ffffff" fillOpacity="0.9" />
          </svg>
        </div>
      </section>

      {/* ── FEATURES ── */}
      <section style={{
        background: '#ffffff',
        padding: '5rem 1.5rem',
        textAlign: 'center',
      }}>
        <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', color: '#4a4a4a', marginBottom: '0.75rem' }}>
          Everything you need
        </h2>
        <p style={{ color: '#8a8a8a', fontSize: '1.05rem', maxWidth: '480px', margin: '0 auto 3.5rem', lineHeight: 1.7 }}>
          A simple, joyful tool to make Eid greetings that feel personal and beautiful.
        </p>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: '1.5rem',
          maxWidth: '1000px',
          margin: '0 auto',
        }}>
          {features.map(({ src, title, desc }) => (
            <div key={title} style={{
              background: 'linear-gradient(145deg, rgba(212,160,80,0.10), rgba(245,201,154,0.12))',
              border: '1px solid rgba(212,160,80,0.20)',
              borderRadius: '20px',
              padding: '2rem 1.5rem',
              textAlign: 'left',
              transition: 'transform 0.2s, box-shadow 0.2s',
            }}>
              <div style={{
                width: 52,
                height: 52,
                borderRadius: '14px',
                background: 'linear-gradient(135deg, #d4813a, #c9952a)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '1.25rem',
              }}>
                <img src={src} alt="" style={{ width: 26, height: 26, objectFit: 'contain' }} />
              </div>
              <h3 style={{
                fontSize: '1.15rem',
                color: '#4a4a4a',
                marginBottom: '0.6rem',
                fontFamily: "'Playfair Display', serif",
              }}>
                {title}
              </h3>
              <p style={{ color: '#8a8a8a', fontSize: '0.95rem', lineHeight: 1.65 }}>{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── BOTTOM CTA ── */}
      <section style={{
        background: 'linear-gradient(135deg, rgba(212,160,80,0.15), rgba(245,201,154,0.18))',
        padding: '5rem 1.5rem',
        textAlign: 'center',
      }}>
        <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.6rem)', color: '#4a4a4a', marginBottom: '1rem' }}>
          Ready to spread joy?
        </h2>
        <p style={{ color: '#8a8a8a', fontSize: '1.05rem', marginBottom: '2rem' }}>
          Create your first Eid card — free, no sign-up needed.
        </p>
        <Link href="/editor" style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '8px',
          padding: '16px 40px',
          borderRadius: '16px',
          background: 'linear-gradient(135deg, #d4813a, #c9952a)',
          color: '#fff',
          fontWeight: 700,
          fontSize: '1.05rem',
          textDecoration: 'none',
          boxShadow: '0 4px 24px rgba(201,149,42,0.35)',
        }}>
          <img src="/icons/magic-wand.png" alt="" style={{ width: 20, height: 20, objectFit: 'contain' }} />
          Start Creating Now
        </Link>
      </section>

    </main>
  );
}