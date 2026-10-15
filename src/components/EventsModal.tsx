"use client";

import { useEffect, useState } from "react";
import { X, Calendar, Users, Trophy, ArrowRight, TrendingUp, Sparkles, CandlestickChart } from "lucide-react";
import { FEST_EVENTS } from "@/types";

interface EventsModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenRegister: (eventId?: string) => void;
}

export default function EventsModal({
  isOpen,
  onClose,
  onOpenRegister,
}: EventsModalProps) {
  const [activeTab, setActiveTab] = useState(0);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const currentEvent = FEST_EVENTS[activeTab];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-[#07131f]/85 backdrop-blur-md transition-opacity duration-300"
        onClick={onClose}
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-[#0f2236] border border-[#1f3a56] rounded-2xl p-6 sm:p-8 shadow-[0_20px_60px_rgba(0,0,0,0.8)] z-10 my-auto text-[#e8eef4]">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-[#1f3a56] pb-4 mb-6">
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-[#3ddbb0]" />
            <h2 className="text-xl sm:text-2xl font-extrabold font-heading text-[#e8eef4]">
              VentureCraft 2026 <span className="text-[#3ddbb0]">Events</span>
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl border border-[#1f3a56] bg-[#07131f] hover:bg-[#152d47] text-[#93a8bd] hover:text-[#e8eef4] transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Navigation Tabs */}
        <div className="grid grid-cols-3 gap-2 p-1.5 bg-[#07131f] rounded-xl border border-[#1f3a56] mb-6">
          {FEST_EVENTS.map((item, idx) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(idx)}
              className={`py-2 px-3 rounded-lg text-xs font-heading font-medium transition-all ${
                activeTab === idx
                  ? "bg-[#0f2236] text-[#e8eef4] border border-[#1f3a56] shadow-md"
                  : "text-[#93a8bd] hover:text-[#e8eef4]"
              }`}
            >
              {item.name}
            </button>
          ))}
        </div>

        {/* Selected Event Details Card */}
        <div className="bg-[#07131f]/70 border border-[#1f3a56] rounded-xl p-6 mb-6">
          <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
            <div>
              <span
                className="text-xs font-mono font-semibold uppercase tracking-wider px-2.5 py-0.5 rounded-full border"
                style={{
                  color: currentEvent.accentColor,
                  borderColor: currentEvent.accentBorder,
                  backgroundColor: `${currentEvent.accentColor}10`,
                }}
              >
                {currentEvent.category}
              </span>
              <h3 className="text-2xl font-extrabold font-heading text-[#e8eef4] mt-2">
                {currentEvent.name}
              </h3>
              <p className="text-sm text-[#93a8bd] font-mono">
                {currentEvent.tagline}
              </p>
            </div>

            <div className="text-right">
              <span className="text-xs uppercase text-[#93a8bd] block font-mono">
                Prize Pool
              </span>
              <span
                className="text-lg font-bold font-mono"
                style={{ color: currentEvent.accentColor }}
              >
                {currentEvent.prizePool}
              </span>
            </div>
          </div>

          <p className="text-sm text-[#e8eef4]/90 leading-relaxed mb-6">
            {currentEvent.longDescription}
          </p>

          {/* Quick Metrics */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6 font-mono text-xs text-[#93a8bd]">
            <div className="flex items-center gap-2 p-2.5 rounded-lg bg-[#0f2236] border border-[#1f3a56]">
              <Calendar className="w-4 h-4 text-[#f5b83d]" />
              <span>{currentEvent.timing}</span>
            </div>
            <div className="flex items-center gap-2 p-2.5 rounded-lg bg-[#0f2236] border border-[#1f3a56]">
              <Users className="w-4 h-4 text-[#3ddbb0]" />
              <span>Team: {currentEvent.teamSize}</span>
            </div>
          </div>

          {/* Perks & Rules */}
          <div className="space-y-2 mb-6">
            <h4 className="text-xs font-mono uppercase tracking-wider text-[#93a8bd]">
              Key Highlights:
            </h4>
            <ul className="space-y-1.5 text-xs text-[#e8eef4]">
              {currentEvent.perks.map((perk, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-[#3ddbb0] font-bold">✓</span>
                  <span>{perk}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-[#1f3a56]">
            <button
              onClick={() => {
                onClose();
                onOpenRegister(currentEvent.id);
              }}
              className="flex-1 py-3 px-5 rounded-lg font-heading font-semibold text-xs tracking-wider uppercase flex items-center justify-center gap-2 transition-transform hover:scale-[1.02]"
              style={{
                backgroundColor: currentEvent.accentColor,
                color: "#07131f",
              }}
            >
              <span>Register for {currentEvent.name}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <a
              href="#domains-section"
              onClick={onClose}
              className="py-3 px-5 rounded-lg border border-[#1f3a56] hover:bg-[#152d47] text-xs font-mono text-center text-[#e8eef4] transition-colors"
            >
              View on Page
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
