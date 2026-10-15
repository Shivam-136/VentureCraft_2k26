"use client";

import { useEffect, useState } from "react";

interface PreloaderProps {
  onComplete: () => void;
}

export default function Preloader({ onComplete }: PreloaderProps) {
  const [percent, setPercent] = useState(0);
  const [isFinishing, setIsFinishing] = useState(false);
  const [isGone, setIsGone] = useState(false);

  useEffect(() => {
    const duration = 2200; // 2.2 seconds total load
    const intervalTime = 25;
    const steps = duration / intervalTime;
    let stepCount = 0;

    const timer = setInterval(() => {
      stepCount++;
      const nextVal = Math.min(100, Math.round((stepCount / steps) * 100));
      setPercent(nextVal);

      if (nextVal >= 100) {
        clearInterval(timer);
        setTimeout(() => {
          setIsFinishing(true);
          setTimeout(() => {
            setIsGone(true);
            onComplete();
          }, 850);
        }, 200);
      }
    }, intervalTime);

    return () => clearInterval(timer);
  }, [onComplete]);

  if (isGone) return null;

  return (
    <div className="fixed inset-0 z-[999] pointer-events-none select-none overflow-hidden">
      {/* Top Curtain Panel */}
      <div
        className={`absolute inset-x-0 top-0 h-1/2 bg-[#07131f] border-b border-[#1f3a56] transition-transform duration-700 ease-[cubic-bezier(0.85,0,0.15,1)] ${
          isFinishing ? "-translate-y-full" : "translate-y-0"
        }`}
      />

      {/* Bottom Curtain Panel */}
      <div
        className={`absolute inset-x-0 bottom-0 h-1/2 bg-[#07131f] border-t border-[#1f3a56] transition-transform duration-700 ease-[cubic-bezier(0.85,0,0.15,1)] ${
          isFinishing ? "translate-y-full" : "translate-y-0"
        }`}
      />

      {/* Central Content Box */}
      <div
        className={`absolute inset-0 flex flex-col items-center justify-center p-6 text-center transition-opacity duration-400 ${
          isFinishing ? "opacity-0 scale-95" : "opacity-100 scale-100"
        }`}
      >
        {/* Subtle Financial Grid Ambient */}
        <div className="absolute inset-0 bg-financial-grid opacity-25 pointer-events-none" />

        {/* Brand Tagline */}
        <div className="relative z-10 flex items-center gap-2 mb-3 px-3 py-1 rounded-full border border-[#1f3a56] bg-[#0f2236]/80 backdrop-blur-sm">
          <span className="w-2 h-2 rounded-full bg-[#3ddbb0] animate-pulse" />
          <span className="text-xs uppercase tracking-widest text-[#93a8bd] font-mono">
            LIVE PROTOCOL V2.6 • MARCH 2026
          </span>
        </div>

        <h2 className="relative z-10 text-2xl md:text-4xl font-extrabold tracking-tight text-[#e8eef4] font-heading mb-2">
          Entering the <span className="text-[#f5b83d] drop-shadow-[0_0_20px_rgba(245,184,61,0.5)]">VentureVerse</span>
        </h2>
        <p className="relative z-10 text-xs md:text-sm text-[#93a8bd] max-w-md mb-8 font-mono">
          Initializing capital markets, runway simulators & pitch arena...
        </p>

        {/* Rising Stock Line Drawing SVG Animation */}
        <div className="relative z-10 w-full max-w-md h-24 mb-6 px-4">
          <svg
            className="w-full h-full overflow-visible"
            viewBox="0 0 400 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Grid guidelines */}
            <line x1="0" y1="25" x2="400" y2="25" stroke="#1f3a56" strokeDasharray="3 3" opacity="0.4" />
            <line x1="0" y1="50" x2="400" y2="50" stroke="#1f3a56" strokeDasharray="3 3" opacity="0.4" />
            <line x1="0" y1="75" x2="400" y2="75" stroke="#1f3a56" strokeDasharray="3 3" opacity="0.4" />

            {/* Candlesticks in background */}
            <rect x="50" y="45" width="8" height="25" fill="#3ddbb0" opacity="0.3" rx="1" />
            <line x1="54" y1="35" x2="54" y2="75" stroke="#3ddbb0" opacity="0.4" />

            <rect x="130" y="30" width="8" height="20" fill="#f5b83d" opacity="0.3" rx="1" />
            <line x1="134" y1="20" x2="134" y2="60" stroke="#f5b83d" opacity="0.4" />

            <rect x="220" y="55" width="8" height="15" fill="#ff6b57" opacity="0.3" rx="1" />
            <line x1="224" y1="45" x2="224" y2="80" stroke="#ff6b57" opacity="0.4" />

            <rect x="310" y="20" width="8" height="35" fill="#3ddbb0" opacity="0.3" rx="1" />
            <line x1="314" y1="10" x2="314" y2="65" stroke="#3ddbb0" opacity="0.4" />

            {/* Rising Trendline with dynamic stroke dashoffset based on percent */}
            <path
              d="M 10 85 Q 70 75 120 40 T 220 50 T 320 25 T 390 10"
              stroke="#f5b83d"
              strokeWidth="3.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeDasharray="450"
              strokeDashoffset={450 - (percent / 100) * 450}
              className="drop-shadow-[0_0_12px_rgba(245,184,61,0.8)]"
            />

            {/* Glow dot at current head */}
            <circle
              cx={10 + (380 * percent) / 100}
              cy={85 - (75 * (percent / 100) * (0.8 + 0.2 * Math.sin(percent / 10)))}
              r="4.5"
              fill="#3ddbb0"
              className="drop-shadow-[0_0_8px_#3ddbb0]"
            />
          </svg>
        </div>

        {/* Counter & Progress bar */}
        <div className="relative z-10 w-full max-w-xs">
          <div className="flex items-center justify-between text-xs font-mono mb-2">
            <span className="text-[#93a8bd]">INDEX: $VCRAFT</span>
            <span className="text-[#f5b83d] font-bold text-lg">{percent}%</span>
          </div>

          <div className="h-1.5 w-full bg-[#0f2236] rounded-full overflow-hidden border border-[#1f3a56]">
            <div
              className="h-full bg-gradient-to-r from-[#f5b83d] via-[#3ddbb0] to-[#f5b83d] rounded-full transition-all duration-75 ease-out shadow-[0_0_10px_#f5b83d]"
              style={{ width: `${percent}%` }}
            />
          </div>

          <div className="flex justify-between items-center mt-3 text-[10px] text-[#93a8bd]/70 font-mono">
            <span>STARTUP PITCH</span>
            <span>RAMP WALK</span>
            <span>MOCK TRADING</span>
          </div>
        </div>
      </div>
    </div>
  );
}
