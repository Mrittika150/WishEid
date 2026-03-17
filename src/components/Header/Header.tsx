'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header style={{
      position: 'sticky',
      top: 0,
      zIndex: 100,
      background: 'linear-gradient(135deg, rgba(245,201,154,0.88), rgba(212,160,80,0.80))',
      backdropFilter: 'blur(12px)',
      borderBottom: '1px solid rgba(255,255,255,0.5)',
      padding: '0 2rem',
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        height: '64px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}>

        {/* Logo */}
        <Link href="/" style={{ textDecoration: 'none' }}>
          <span style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: '1.4rem',
            fontWeight: 700,
            color: '#6b4a1e',
            letterSpacing: '-0.01em',
          }}>
            WishEid ✦
          </span>
        </Link>

        {/* Desktop nav */}
        <nav
          className="desktop-nav"
          style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}
        >
          <Link href="/"        style={navLink}>Home</Link>
          <Link href="/gallery" style={navLink}>Templates</Link>
          <Link href="/editor"  style={navLink}>Editor</Link>
          <Link href="/editor"  style={ctaButton}>Create Card</Link>
        </nav>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="mobile-menu-btn"
          style={{
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            display: 'none',
            flexDirection: 'column',
            gap: '5px',
            padding: '4px',
          }}
          aria-label="Toggle menu"
        >
          <span style={{ ...hamburgerLine, transform: menuOpen ? 'rotate(45deg) translate(5px, 5px)' : 'none' }} />
          <span style={{ ...hamburgerLine, opacity: menuOpen ? 0 : 1 }} />
          <span style={{ ...hamburgerLine, transform: menuOpen ? 'rotate(-45deg) translate(5px, -5px)' : 'none' }} />
        </button>
      </div>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div style={{
          padding: '1rem 2rem 1.5rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem',
          borderTop: '1px solid rgba(255,255,255,0.4)',
        }}>
          <Link href="/"        style={navLink} onClick={() => setMenuOpen(false)}>Home</Link>
          <Link href="/gallery" style={navLink} onClick={() => setMenuOpen(false)}>Templates</Link>
          <Link href="/editor"  style={navLink} onClick={() => setMenuOpen(false)}>Editor</Link>
          <Link href="/editor"  style={{ ...ctaButton, textAlign: 'center' }} onClick={() => setMenuOpen(false)}>
            Create Card
          </Link>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav     { display: none !important; }
          .mobile-menu-btn { display: flex !important; }
        }
      `}</style>
    </header>
  );
}

const navLink: React.CSSProperties = {
  textDecoration: 'none',
  color: '#6b4a1e',
  fontFamily: "'Quicksand', sans-serif",
  fontWeight: 600,
  fontSize: '0.95rem',
};

const ctaButton: React.CSSProperties = {
  textDecoration: 'none',
  background: 'linear-gradient(135deg, #d4813a, #c9952a)',
  color: '#fff',
  fontFamily: "'Quicksand', sans-serif",
  fontWeight: 700,
  fontSize: '0.9rem',
  padding: '0.5rem 1.25rem',
  borderRadius: '999px',
  boxShadow: '0 2px 12px rgba(201,149,42,0.35)',
};

const hamburgerLine: React.CSSProperties = {
  display: 'block',
  width: '22px',
  height: '2px',
  background: '#6b4a1e',
  borderRadius: '2px',
  transition: 'all 0.3s ease',
};