"use client";

import { useState } from "react";
import {
  Volume2,
  VolumeX,
  Play,
  Pause,
  ChevronDown,
  Sparkles,
  Maximize2,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

export default function HighlightsSection() {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [activeSlide, setActiveSlide] = useState(0);

  const highlightMoments = [
    {
      title: "The Grand Angel Pitch Arena",
      domain: "Venture Craft",
      year: "2024 Retrospective",
      desc: "Over 45 college-founded startups pitched to tier-1 seed investors, leading to 3 term-sheet offers on spot.",
      metric: "₹40 Lakhs Seed Inquiries",
      color: "#f5b83d",
    },
    {
      title: "High-Voltage Corporate Runway",
      domain: "Karvan",
      year: "2024 Retrospective",
      desc: "12 elite college troupes brought futuristic boardroom couture under dynamic laser spotlights.",
      metric: "1,200+ Live Audience",
      color: "#ff6b57",
    },
    {
      title: "Real-Time Volatility Trading Pit",
      domain: "Mudra",
      year: "2024 Retrospective",
      desc: "Intense 4-hour mock equity sprint simulating macroeconomic rate hikes and circuit breakers.",
      metric: "80,000+ Mock Trades Placed",
      color: "#3ddbb0",
    },
  ];

  return (
    <section className="relative py-28 px-4 sm:px-6 lg:px-8 bg-[#07131f] border-t border-[#1f3a56]/60 select-none overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#3ddbb0]">
                // THE ARCHIVES & EXPERIENCE
              </span>
              <span className="w-12 h-[1px] bg-[#3ddbb0]" />
            </div>
            <h2 className="text-3xl sm:text-5xl font-black font-heading tracking-tight text-[#e8eef4]">
              THE VENTUREVERSE <span className="text-[#3ddbb0]">ENERGY</span>
            </h2>
          </div>
          <p className="max-w-md text-sm text-[#93a8bd] font-mono mt-4 md:mt-0">
            Immerse yourself in the soundscape, the spotlights, and the electric pitch halls of our legacy editions.
          </p>
        </div>

        {/* Big Video / Experience Container */}
        <div className="relative rounded-3xl overflow-hidden border border-[#1f3a56] bg-[#0c1b2b] shadow-[0_20px_70px_rgba(0,0,0,0.8)] aspect-video max-h-[640px] flex items-center justify-center">
          {/* Simulated Cinematic High-Gloss Ambient Video Canvas */}
          <div className="absolute inset-0 bg-radial-vignette opacity-90" />

          {/* Animated Atmospheric Glow Gradients */}
          <div className={`absolute inset-0 transition-opacity duration-700 ${isPlaying ? "opacity-100" : "opacity-40"}`}>
            <div className="absolute top-1/4 left-1/3 w-96 h-96 rounded-full bg-[#f5b83d]/15 blur-[120px] animate-pulse" />
            <div className="absolute bottom-1/4 right-1/3 w-96 h-96 rounded-full bg-[#3ddbb0]/15 blur-[120px] animate-pulse" style={{ animationDelay: "1s" }} />
          </div>

          {/* Video Mock Graphics / Stock Candlestick Simulation Background */}
          <div className="absolute inset-0 flex items-center justify-center opacity-20 pointer-events-none">
            <div className="w-full h-full bg-financial-grid" />
          </div>

          {/* Center Stage Presentation Content */}
          <div className="relative z-20 text-center px-6 max-w-2xl">
            <span
              className="text-xs font-mono font-bold uppercase tracking-widest px-3 py-1 rounded-full border mb-4 inline-block"
              style={{
                color: highlightMoments[activeSlide].color,
                borderColor: `${highlightMoments[activeSlide].color}50`,
                backgroundColor: `${highlightMoments[activeSlide].color}15`,
              }}
            >
              {highlightMoments[activeSlide].year} • {highlightMoments[activeSlide].domain}
            </span>

            <h3 className="text-2xl sm:text-4xl md:text-5xl font-black font-heading text-[#e8eef4] mb-3">
              {highlightMoments[activeSlide].title}
            </h3>

            <p className="text-xs sm:text-sm text-[#93a8bd] font-sans mb-6 max-w-lg mx-auto leading-relaxed">
              {highlightMoments[activeSlide].desc}
            </p>

            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-xl bg-[#07131f]/90 border border-[#1f3a56] font-mono text-xs text-[#e8eef4]">
              <span className="text-[#93a8bd]">STAT:</span>
              <strong className="text-[#f5b83d] text-sm">
                {highlightMoments[activeSlide].metric}
              </strong>
            </div>
          </div>

          {/* Top Video HUD Controls */}
          <div className="absolute top-6 left-6 right-6 flex items-center justify-between z-30 pointer-events-auto">
            <div className="flex items-center gap-2 bg-[#07131f]/80 backdrop-blur-md px-3 py-1.5 rounded-full border border-[#1f3a56] text-xs font-mono text-[#93a8bd]">
              <span className={`w-2 h-2 rounded-full ${isPlaying ? "bg-[#3ddbb0] animate-ping" : "bg-red-500"}`} />
              <span>{isPlaying ? "LIVE SHOWREEL [REC]" : "PAUSED"}</span>
            </div>

            {/* Unmute Button (Explicitly requested by user) */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => setIsMuted(!isMuted)}
                className="group flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#07131f]/80 hover:bg-[#152d47] backdrop-blur-md border border-[#1f3a56] text-xs font-mono text-[#e8eef4] transition-all hover:scale-105"
                title={isMuted ? "Unmute Audio" : "Mute Audio"}
              >
                {isMuted ? (
                  <>
                    <VolumeX className="w-4 h-4 text-[#ff6b57]" />
                    <span className="hidden sm:inline text-[#93a8bd] group-hover:text-[#e8eef4]">
                      UNMUTE AUDIO
                    </span>
                  </>
                ) : (
                  <>
                    <Volume2 className="w-4 h-4 text-[#3ddbb0]" />
                    <span className="hidden sm:inline text-[#3ddbb0]">
                      AUDIO ACTIVE
                    </span>
                    {/* Equalizer bars animation */}
                    <span className="flex items-end gap-0.5 h-3">
                      <span className="w-0.5 h-3 bg-[#3ddbb0] animate-pulse" />
                      <span className="w-0.5 h-1.5 bg-[#3ddbb0] animate-pulse" style={{ animationDelay: "0.2s" }} />
                      <span className="w-0.5 h-2 bg-[#3ddbb0] animate-pulse" style={{ animationDelay: "0.4s" }} />
                    </span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Bottom HUD Bar & Slide Dots */}
          <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between z-30 pointer-events-auto">
            <div className="flex items-center gap-2">
              <button
                onClick={() => setIsPlaying(!isPlaying)}
                className="p-2.5 rounded-xl bg-[#07131f]/90 hover:bg-[#152d47] border border-[#1f3a56] text-[#e8eef4] transition-all"
                title={isPlaying ? "Pause" : "Play"}
              >
                {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 text-[#f5b83d]" />}
              </button>

              <div className="hidden sm:flex items-center gap-1.5 ml-2">
                {highlightMoments.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveSlide(i)}
                    className={`h-1.5 rounded-full transition-all ${
                      activeSlide === i ? "w-8 bg-[#f5b83d]" : "w-2 bg-[#1f3a56] hover:bg-[#93a8bd]"
                    }`}
                  />
                ))}
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() =>
                  setActiveSlide((prev) =>
                    prev === 0 ? highlightMoments.length - 1 : prev - 1
                  )
                }
                className="p-2.5 rounded-xl bg-[#07131f]/90 hover:bg-[#152d47] border border-[#1f3a56] text-[#93a8bd] hover:text-[#e8eef4] transition-all"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={() =>
                  setActiveSlide((prev) =>
                    prev === highlightMoments.length - 1 ? 0 : prev + 1
                  )
                }
                className="p-2.5 rounded-xl bg-[#07131f]/90 hover:bg-[#152d47] border border-[#1f3a56] text-[#93a8bd] hover:text-[#e8eef4] transition-all"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* "Scroll below" cue (Requested explicitly) */}
        <div className="mt-12 flex flex-col items-center justify-center text-center">
          <a
            href="#about"
            className="group flex flex-col items-center gap-2 text-xs font-mono text-[#93a8bd] hover:text-[#f5b83d] transition-colors"
          >
            <span className="tracking-widest uppercase">
              SCROLL BELOW TO DISCOVER ABOUT US
            </span>
            <div className="w-7 h-7 rounded-full border border-[#1f3a56] group-hover:border-[#f5b83d] flex items-center justify-center transition-colors">
              <ChevronDown className="w-4 h-4 text-[#f5b83d] animate-bounce" />
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
