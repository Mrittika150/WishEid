'use client';

import Link from 'next/link';
import Image from 'next/image';

const floatingCards = [
  { src: '/icons/moon.png',     alt: 'Moon',     style: 'top-[12%] left-[8%]  w-16 h-16', delay: '0s',   anim: 'animate-float' },
  { src: '/icons/star.png',     alt: 'Star',     style: 'top-[20%] right-[10%] w-12 h-12', delay: '1s',   anim: 'animate-float-delayed' },
  { src: '/icons/blossom.png',  alt: 'Blossom',  style: 'bottom-[30%] left-[5%] w-14 h-14', delay: '2s',  anim: 'animate-float' },
  { src: '/icons/sparkle.png',  alt: 'Sparkle',  style: 'top-[45%] right-[6%]  w-10 h-10', delay: '0.5s', anim: 'animate-float-delayed' },
  { src: '/icons/mosque.png',   alt: 'Mosque',   style: 'bottom-[15%] right-[12%] w-16 h-16', delay: '1.5s', anim: 'animate-float' },
  { src: '/icons/leaf.png',     alt: 'Leaf',     style: 'top-[65%] left-[10%]  w-11 h-11', delay: '3s',   anim: 'animate-float-delayed' },
];

const trustItems = [
  { src: '/icons/palette.png',   alt: 'Templates', text: '20+ free templates' },
  { src: '/icons/lightning.png', alt: 'Fast',       text: 'Ready in 2 minutes' },
  { src: '/icons/unlock.png',    alt: 'Free',       text: 'No account needed' },
];

export default function HeroSection() {
  return (
    <section className="relative min-h-[92vh] flex items-center justify-center overflow-hidden">

      {/* ── Background mesh gradient ── */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          background: `
            radial-gradient(ellipse 80% 60% at 20% 20%, rgba(255,183,197,0.35) 0%, transparent 60%),
            radial-gradient(ellipse 60% 50% at 80% 10%, rgba(200,220,255,0.30) 0%, transparent 55%),
            radial-gradient(ellipse 70% 60% at 60% 90%, rgba(255,218,185,0.30) 0%, transparent 60%),
            radial-gradient(ellipse 50% 40% at 10% 80%, rgba(216,191,216,0.25) 0%, transparent 50%),
            var(--cream)
          `,
        }}
      />

      {/* ── Dot-grid texture overlay ── */}
      <div
        className="absolute inset-0 -z-10 opacity-[0.035]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='1' cy='1' r='1' fill='%23a0785a'/%3E%3C/svg%3E")`,
          backgroundSize: '20px 20px',
        }}
      />

      {/* ── Floating icon cards ── */}
      {floatingCards.map((card) => (
        <div
          key={card.alt}
          aria-hidden="true"
          className={`
            absolute ${card.style} ${card.anim}
            flex items-center justify-center rounded-2xl
            bg-white/60 backdrop-blur-sm shadow-sm
            border border-white/80
            select-none pointer-events-none p-2
          `}
          style={{ animationDelay: card.delay }}
        >
          <img
            src={card.src}
            alt=""
            className="w-full h-full object-contain"
            draggable={false}
          />
        </div>
      ))}

      {/* ── Hero content ── */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">

        {/* Badge pill */}
        <div
          className="animate-fade-up inline-flex items-center gap-2 px-4 py-2 rounded-full
                      bg-white/70 backdrop-blur-sm border border-rose-200/60
                      text-rose-500 text-sm font-medium shadow-sm mb-6"
          style={{ animationDelay: '0.1s', opacity: 0 }}
        >
          <img
            src="/icons/sparkles-badge.png"
            alt=""
            className="w-4 h-4 object-contain"
          />
          <span style={{ fontFamily: 'var(--font-quicksand)' }}>
            Celebrate Eid with heartfelt cards
          </span>
          <img
            src="/icons/heart-badge.png"
            alt=""
            className="w-3 h-3 object-contain"
          />
        </div>

        {/* Main heading */}
        <h1
          className="animate-fade-up mb-6 leading-[1.15] tracking-tight"
          style={{
            fontFamily: 'var(--font-playfair)',
            fontSize: 'clamp(2.4rem, 6vw, 4.2rem)',
            animationDelay: '0.25s',
            opacity: 0,
          }}
        >
          <span className="text-slate-700">Send Eid Greetings</span>
          <br />
          <span className="shimmer-text">That Feel Personal ✦</span>
        </h1>

        {/* Subheading */}
        <p
          className="animate-fade-up mb-10 text-slate-500 leading-relaxed max-w-xl mx-auto"
          style={{
            fontFamily: 'var(--font-quicksand)',
            fontSize: 'clamp(1rem, 2.2vw, 1.15rem)',
            animationDelay: '0.4s',
            opacity: 0,
          }}
        >
          Design beautiful Eid cards in minutes — choose a template, personalise
          your message, add stickers, and share instantly with the people you love.
        </p>

        {/* CTA buttons */}
        <div
          className="animate-fade-up flex flex-col sm:flex-row items-center justify-center gap-4"
          style={{ animationDelay: '0.55s', opacity: 0 }}
        >
          <Link
            href="/editor"
            className="
              group relative inline-flex items-center gap-2 px-8 py-4 rounded-2xl
              font-semibold text-white shadow-lg shadow-rose-200/60
              transition-all duration-300
              hover:shadow-xl hover:shadow-rose-300/50 hover:-translate-y-0.5
              active:scale-[0.98] overflow-hidden
            "
            style={{
              fontFamily: 'var(--font-quicksand)',
              background: 'linear-gradient(135deg, var(--rose) 0%, var(--peach) 100%)',
            }}
          >
            {/* Shine sweep on hover */}
            <span className="
              absolute inset-0 -translate-x-full
              bg-gradient-to-r from-transparent via-white/20 to-transparent
              group-hover:translate-x-full transition-transform duration-700
            " />
            <img
              src="/icons/wand.png"
              alt=""
              className="w-[18px] h-[18px] object-contain brightness-0 invert"
            />
            Start Creating
            <img
              src="/icons/arrow-right.png"
              alt=""
              className="w-4 h-4 object-contain brightness-0 invert
                         group-hover:translate-x-1 transition-transform duration-200"
            />
          </Link>

          <Link
            href="/gallery"
            className="
              inline-flex items-center gap-2 px-8 py-4 rounded-2xl
              font-semibold text-slate-600
              bg-white/70 backdrop-blur-sm
              border border-slate-200/80
              shadow-sm hover:shadow-md
              transition-all duration-300 hover:-translate-y-0.5
              active:scale-[0.98]
            "
            style={{ fontFamily: 'var(--font-quicksand)' }}
          >
            Browse Templates
          </Link>
        </div>

        {/* Trust strip */}
        <div
          className="animate-fade-up mt-10 flex flex-wrap items-center justify-center gap-6 text-slate-400 text-sm"
          style={{
            fontFamily: 'var(--font-quicksand)',
            animationDelay: '0.7s',
            opacity: 0,
          }}
        >
          {trustItems.map(({ src, alt, text }) => (
            <span key={text} className="flex items-center gap-1.5">
              <img src={src} alt={alt} className="w-4 h-4 object-contain opacity-60" />
              <span>{text}</span>
            </span>
          ))}
        </div>

      </div>

      {/* ── Bottom wave divider ── */}
      <div className="absolute bottom-0 left-0 right-0 overflow-hidden leading-none">
        <svg
          viewBox="0 0 1440 80"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path
            d="M0,40 C360,80 1080,0 1440,40 L1440,80 L0,80 Z"
            fill="white"
            fillOpacity="0.9"
          />
        </svg>
      </div>

    </section>
  );
}
