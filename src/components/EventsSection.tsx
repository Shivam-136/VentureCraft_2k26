"use client";

import { useState } from "react";
import {
  TrendingUp,
  Sparkles,
  CandlestickChart,
  ArrowRight,
  Shield,
  Trophy,
  Users,
  Calendar,
  Layers,
  Check,
} from "lucide-react";
import { FEST_EVENTS, EventItem } from "@/types";

interface EventsSectionProps {
  onOpenRegister: (eventId?: string) => void;
}

export default function EventsSection({ onOpenRegister }: EventsSectionProps) {
  const [activeHoverId, setActiveHoverId] = useState<string>("venture-craft");

  return (
    <section id="domains-section" className="relative py-28 px-4 sm:px-6 lg:px-8 bg-[#07131f] select-none">
      {/* Background Gradients */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-[#f5b83d]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-[#3ddbb0]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-[#1f3a56]">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#f5b83d]">
                // DOMAINS & ARENAS
              </span>
              <span className="w-12 h-[1px] bg-[#f5b83d]" />
            </div>
            <h2 className="text-3xl sm:text-5xl font-black font-heading tracking-tight text-[#e8eef4]">
              THREE FLAGSHIP <span className="text-[#f5b83d]">UNIVERSES</span>
            </h2>
          </div>
          <p className="max-w-md text-sm text-[#93a8bd] font-normal mt-4 md:mt-0 font-mono">
            Hover to expand each arena. From live angel syndicate pitches to high-glam corporate runway and algorithmic trading.
          </p>
        </div>

        {/* 3 Large Interactive Domain Panels (Reference-style accordion/interactive panels) */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {FEST_EVENTS.map((event, index) => {
            const isActive = activeHoverId === event.id;

            return (
              <div
                key={event.id}
                onMouseEnter={() => setActiveHoverId(event.id)}
                className={`group relative rounded-2xl p-7 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] flex flex-col justify-between overflow-hidden border ${
                  isActive
                    ? "bg-[#0f2236] border-[#f5b83d] shadow-[0_20px_50px_rgba(0,0,0,0.6)] lg:scale-[1.02]"
                    : "bg-[#0c1b2b] border-[#1f3a56] hover:border-[#93a8bd]/50 opacity-90"
                }`}
                style={{
                  minHeight: "560px",
                }}
              >
                {/* Visual Ambient Glow inside Card */}
                <div
                  className="absolute -top-24 -right-24 w-60 h-60 rounded-full blur-3xl pointer-events-none transition-opacity duration-500"
                  style={{
                    backgroundColor: event.accentColor,
                    opacity: isActive ? 0.2 : 0.05,
                  }}
                />

                {/* Top Section */}
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-xs font-mono font-bold text-[#93a8bd]">
                      0{index + 1} / DOMAIN
                    </span>
                    <span
                      className="text-xs font-mono font-semibold px-3 py-1 rounded-full border"
                      style={{
                        borderColor: event.accentBorder,
                        color: event.accentColor,
                        backgroundColor: `${event.accentColor}12`,
                      }}
                    >
                      {event.category}
                    </span>
                  </div>

                  {/* Card Main Title */}
                  <h3 className="text-2xl sm:text-3xl font-extrabold font-heading text-[#e8eef4] mb-2 group-hover:text-white transition-colors">
                    {event.name}
                  </h3>

                  <p
                    className="text-xs font-mono uppercase tracking-wider mb-4"
                    style={{ color: event.accentColor }}
                  >
                    {event.tagline}
                  </p>

                  <p className="text-sm text-[#93a8bd] leading-relaxed mb-6">
                    {event.description}
                  </p>

                  {/* Custom Domain Visual Graphic */}
                  <div className="relative w-full h-32 rounded-xl bg-[#07131f] border border-[#1f3a56] p-4 mb-6 flex flex-col justify-center overflow-hidden">
                    {event.id === "venture-craft" && (
                      <div className="relative w-full h-full flex flex-col justify-between">
                        <div className="flex justify-between items-center text-[10px] font-mono text-[#93a8bd]">
                          <span>SEED ELEVATION</span>
                          <span className="text-[#f5b83d]">SERIES A MOCK</span>
                        </div>
                        {/* Interactive Growth Bar */}
                        <div className="space-y-1.5">
                          <div className="flex justify-between text-[11px] font-mono text-[#e8eef4]">
                            <span>PITCH STAGE</span>
                            <span>VALUATION $12M</span>
                          </div>
                          <div className="w-full h-2 bg-[#0f2236] rounded-full overflow-hidden">
                            <div className="h-full bg-gradient-to-r from-[#f5b83d] to-[#ffc857] w-4/5 rounded-full" />
                          </div>
                        </div>
                        <div className="flex items-center gap-2 text-[10px] font-mono text-[#3ddbb0]">
                          <TrendingUp className="w-3 h-3" />
                          <span>VC TERM SHEET SIMULATION READY</span>
                        </div>
                      </div>
                    )}

                    {event.id === "karvan" && (
                      <div className="relative w-full h-full flex flex-col justify-between">
                        <div className="flex justify-between items-center text-[10px] font-mono text-[#93a8bd]">
                          <span>RAMP WALK SPOTLIGHT</span>
                          <span className="text-[#ff6b57]">HIGH GLAMOUR</span>
                        </div>
                        {/* Runway Stage Visualizer */}
                        <div className="relative w-full h-10 flex items-center justify-center">
                          <div className="w-full h-1 bg-gradient-to-r from-transparent via-[#ff6b57] to-transparent" />
                          <div className="absolute w-8 h-8 rounded-full bg-[#ff6b57]/20 border border-[#ff6b57] flex items-center justify-center text-[10px] text-[#ff6b57] font-bold animate-pulse">
                            WALK
                          </div>
                        </div>
                        <div className="flex items-center justify-between text-[10px] font-mono text-[#93a8bd]">
                          <span>EXECUTIVE COUTURE</span>
                          <span className="text-[#ff6b57]">POWER SUITS & DRAPE</span>
                        </div>
                      </div>
                    )}

                    {event.id === "mudra" && (
                      <div className="relative w-full h-full flex flex-col justify-between">
                        <div className="flex justify-between items-center text-[10px] font-mono text-[#93a8bd]">
                          <span>LIVE SPREAD SIMULATOR</span>
                          <span className="text-[#3ddbb0]">ORDER FLOW 100%</span>
                        </div>
                        {/* Candlestick Wave SVG */}
                        <div className="flex items-end justify-between h-10 px-2">
                          <div className="w-2.5 h-6 bg-[#3ddbb0] rounded-sm relative">
                            <div className="absolute -top-1.5 left-1 w-0.5 h-9 bg-[#3ddbb0]" />
                          </div>
                          <div className="w-2.5 h-8 bg-[#3ddbb0] rounded-sm relative">
                            <div className="absolute -top-1 left-1 w-0.5 h-10 bg-[#3ddbb0]" />
                          </div>
                          <div className="w-2.5 h-4 bg-[#ff6b57] rounded-sm relative">
                            <div className="absolute -top-1 left-1 w-0.5 h-6 bg-[#ff6b57]" />
                          </div>
                          <div className="w-2.5 h-7 bg-[#3ddbb0] rounded-sm relative">
                            <div className="absolute -top-2 left-1 w-0.5 h-11 bg-[#3ddbb0]" />
                          </div>
                          <div className="w-2.5 h-9 bg-[#3ddbb0] rounded-sm relative">
                            <div className="absolute -top-1.5 left-1 w-0.5 h-12 bg-[#3ddbb0]" />
                          </div>
                        </div>
                        <div className="flex items-center gap-1.5 text-[10px] font-mono text-[#3ddbb0]">
                          <CandlestickChart className="w-3 h-3" />
                          <span>HIGH-FREQUENCY TRADING PIT</span>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Highlights list */}
                  <div className="space-y-2 mb-6 text-xs text-[#e8eef4]">
                    {event.perks.map((perk, pIdx) => (
                      <div key={pIdx} className="flex items-start gap-2">
                        <Check
                          className="w-4 h-4 shrink-0 mt-0.5"
                          style={{ color: event.accentColor }}
                        />
                        <span className="text-[#93a8bd]">{perk}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Details & Button */}
                <div className="pt-4 border-t border-[#1f3a56]">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <span className="text-[10px] font-mono text-[#93a8bd] uppercase block">
                        PRIZE POOL
                      </span>
                      <span
                        className="text-base font-mono font-bold"
                        style={{ color: event.accentColor }}
                      >
                        {event.prizePool}
                      </span>
                    </div>

                    <div className="text-right">
                      <span className="text-[10px] font-mono text-[#93a8bd] uppercase block">
                        SCHEDULE
                      </span>
                      <span className="text-xs font-mono text-[#e8eef4]">
                        {event.timing.split("-")[0]}
                      </span>
                    </div>
                  </div>

                  <button
                    onClick={() => onOpenRegister(event.id)}
                    className="w-full py-3.5 px-4 rounded-xl font-heading font-bold text-xs tracking-wider uppercase flex items-center justify-center gap-2 transition-all duration-300 hover:scale-[1.02]"
                    style={{
                      backgroundColor: event.accentColor,
                      color: "#07131f",
                      boxShadow: isActive ? `0 8px 25px ${event.accentGlow}` : "none",
                    }}
                  >
                    <span>Register Now</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner with Fast Registration Prompt */}
        <div className="mt-12 p-6 rounded-2xl bg-gradient-to-r from-[#0f2236] via-[#152d47] to-[#0f2236] border border-[#1f3a56] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-[#f5b83d]/20 border border-[#f5b83d]/40 flex items-center justify-center text-[#f5b83d] font-bold text-lg font-heading">
              VC
            </div>
            <div>
              <h4 className="font-heading font-bold text-base text-[#e8eef4]">
                Want to participate across multiple domains?
              </h4>
              <p className="text-xs text-[#93a8bd] font-mono">
                You can register a team for Venture Craft and also compete in Mudra or Karvan!
              </p>
            </div>
          </div>

          <button
            onClick={() => onOpenRegister()}
            className="px-6 py-3 rounded-xl bg-[#f5b83d] text-[#07131f] font-heading font-bold text-xs tracking-wider uppercase shadow-[0_0_20px_rgba(245,184,61,0.4)] hover:scale-105 transition-all shrink-0"
          >
            Open All Registrations
          </button>
        </div>
      </div>
    </section>
  );
}
