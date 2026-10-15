"use client";

import { useEffect, useRef, useState } from "react";
import {
  TrendingUp,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Zap,
  BarChart2,
  DollarSign,
  Compass,
} from "lucide-react";

interface HeroProps {
  onOpenRegister: () => void;
  onOpenEvents: () => void;
}

export default function Hero({ onOpenRegister, onOpenEvents }: HeroProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mouseOffset, setMouseOffset] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      const x = (e.clientX - innerWidth / 2) / (innerWidth / 2);
      const y = (e.clientY - innerHeight / 2) / (innerHeight / 2);
      setMouseOffset({ x, y });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section
      id="hero"
      ref={containerRef}
      className="relative min-h-screen pt-28 pb-16 flex flex-col justify-between overflow-hidden bg-[#07131f] select-none"
    >
      {/* Background Financial Grid */}
      <div className="absolute inset-0 bg-financial-grid opacity-35 pointer-events-none" />

      {/* Radiant Glowing Orbs with subtle parallax */}
      <div
        className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-[#f5b83d]/15 blur-[120px] pointer-events-none transition-transform duration-700 ease-out"
        style={{
          transform: `translate(${mouseOffset.x * 25}px, ${mouseOffset.y * 25}px)`,
        }}
      />
      <div
        className="absolute top-1/3 right-1/4 w-96 h-96 rounded-full bg-[#3ddbb0]/12 blur-[130px] pointer-events-none transition-transform duration-700 ease-out"
        style={{
          transform: `translate(${-mouseOffset.x * 30}px, ${-mouseOffset.y * 30}px)`,
        }}
      />
      <div
        className="absolute bottom-1/4 left-1/2 -translate-x-1/2 w-80 h-80 rounded-full bg-[#ff6b57]/10 blur-[100px] pointer-events-none"
      />

      {/* SVG Background Stock Lines & Candlesticks with mouse parallax */}
      <div
        className="absolute inset-0 pointer-events-none opacity-40 transition-transform duration-1000 ease-out"
        style={{
          transform: `translate(${mouseOffset.x * 12}px, ${mouseOffset.y * 12}px)`,
        }}
      >
        <svg
          className="w-full h-full"
          preserveAspectRatio="none"
          viewBox="0 0 1440 800"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M -100 600 C 200 650, 400 350, 700 480 C 1000 610, 1200 200, 1540 160"
            stroke="#f5b83d"
            strokeWidth="2"
            strokeDasharray="6 6"
            opacity="0.5"
          />
          <path
            d="M -100 700 C 250 550, 500 680, 850 360 C 1100 120, 1300 240, 1540 80"
            stroke="#3ddbb0"
            strokeWidth="3"
            opacity="0.7"
          />

          {/* Floating Stock Candlesticks */}
          <rect x="220" y="420" width="14" height="60" fill="#3ddbb0" rx="2" opacity="0.3" />
          <line x1="227" y1="390" x2="227" y2="510" stroke="#3ddbb0" strokeWidth="2" opacity="0.4" />

          <rect x="580" y="320" width="14" height="45" fill="#f5b83d" rx="2" opacity="0.3" />
          <line x1="587" y1="290" x2="587" y2="390" stroke="#f5b83d" strokeWidth="2" opacity="0.4" />

          <rect x="1100" y="240" width="14" height="80" fill="#3ddbb0" rx="2" opacity="0.3" />
          <line x1="1107" y1="200" x2="1107" y2="350" stroke="#3ddbb0" strokeWidth="2" opacity="0.4" />
        </svg>
      </div>

      {/* Hanging / Floating Financial Badges (Reference-inspired dynamic floating motifs) */}
      {/* Badge 1: Bull Run Status */}
      <div
        className="hidden md:flex absolute top-32 left-8 lg:left-20 animate-float-slow items-center gap-2.5 px-3.5 py-2 rounded-xl bg-[#0f2236]/85 border border-[#1f3a56] shadow-[0_10px_30px_rgba(0,0,0,0.5)] z-20 backdrop-blur-md transition-transform duration-500 hover:scale-110"
        style={{
          transform: `translate(${mouseOffset.x * -20}px, ${mouseOffset.y * -20}px)`,
        }}
      >
        <div className="w-8 h-8 rounded-lg bg-[#3ddbb0]/20 border border-[#3ddbb0]/40 flex items-center justify-center text-[#3ddbb0]">
          <TrendingUp className="w-4 h-4" />
        </div>
        <div>
          <div className="text-[10px] uppercase font-mono text-[#93a8bd]">MARKET INDEX</div>
          <div className="text-xs font-bold font-heading text-[#3ddbb0]">BULLISH ▲ +38.6%</div>
        </div>
      </div>

      {/* Badge 2: Runway Meter */}
      <div
        className="hidden md:flex absolute top-40 right-8 lg:right-24 animate-float-reverse items-center gap-2.5 px-3.5 py-2 rounded-xl bg-[#0f2236]/85 border border-[#1f3a56] shadow-[0_10px_30px_rgba(0,0,0,0.5)] z-20 backdrop-blur-md transition-transform duration-500 hover:scale-110"
        style={{
          transform: `translate(${mouseOffset.x * 22}px, ${mouseOffset.y * 22}px)`,
        }}
      >
        <div className="w-8 h-8 rounded-lg bg-[#f5b83d]/20 border border-[#f5b83d]/40 flex items-center justify-center text-[#f5b83d]">
          <Sparkles className="w-4 h-4" />
        </div>
        <div>
          <div className="text-[10px] uppercase font-mono text-[#93a8bd]">STAGE LIGHTS</div>
          <div className="text-xs font-bold font-heading text-[#f5b83d]">KARVAN RUNWAY</div>
        </div>
      </div>

      {/* Badge 3: Unicorn Horn / Seed Valuation */}
      <div
        className="hidden lg:flex absolute bottom-36 left-16 animate-float-reverse items-center gap-2 px-3 py-1.5 rounded-xl bg-[#0f2236]/90 border border-[#1f3a56] z-20 backdrop-blur-md"
        style={{
          transform: `translate(${mouseOffset.x * -16}px, ${mouseOffset.y * -16}px)`,
        }}
      >
        <DollarSign className="w-4 h-4 text-[#f5b83d]" />
        <span className="text-xs font-mono text-[#e8eef4]">VALUATION: <strong className="text-[#f5b83d]">$10M+ MOCK</strong></span>
      </div>

      {/* Badge 4: Mudra Trading Terminal Indicator */}
      <div
        className="hidden lg:flex absolute bottom-40 right-20 animate-float-slow items-center gap-2 px-3 py-1.5 rounded-xl bg-[#0f2236]/90 border border-[#1f3a56] z-20 backdrop-blur-md"
        style={{
          transform: `translate(${mouseOffset.x * 18}px, ${mouseOffset.y * 18}px)`,
        }}
      >
        <BarChart2 className="w-4 h-4 text-[#3ddbb0]" />
        <span className="text-xs font-mono text-[#e8eef4]">ALGO TERMINAL: <strong className="text-[#3ddbb0]">ONLINE</strong></span>
      </div>

      {/* Main Center Content */}
      <div className="relative z-20 max-w-5xl mx-auto px-4 sm:px-6 text-center my-auto flex flex-col items-center">
        {/* Top Tagline pill */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#1f3a56] bg-[#0f2236]/80 backdrop-blur-md mb-6 hover:border-[#f5b83d] transition-colors">
          <span className="w-2 h-2 rounded-full bg-[#f5b83d] animate-ping" />
          <span className="text-xs sm:text-sm font-mono tracking-wider uppercase text-[#93a8bd]">
            THE VENTUREVERSE CONVERGENCE • MARCH 2026
          </span>
        </div>

        {/* BIG VentureCraft Logo First Thing on Screen */}
        <h1
          className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-black font-heading tracking-tighter text-[#e8eef4] leading-none mb-4 transition-transform duration-300"
          style={{
            transform: `translate(${mouseOffset.x * -10}px, ${mouseOffset.y * -8}px)`,
          }}
        >
          VENTURE<span className="text-[#f5b83d] inline-block hover:scale-105 transition-transform duration-200">CRAFT</span>
          <span className="block text-2xl sm:text-4xl md:text-5xl lg:text-6xl text-transparent bg-clip-text bg-gradient-to-r from-[#f5b83d] via-[#3ddbb0] to-[#ff6b57] mt-1 font-extrabold tracking-widest">
            2026
          </span>
        </h1>

        {/* Subtitle / Theme descriptor */}
        <p className="max-w-2xl text-base sm:text-lg md:text-xl text-[#93a8bd] font-normal leading-relaxed mb-8 px-4">
          Where startup pitching, Wall Street trading simulations, and corporate ramp walk collide. Step into the arena of founders, models, and market makers.
        </p>

        {/* Call to Actions (Magnetic feel) */}
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto px-4">
          <button
            onClick={onOpenRegister}
            data-magnetic="true"
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-[#f5b83d] to-[#ffc857] text-[#07131f] font-heading font-bold text-sm tracking-wider uppercase shadow-[0_0_30px_rgba(245,184,61,0.5)] hover:shadow-[0_0_40px_rgba(245,184,61,0.8)] hover:scale-105 transition-all duration-200 flex items-center justify-center gap-3"
          >
            <span>Register for Events</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <a
            href="#domains-section"
            data-magnetic="true"
            className="w-full sm:w-auto px-8 py-4 rounded-xl border border-[#1f3a56] bg-[#0f2236]/90 hover:bg-[#152d47] text-[#e8eef4] hover:text-[#f5b83d] hover:border-[#f5b83d]/60 font-heading font-semibold text-sm tracking-wider uppercase backdrop-blur-md transition-all duration-200 flex items-center justify-center gap-2"
          >
            <Compass className="w-4 h-4 text-[#3ddbb0]" />
            <span>Explore Domains</span>
          </a>
        </div>

        {/* Quick event badges row */}
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-6 mt-10 pt-6 border-t border-[#1f3a56]/60 text-xs font-mono text-[#93a8bd]">
          <div className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#f5b83d]" />
            <span>VENTURE CRAFT (PITCHING)</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#ff6b57]" />
            <span>KARVAN (CORPORATE RAMP)</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#3ddbb0]" />
            <span>MUDRA (TRADING PIT)</span>
          </div>
        </div>
      </div>

      {/* Two Infinite Marquee Text Bands (Moving in opposite directions) */}
      <div className="relative w-full overflow-hidden mt-12 py-3 border-y border-[#1f3a56] bg-[#0f2236]/60 backdrop-blur-sm">
        {/* Band 1: Moving Left */}
        <div className="overflow-hidden py-1.5">
          <div className="animate-marquee-left flex items-center whitespace-nowrap text-xs sm:text-sm font-heading font-bold tracking-widest text-[#f5b83d]">
            <span className="mx-6">★ WELCOME TO VENTUREVERSE</span>
            <span className="mx-6 text-[#93a8bd]">★ PITCH TO REAL VCs</span>
            <span className="mx-6 text-[#3ddbb0]">★ WALL STREET SIMULATIONS</span>
            <span className="mx-6 text-[#ff6b57]">★ CORPORATE COUTURE RAMP WALK</span>
            <span className="mx-6">★ VENTURECRAFT 2026</span>
            <span className="mx-6 text-[#93a8bd]">★ ₹30,000 CASH PRIZES</span>
            <span className="mx-6">★ WELCOME TO VENTUREVERSE</span>
            <span className="mx-6 text-[#93a8bd]">★ PITCH TO REAL VCs</span>
            <span className="mx-6 text-[#3ddbb0]">★ WALL STREET SIMULATIONS</span>
            <span className="mx-6 text-[#ff6b57]">★ CORPORATE COUTURE RAMP WALK</span>
            <span className="mx-6">★ VENTURECRAFT 2026</span>
            <span className="mx-6 text-[#93a8bd]">★ ₹30,000 CASH PRIZES</span>
          </div>
        </div>

        {/* Band 2: Moving Right */}
        <div className="overflow-hidden py-1.5 border-t border-[#1f3a56]/40">
          <div className="animate-marquee-right flex items-center whitespace-nowrap text-xs sm:text-sm font-mono tracking-widest text-[#3ddbb0]">
            <span className="mx-6">▲ NASDAQ: $VCRAFT +32.8%</span>
            <span className="mx-6 text-[#e8eef4]">▲ SEED CAPITAL READY</span>
            <span className="mx-6 text-[#f5b83d]">▲ STAGE ILLUMINATION AT 100%</span>
            <span className="mx-6 text-[#ff6b57]">▲ RUNWAY CALL: KARVAN READY</span>
            <span className="mx-6 text-[#93a8bd]">▲ MUDRA SPREADS TIGHTENING</span>
            <span className="mx-6">▲ NASDAQ: $VCRAFT +32.8%</span>
            <span className="mx-6 text-[#e8eef4]">▲ SEED CAPITAL READY</span>
            <span className="mx-6 text-[#f5b83d]">▲ STAGE ILLUMINATION AT 100%</span>
            <span className="mx-6 text-[#ff6b57]">▲ RUNWAY CALL: KARVAN READY</span>
            <span className="mx-6 text-[#93a8bd]">▲ MUDRA SPREADS TIGHTENING</span>
          </div>
        </div>
      </div>
    </section>
  );
}
