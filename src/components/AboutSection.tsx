"use client";

import { useEffect, useRef, useState } from "react";
import {
  TrendingUp,
  Sparkles,
  Award,
  Users,
  Compass,
  CheckCircle2,
  DollarSign,
  Layers,
  ArrowRight,
} from "lucide-react";

export default function AboutSection({
  onOpenRegister,
}: {
  onOpenRegister: () => void;
}) {
  const [hasAnimated, setHasAnimated] = useState(false);
  const [countEvents, setCountEvents] = useState(0);
  const [countStage, setCountStage] = useState(0);
  const [countYear, setCountYear] = useState(1990);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);

          // Animate 3 events
          let cE = 0;
          const timerE = setInterval(() => {
            cE++;
            setCountEvents(cE);
            if (cE >= 3) clearInterval(timerE);
          }, 120);

          // Animate 1 stage
          let cS = 0;
          const timerS = setInterval(() => {
            cS++;
            setCountStage(cS);
            if (cS >= 1) clearInterval(timerS);
          }, 200);

          // Animate 2026
          let cY = 2000;
          const timerY = setInterval(() => {
            cY += 1;
            setCountYear(cY);
            if (cY >= 2026) {
              setCountYear(2026);
              clearInterval(timerY);
            }
          }, 20);
        }
      },
      { threshold: 0.25 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, [hasAnimated]);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative py-28 px-4 sm:px-6 lg:px-8 bg-[#07131f] border-t border-[#1f3a56]/60 select-none overflow-hidden"
    >
      {/* Background radial glows */}
      <div className="absolute top-1/3 right-10 w-96 h-96 rounded-full bg-[#f5b83d]/10 blur-[130px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 rounded-full bg-[#3ddbb0]/10 blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-[#1f3a56]">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#f5b83d]">
                04 // ABOUT THE FEST
              </span>
              <span className="w-12 h-[1px] bg-[#f5b83d]" />
            </div>
            <h2 className="text-3xl sm:text-5xl font-black font-heading tracking-tight text-[#e8eef4]">
              THE ARCHITECTURE OF <span className="text-[#f5b83d]">VENTURECRAFT</span>
            </h2>
          </div>
          <p className="max-w-md text-sm text-[#93a8bd] font-mono mt-4 md:mt-0">
            A radical synthesis of financial discipline, venture acceleration, and executive haute couture.
          </p>
        </div>

        {/* Animated Counters Grid (Explicitly required: 3 events, 1 stage, 2026) */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-16">
          {/* Counter 1: 3 Flagship Events */}
          <div className="relative p-7 rounded-2xl bg-[#0f2236] border border-[#1f3a56] hover:border-[#f5b83d] transition-all group shadow-lg">
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-mono uppercase tracking-widest text-[#93a8bd]">
                FLAGSHIP ARENAS
              </span>
              <div className="p-2 rounded-lg bg-[#07131f] text-[#f5b83d]">
                <Layers className="w-5 h-5" />
              </div>
            </div>
            <div className="text-5xl sm:text-6xl font-black font-heading text-[#f5b83d] mb-2 group-hover:scale-105 transition-transform">
              {countEvents}
            </div>
            <p className="text-sm font-semibold text-[#e8eef4] mb-1">
              Events Engineered for Disruptors
            </p>
            <p className="text-xs text-[#93a8bd] font-mono">
              Venture Craft, Karvan, Mudra
            </p>
          </div>

          {/* Counter 2: 1 Stage */}
          <div className="relative p-7 rounded-2xl bg-[#0f2236] border border-[#1f3a56] hover:border-[#3ddbb0] transition-all group shadow-lg">
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-mono uppercase tracking-widest text-[#93a8bd]">
                COLISEUM EXPERIENCE
              </span>
              <div className="p-2 rounded-lg bg-[#07131f] text-[#3ddbb0]">
                <Sparkles className="w-5 h-5" />
              </div>
            </div>
            <div className="text-5xl sm:text-6xl font-black font-heading text-[#3ddbb0] mb-2 group-hover:scale-105 transition-transform">
              {countStage}
            </div>
            <p className="text-sm font-semibold text-[#e8eef4] mb-1">
              Grand Stage for the VentureVerse
            </p>
            <p className="text-xs text-[#93a8bd] font-mono">
              Unified arena for pitches, runway & trading
            </p>
          </div>

          {/* Counter 3: 2026 */}
          <div className="relative p-7 rounded-2xl bg-[#0f2236] border border-[#1f3a56] hover:border-[#ff6b57] transition-all group shadow-lg">
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-mono uppercase tracking-widest text-[#93a8bd]">
                EDITION CALENDAR
              </span>
              <div className="p-2 rounded-lg bg-[#07131f] text-[#ff6b57]">
                <Award className="w-5 h-5" />
              </div>
            </div>
            <div className="text-5xl sm:text-6xl font-black font-heading text-[#ff6b57] mb-2 group-hover:scale-105 transition-transform">
              {countYear}
            </div>
            <p className="text-sm font-semibold text-[#e8eef4] mb-1">
              The Year of Exponential Ventures
            </p>
            <p className="text-xs text-[#93a8bd] font-mono">
              Celebrating innovation & boardroom leadership
            </p>
          </div>
        </div>

        {/* Narrative & Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          {/* Main Story Panel */}
          <div className="lg:col-span-7 rounded-2xl bg-[#0f2236] border border-[#1f3a56] p-8 flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#07131f] border border-[#1f3a56] text-xs font-mono text-[#f5b83d] mb-6">
                <span>OUR ETHOS</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold font-heading text-[#e8eef4] mb-4">
                Beyond Standard College Fests: A Catalyst for Tomorrow’s Leaders
              </h3>
              <p className="text-sm text-[#93a8bd] leading-relaxed mb-4">
                VentureCraft 2026 was conceived to dissolve the false boundaries between sharp financial modeling, brave venture incubation, and commanding aesthetic presence.
              </p>
              <p className="text-sm text-[#93a8bd] leading-relaxed mb-6">
                Whether you are defending your cap table against angel syndicates in <strong className="text-[#f5b83d]">Venture Craft</strong>, setting the tempo down the runway in tailored power silks during <strong className="text-[#ff6b57]">Karvan</strong>, or executing derivatives arbitrages under high volatility in <strong className="text-[#3ddbb0]">Mudra</strong> — this is your ground to conquer.
              </p>

              <div className="grid grid-cols-2 gap-3 pt-4 border-t border-[#1f3a56]/80 text-xs text-[#e8eef4] font-mono">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#3ddbb0]" />
                  <span>Real Angel Term-Sheets</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#3ddbb0]" />
                  <span>Pan-India Collegiate Talent</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#3ddbb0]" />
                  <span>₹30,000 Prize Pool</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#3ddbb0]" />
                  <span>Industry Mentorship</span>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-[#1f3a56]">
              <button
                onClick={onOpenRegister}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#f5b83d] text-[#07131f] font-heading font-bold text-xs uppercase tracking-wider hover:bg-[#ffc857] transition-all"
              >
                <span>Join the Arena</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Secondary Bento Grid Cards */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            {/* Card 1: Prize Pool */}
            <div className="rounded-2xl bg-gradient-to-br from-[#0f2236] to-[#152d47] border border-[#1f3a56] p-6">
              <span className="text-xs font-mono uppercase text-[#3ddbb0] font-bold block mb-1">
                COMBINED PRIZE VAULT
              </span>
              <div className="text-3xl sm:text-4xl font-extrabold font-mono text-[#e8eef4] mb-2">
                ₹30,000
              </div>
              <p className="text-xs text-[#93a8bd]">
                Cash prizes and rewards for VentureCraft 2K26 participants.
              </p>
            </div>

            {/* Card 2: Networking */}
            <div className="rounded-2xl bg-[#0f2236] border border-[#1f3a56] p-6 flex-1 flex flex-col justify-between">
              <div>
                <span className="text-xs font-mono uppercase text-[#f5b83d] font-bold block mb-1">
                  INDUSTRY CONNECT
                </span>
                <h4 className="text-lg font-bold font-heading text-[#e8eef4] mb-2">
                  Meet Real Angels, Stylists & Quant Analysts
                </h4>
                <p className="text-xs text-[#93a8bd]">
                  Network directly with fund managers, venture scouts, and runway choreographers who judge and curate every segment.
                </p>
              </div>

              <div className="flex items-center gap-3 pt-4 border-t border-[#1f3a56]/60 text-xs font-mono text-[#93a8bd]">
                <Users className="w-4 h-4 text-[#f5b83d]" />
                <span>2,500+ Expected Delegates & Viewers</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
