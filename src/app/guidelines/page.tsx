"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import RegistrationModal from "@/components/RegistrationModal";
import EventsModal from "@/components/EventsModal";
import { ArrowLeft, ShieldAlert, CheckCircle2, HelpCircle, ChevronDown } from "lucide-react";
import Link from "next/link";
import { FEST_EVENTS } from "@/types";

export default function GuidelinesPage() {
  const [regModalOpen, setRegModalOpen] = useState(false);
  const [eventsModalOpen, setEventsModalOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const faqs = [
    {
      q: "Can students from different colleges form a mixed team?",
      a: "Yes! Cross-college and interdisciplinary collaborations are fully permitted across all three events (Venture Craft, Karvan, and Mudra).",
    },
    {
      q: "Is there any registration fee for VentureCraft 2026?",
      a: "Registration is 100% free for all qualified participants in the 2026 edition. Shortlisting is based on proposal quality, portfolio, and prompt submission.",
    },
    {
      q: "Can an individual participate in more than one event?",
      a: "Yes, provided the event schedules do not conflict. Venture Craft and Karvan take place on Day 1, while Mudra takes place on Day 2.",
    },
    {
      q: "What hardware or software do we need for the Mudra trading simulation?",
      a: "A personal laptop with Chrome or Safari and stable Wi-Fi. All trading terminals and virtual accounts are browser-based and provided on the spot.",
    },
    {
      q: "How does Karvan provide wardrobe and music support?",
      a: "Teams bring their own curated wardrobe according to the corporate boardroom theme. High-definition stage audio and lighting cues will be managed by our tech crew based on your sound file.",
    },
  ];

  return (
    <main className="min-h-screen bg-[#07131f] text-[#e8eef4]">
      <Navbar
        onOpenRegister={() => setRegModalOpen(true)}
        onOpenEvents={() => setEventsModalOpen(true)}
      />

      <div className="pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs font-mono text-[#93a8bd] hover:text-[#f5b83d] transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>BACK TO VENTUREVERSE</span>
        </Link>

        {/* Header */}
        <div className="mb-16 pb-6 border-b border-[#1f3a56]">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#f5b83d] block mb-2">
            // CODE OF CONDUCT & RULES
          </span>
          <h1 className="text-4xl sm:text-6xl font-black font-heading text-[#e8eef4]">
            OFFICIAL <span className="text-[#f5b83d]">GUIDELINES</span>
          </h1>
          <p className="max-w-2xl text-sm text-[#93a8bd] font-mono mt-3">
            Read the rules, judging rubrics, and protocol standards for VentureCraft 2026.
          </p>
        </div>

        {/* General Eligibility */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div className="p-6 rounded-2xl bg-[#0f2236] border border-[#1f3a56]">
            <h3 className="text-base font-bold font-heading text-[#f5b83d] mb-2">
              01. Eligibility
            </h3>
            <p className="text-xs text-[#93a8bd] leading-relaxed">
              Open to all undergraduate, postgraduate, and diploma students with valid college ID cards. Founders who graduated within the last 12 months are eligible for Venture Craft.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[#0f2236] border border-[#1f3a56]">
            <h3 className="text-base font-bold font-heading text-[#3ddbb0] mb-2">
              02. Originality & Integrity
            </h3>
            <p className="text-xs text-[#93a8bd] leading-relaxed">
              All pitch decks and proprietary models must be original. Plagiarism or unfair automated scraping in the Mudra trading pit will result in immediate disqualification.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[#0f2236] border border-[#1f3a56]">
            <h3 className="text-base font-bold font-heading text-[#ff6b57] mb-2">
              03. Jury Decision
            </h3>
            <p className="text-xs text-[#93a8bd] leading-relaxed">
              The decisions of the respective juries across Venture Craft, Karvan, and Mudra are final and binding. Scores will be tabulated under independent oversight.
            </p>
          </div>
        </div>

        {/* Event Specific Rulebook */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold font-heading text-[#e8eef4] mb-6">
            Domain-Specific Rulebooks
          </h2>
          <div className="space-y-4">
            {FEST_EVENTS.map((event) => (
              <div
                key={event.id}
                className="p-6 rounded-2xl bg-[#0f2236] border border-[#1f3a56]"
              >
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-bold font-heading text-[#e8eef4]">
                    {event.name} Rulebook
                  </h3>
                  <span
                    className="text-xs font-mono font-semibold px-2.5 py-0.5 rounded-full border"
                    style={{
                      borderColor: event.accentBorder,
                      color: event.accentColor,
                    }}
                  >
                    {event.teamSize}
                  </span>
                </div>
                <p className="text-xs text-[#93a8bd] mb-4 font-mono">
                  Timing: {event.timing} | Category: {event.category}
                </p>
                <ul className="space-y-2 text-xs text-[#e8eef4]">
                  {event.rules.map((r, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle2
                        className="w-4 h-4 shrink-0 mt-0.5"
                        style={{ color: event.accentColor }}
                      />
                      <span>{r}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ Accordion */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold font-heading text-[#e8eef4] mb-6">
            Frequently Asked Questions
          </h2>
          <div className="space-y-3">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="rounded-2xl bg-[#0f2236] border border-[#1f3a56] overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 font-heading text-sm font-semibold text-[#e8eef4] hover:text-[#f5b83d] transition-colors"
                >
                  <span className="flex items-center gap-3">
                    <HelpCircle className="w-4 h-4 text-[#f5b83d] shrink-0" />
                    <span>{faq.q}</span>
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-[#93a8bd] transition-transform ${
                      openFaq === idx ? "rotate-180 text-[#f5b83d]" : ""
                    }`}
                  />
                </button>
                {openFaq === idx && (
                  <div className="px-5 pb-5 text-xs text-[#93a8bd] leading-relaxed border-t border-[#1f3a56]/60 pt-3">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer
        onOpenRegister={() => setRegModalOpen(true)}
        onOpenEvents={() => setEventsModalOpen(true)}
      />

      <RegistrationModal
        isOpen={regModalOpen}
        onClose={() => setRegModalOpen(false)}
      />

      <EventsModal
        isOpen={eventsModalOpen}
        onClose={() => setEventsModalOpen(false)}
        onOpenRegister={() => {
          setEventsModalOpen(false);
          setRegModalOpen(true);
        }}
      />
    </main>
  );
}
