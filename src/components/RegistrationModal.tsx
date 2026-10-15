"use client";

import { useEffect } from "react";
import { X, CheckCircle2, Mail, ExternalLink, Sparkles, TrendingUp, CandlestickChart } from "lucide-react";
import { FEST_EVENTS } from "@/types";
import confetti from "canvas-confetti";

interface RegistrationModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedEventId?: string | null;
}

export default function RegistrationModal({
  isOpen,
  onClose,
  selectedEventId,
}: RegistrationModalProps) {
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

  const triggerCelebration = (eventName: string) => {
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 },
      colors: ["#f5b83d", "#3ddbb0", "#ff6b57", "#ffffff"],
    });
  };

  const renderIcon = (iconName: string) => {
    switch (iconName) {
      case "TrendingUp":
        return <TrendingUp className="w-5 h-5 text-[#f5b83d]" />;
      case "Sparkles":
        return <Sparkles className="w-5 h-5 text-[#ff6b57]" />;
      case "CandlestickChart":
        return <CandlestickChart className="w-5 h-5 text-[#3ddbb0]" />;
      default:
        return <Sparkles className="w-5 h-5 text-[#f5b83d]" />;
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-[#07131f]/85 backdrop-blur-md transition-opacity duration-300"
        onClick={onClose}
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-[#0f2236] border border-[#1f3a56] rounded-2xl p-6 sm:p-8 shadow-[0_20px_60px_rgba(0,0,0,0.8)] z-10 my-auto text-[#e8eef4]">
        {/* Header */}
        <div className="flex items-start justify-between border-b border-[#1f3a56] pb-5 mb-6">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="inline-block w-2.5 h-2.5 rounded-full bg-[#f5b83d] animate-ping" />
              <span className="text-xs uppercase tracking-wider font-mono text-[#f5b83d] font-semibold">
                Official Registration Portal
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold font-heading text-[#e8eef4]">
              Claim Your Spot in the <span className="text-[#f5b83d]">VentureVerse</span>
            </h2>
            <p className="text-sm text-[#93a8bd] mt-1">
              Select your event below. Quick 1-click registration via email or replace with your Google Form URL.
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl border border-[#1f3a56] bg-[#07131f] hover:bg-[#152d47] text-[#93a8bd] hover:text-[#e8eef4] transition-colors"
            aria-label="Close registration modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* 3 Event Registration Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-8">
          {FEST_EVENTS.map((event) => {
            const isHighlighted = selectedEventId === event.id;
            // Configurable registration target: mailto default, easily swappable with Google Form URL
            const mailtoSubject = encodeURIComponent(`Registration Request: ${event.name} - VentureCraft 2026`);
            const mailtoBody = encodeURIComponent(
              `Hello VentureCraft Team,\n\nI want to register for ${event.name}.\n\nLead Participant Name:\nCollege/Institution:\nContact Phone:\nTeam Member Names (if applicable):\nStartup/Portfolio/Theme Name:\n\nThank you!`
            );
            const registerLink = `mailto:venturecraft2025@gmail.com?subject=${mailtoSubject}&body=${mailtoBody}`;

            return (
              <div
                key={event.id}
                className={`relative flex flex-col justify-between rounded-xl p-5 border transition-all duration-300 ${
                  isHighlighted
                    ? "bg-[#152d47] border-[#f5b83d] shadow-[0_0_25px_rgba(245,184,61,0.25)]"
                    : "bg-[#07131f]/70 border-[#1f3a56] hover:border-[#93a8bd]/40 hover:bg-[#12283e]"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="p-2.5 rounded-lg bg-[#0f2236] border border-[#1f3a56]">
                      {renderIcon(event.iconName)}
                    </div>
                    <span
                      className="text-xs font-mono px-2 py-0.5 rounded-full border"
                      style={{
                        borderColor: event.accentBorder,
                        color: event.accentColor,
                        backgroundColor: `${event.accentColor}15`,
                      }}
                    >
                      {event.teamSize}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold font-heading text-[#e8eef4] mb-1">
                    {event.name}
                  </h3>
                  <p className="text-xs text-[#93a8bd] font-mono mb-3">
                    {event.category}
                  </p>

                  <p className="text-xs text-[#e8eef4]/80 leading-relaxed mb-4">
                    {event.description}
                  </p>

                  <div className="mb-4 pt-3 border-t border-[#1f3a56]/60">
                    <span className="text-[11px] uppercase tracking-wider text-[#93a8bd] font-mono block">
                      Prize Pool
                    </span>
                    <span
                      className="text-sm font-bold font-mono"
                      style={{ color: event.accentColor }}
                    >
                      {event.prizePool}
                    </span>
                  </div>

                  <div className="space-y-1.5 mb-6 text-xs text-[#93a8bd]">
                    {event.rules.slice(0, 2).map((rule, idx) => (
                      <div key={idx} className="flex items-start gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#3ddbb0] shrink-0 mt-0.5" />
                        <span>{rule}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <a
                  href={registerLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => triggerCelebration(event.name)}
                  className="w-full py-2.5 px-4 rounded-lg font-heading font-semibold text-xs tracking-wider uppercase flex items-center justify-center gap-2 transition-all duration-200"
                  style={{
                    backgroundColor: event.accentColor,
                    color: "#07131f",
                    boxShadow: `0 4px 15px ${event.accentGlow}`,
                  }}
                >
                  <Mail className="w-4 h-4" />
                  <span>Register via Mail</span>
                  <ExternalLink className="w-3.5 h-3.5 opacity-70" />
                </a>
              </div>
            );
          })}
        </div>

        {/* Note / Google Form Customizer Box */}
        <div className="rounded-xl border border-[#1f3a56] bg-[#07131f]/50 p-4 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#93a8bd]">
          <div className="flex items-center gap-2">
            <span className="text-[#f5b83d] font-bold font-mono">PRO TIP:</span>
            <span>
              Direct email to <strong className="text-[#e8eef4]">venturecraft2025@gmail.com</strong> with your credentials. Easy to swap for a Google Form link in <code className="text-[#3ddbb0]">RegistrationModal.tsx</code>.
            </span>
          </div>
          <button
            onClick={onClose}
            className="text-xs underline text-[#e8eef4] hover:text-[#f5b83d] shrink-0"
          >
            Back to site
          </button>
        </div>
      </div>
    </div>
  );
}
