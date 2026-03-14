"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header style={styles.header}>
      {/* Logo */}
      <Link href="/" style={styles.logo}>
        <span style={styles.logoMain}>Wish</span>
        <span style={styles.logoAccent}>Eid</span>
        <span style={styles.logoStar}> ✦</span>
      </Link>

      {/* Desktop Nav */}
      <nav style={styles.nav}>
        <Link href="/" style={styles.navLink}>Home</Link>
        <Link href="/gallery" style={styles.navLink}>Templates</Link>
        <Link href="/editor" style={styles.navLink}>Editor</Link>
      </nav>

      {/* CTA Button */}
      <Link href="/editor" style={styles.ctaBtn}>
        Create Card
      </Link>

      {/* Mobile Hamburger */}
      <button
        style={styles.hamburger}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        <span style={{ ...styles.bar, ...(menuOpen ? styles.barTopOpen : {}) }} />
        <span style={{ ...styles.bar, ...(menuOpen ? styles.barMidOpen : {}) }} />
        <span style={{ ...styles.bar, ...(menuOpen ? styles.barBotOpen : {}) }} />
      </button>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div style={styles.mobileMenu}>
          <Link href="/" style={styles.mobileLink} onClick={() => setMenuOpen(false)}>Home</Link>
          <Link href="/gallery" style={styles.mobileLink} onClick={() => setMenuOpen(false)}>Templates</Link>
          <Link href="/editor" style={styles.mobileLink} onClick={() => setMenuOpen(false)}>Editor</Link>
          <Link href="/editor" style={styles.mobileCta} onClick={() => setMenuOpen(false)}>Create Card</Link>
        </div>
      )}
    </header>
  );
}

const styles: Record<string, React.CSSProperties> = {
  header: {
    position: "sticky",
    top: 0,
    zIndex: 100,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "14px 32px",
    background: "linear-gradient(135deg, #fde0c5 0%, #f5cdd8 50%, #ddd6f3 100%)",
    borderBottom: "1px solid rgba(200,160,140,0.25)",
    backdropFilter: "blur(8px)",
  },
  logo: {
    textDecoration: "none",
    fontFamily: "var(--font-playfair)",
    fontSize: "1.5rem",
    letterSpacing: "0.5px",
  },
  logoMain: { color: "#4a3728" },
  logoAccent: { color: "#c4748a" },
  logoStar: { color: "#b8a9e8", fontSize: "1rem" },

  nav: {
    display: "flex",
    gap: "28px",
    alignItems: "center",
  },
  navLink: {
    textDecoration: "none",
    fontSize: "0.9rem",
    fontWeight: 600,
    color: "#7a6058",
    fontFamily: "var(--font-quicksand)",
    transition: "color 0.2s",
  },

  ctaBtn: {
    textDecoration: "none",
    padding: "9px 22px",
    borderRadius: "20px",
    background: "linear-gradient(135deg, #e8a0b4, #b8a9e8)",
    color: "white",
    fontSize: "0.85rem",
    fontWeight: 700,
    fontFamily: "var(--font-quicksand)",
    letterSpacing: "0.3px",
    transition: "opacity 0.2s",
  },

  hamburger: {
    display: "none",
    flexDirection: "column",
    gap: "5px",
    background: "none",
    border: "none",
    cursor: "pointer",
    padding: "4px",
  },
  bar: {
    display: "block",
    width: "22px",
    height: "2px",
    background: "#7a6058",
    borderRadius: "2px",
    transition: "all 0.25s",
  },
  barTopOpen: { transform: "translateY(7px) rotate(45deg)" },
  barMidOpen: { opacity: 0 },
  barBotOpen: { transform: "translateY(-7px) rotate(-45deg)" },

  mobileMenu: {
    position: "absolute",
    top: "100%",
    left: 0,
    right: 0,
    background: "#fef8f0",
    borderBottom: "1px solid rgba(200,160,140,0.25)",
    display: "flex",
    flexDirection: "column",
    padding: "12px 24px 20px",
    gap: "14px",
    zIndex: 99,
  },
  mobileLink: {
    textDecoration: "none",
    fontSize: "0.95rem",
    fontWeight: 600,
    color: "#7a6058",
    fontFamily: "var(--font-quicksand)",
  },
  mobileCta: {
    textDecoration: "none",
    padding: "10px 0",
    textAlign: "center",
    borderRadius: "20px",
    background: "linear-gradient(135deg, #e8a0b4, #b8a9e8)",
    color: "white",
    fontSize: "0.9rem",
    fontWeight: 700,
    fontFamily: "var(--font-quicksand)",
  },
};