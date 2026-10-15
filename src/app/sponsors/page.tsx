"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import RegistrationModal from "@/components/RegistrationModal";
import EventsModal from "@/components/EventsModal";
import { ArrowLeft, Check, Download, Mail, ExternalLink, Sparkles } from "lucide-react";
import Link from "next/link";

export default function SponsorsPage() {
  const [regModalOpen, setRegModalOpen] = useState(false);
  const [eventsModalOpen, setEventsModalOpen] = useState(false);

  const tiers = [
    {
      tier: "TITLE SPONSOR (TITAN)",
      amount: "₹5,00,000+",
      color: "#f5b83d",
      perks: [
        "Exclusive naming rights: 'Brand Presents VentureCraft 2026'",
        "Keynote address during opening ceremony & pitch arena jury seat",
        "Full brand showcase during Karvan runway & backdrop branding",
        "Direct access to top 50 startup pitch decks & resume database",
        "Prime on-campus stall with interactive exhibition space",
      ],
    },
    {
      tier: "POWERED BY (VENTURE PARTNER)",
      amount: "₹2,50,000",
      color: "#3ddbb0",
      perks: [
        "Co-branded partner across all marketing collaterals",
        "Dedicated segment in Mudra trading lab or Venture Craft",
        "Jury panel representation in 2 flagship events",
        "Exclusive social media spotlight & press release coverage",
        "Custom activation booth inside the main auditorium",
      ],
    },
    {
      tier: "ASSOCIATE & TECH PARTNER",
      amount: "₹1,00,000",
      color: "#ff6b57",
      perks: [
        "Branding on student badges, passes, and event merchandise",
        "Product integration or platform usage in simulation rounds",
        "Recruitment & talent discovery access across 2,500+ participants",
        "Digital banners on live ticker and stream broadcast",
      ],
    },
  ];

  const currentPartners = [
    { name: "Apex Capital Ventures", category: "Venture Capital Partner", color: "#f5b83d" },
    { name: "Stellar Quantitative Fund", category: "Algorithmic Trading Partner", color: "#3ddbb0" },
    { name: "Maison Haute Couture", category: "Runway Fashion Partner", color: "#ff6b57" },
    { name: "FinTech Pulse Labs", category: "Incubation Partner", color: "#f5b83d" },
    { name: "NextGen Cloud Systems", category: "Cloud & Infrastructure Partner", color: "#3ddbb0" },
    { name: "Vogue Executive Suiting", category: "Wardrobe Partner", color: "#ff6b57" },
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
            // ALLIANCES & CAPITAL SPONSORS
          </span>
          <h1 className="text-4xl sm:text-6xl font-black font-heading text-[#e8eef4]">
            PARTNERS & <span className="text-[#f5b83d]">SPONSORS</span>
          </h1>
          <p className="max-w-2xl text-sm text-[#93a8bd] font-mono mt-3">
            Powering young founders, traders, and creative leaders. Collaborate with VentureCraft 2026 to elevate your brand presence.
          </p>
        </div>

        {/* Existing Partners Grid */}
        <div className="mb-20">
          <h2 className="text-xs font-mono uppercase tracking-widest text-[#93a8bd] mb-6">
            OFFICIAL PARTNERS PLACEHOLDER SHOWCASE
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {currentPartners.map((partner, i) => (
              <div
                key={i}
                className="p-5 rounded-2xl bg-[#0f2236] border border-[#1f3a56] hover:border-[#f5b83d]/60 flex flex-col items-center text-center justify-center min-h-[140px] group transition-all"
              >
                <div
                  className="w-10 h-10 rounded-xl mb-3 flex items-center justify-center font-heading font-black text-xs text-[#07131f]"
                  style={{ backgroundColor: partner.color }}
                >
                  {partner.name.slice(0, 2).toUpperCase()}
                </div>
                <h4 className="text-xs font-heading font-bold text-[#e8eef4] mb-1">
                  {partner.name}
                </h4>
                <p className="text-[10px] text-[#93a8bd] font-mono">
                  {partner.category}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Sponsorship Deck Tiers */}
        <div className="mb-16">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8">
            <div>
              <span className="text-xs font-mono uppercase text-[#3ddbb0] font-bold">
                PARTNERSHIP TIERS
              </span>
              <h3 className="text-2xl sm:text-4xl font-extrabold font-heading text-[#e8eef4] mt-1">
                Collaborate with VentureCraft 2026
              </h3>
            </div>
            <a
              href="mailto:venturecraft2025@gmail.com?subject=Sponsorship%20Proposal%20Inquiry%20-%20VentureCraft%202026"
              className="mt-4 sm:mt-0 inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#f5b83d] text-[#07131f] font-heading font-bold text-xs uppercase tracking-wider hover:bg-[#ffc857] transition-all"
            >
              <Mail className="w-4 h-4" />
              <span>Request Custom Deck</span>
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {tiers.map((t, idx) => (
              <div
                key={idx}
                className="p-7 rounded-2xl bg-[#0f2236] border border-[#1f3a56] hover:border-[#f5b83d] transition-all flex flex-col justify-between"
              >
                <div>
                  <span
                    className="text-xs font-mono font-bold uppercase tracking-wider block mb-2"
                    style={{ color: t.color }}
                  >
                    {t.tier}
                  </span>
                  <div className="text-3xl font-black font-mono text-[#e8eef4] mb-6">
                    {t.amount}
                  </div>

                  <ul className="space-y-3 mb-8 text-xs text-[#93a8bd]">
                    {t.perks.map((p, pIndex) => (
                      <li key={pIndex} className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-[#3ddbb0] shrink-0 mt-0.5" />
                        <span>{p}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <a
                  href={`mailto:venturecraft2025@gmail.com?subject=Partner%20Inquiry:%20${encodeURIComponent(t.tier)}`}
                  className="w-full py-3 rounded-xl border border-[#1f3a56] hover:bg-[#152d47] text-xs font-heading font-bold text-center text-[#e8eef4] transition-all flex items-center justify-center gap-2"
                >
                  <span>Select Tier</span>
                  <ExternalLink className="w-3.5 h-3.5 opacity-60" />
                </a>
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
