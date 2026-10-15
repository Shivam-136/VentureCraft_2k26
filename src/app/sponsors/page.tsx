"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import RegistrationModal from "@/components/RegistrationModal";
import EventsModal from "@/components/EventsModal";
import SponsorInquiryModal from "@/components/SponsorInquiryModal";
import { ArrowLeft, CheckCircle2, Mail, ExternalLink, Sparkles, Building2, HelpCircle } from "lucide-react";
import Link from "next/link";

export default function SponsorsPage() {
  const [regModalOpen, setRegModalOpen] = useState(false);
  const [eventsModalOpen, setEventsModalOpen] = useState(false);
  const [sponsorModalOpen, setSponsorModalOpen] = useState(false);
  const [selectedTierForModal, setSelectedTierForModal] = useState("Custom Partnership");

  const openSponsorInquiry = (tierName: string) => {
    setSelectedTierForModal(tierName);
    setSponsorModalOpen(true);
  };

  // 6 Defined Professional Partnership Tiers with "Custom Sponsorship Packages Available"
  const sponsorshipTiers = [
    {
      tier: "Title Sponsor",
      badge: "FLAGSHIP PARTNER",
      accent: "#f5b83d",
      scope: "Principal headline branding across VentureCraft 2K26, keynote address opportunities, and premier stage visibility.",
    },
    {
      tier: "Powered By Partner",
      badge: "CO-POWERED",
      accent: "#3ddbb0",
      scope: "Prominent co-branding across promotional campaigns, domain presence in flagship events, and strategic showcase.",
    },
    {
      tier: "Associate Sponsor",
      badge: "STRATEGIC",
      accent: "#ff6b57",
      scope: "Brand presence across student collaterals, delegate kits, official media coverage, and live broadcast features.",
    },
    {
      tier: "Food & Beverage Partner",
      badge: "OFFICIAL F&B",
      accent: "#f5b83d",
      scope: "Exclusive food, snack, or beverage sampling, designated recharge lounge, and direct hospitality branding for delegates.",
    },
    {
      tier: "Technology Partner",
      badge: "INFRASTRUCTURE",
      accent: "#3ddbb0",
      scope: "Platform integration, tooling sponsor for financial simulations or algorithmic trading, and student developer credits.",
    },
    {
      tier: "Community Partner",
      badge: "ECOSYSTEM",
      accent: "#ff6b57",
      scope: "Startup community reach, cross-network promotion, student chapter tie-ins, and shared demographic outreach.",
    },
  ];

  // Realistic proposed benefits clearly marked as proposed benefits subject to mutual agreement
  const proposedBenefits = [
    {
      title: "Brand Visibility Across Event Promotions",
      description: "Digital banners, event backdrop illumination, printed delegate badges, and program brochures distributed to participants.",
    },
    {
      title: "Social Media & Digital Promotion",
      description: "Dedicated sponsor spotlights, Instagram reels, LinkedIn features, and continuous newsletter dispatches to prospective delegates.",
    },
    {
      title: "On-Campus Branding Opportunities",
      description: "Standees, banners, main auditorium screens, and campus walkway signage during the multi-day event.",
    },
    {
      title: "Event Booth & Engagement Opportunities",
      description: "Dedicated interactive stall space in the delegates atrium to demo products, distribute merchandise, and conduct activations.",
    },
    {
      title: "Direct Student Engagement",
      description: "Direct interaction with 2,500+ undergraduate and postgraduate students from top business, tech, and design colleges.",
    },
    {
      title: "Recruitment & Networking Opportunities",
      description: "Access to participant resumes, entrepreneurial pitch decks, and talent interaction during the pitch rounds and trading labs.",
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

        {/* Page Header */}
        <div className="mb-16 pb-6 border-b border-[#1f3a56]">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#f5b83d] block mb-2">
                // PARTNERSHIPS & ALLIANCES
              </span>
              <h1 className="text-4xl sm:text-6xl font-black font-heading text-[#e8eef4]">
                PARTNERS & <span className="text-[#f5b83d]">SPONSORS</span>
              </h1>
              <p className="max-w-2xl text-sm text-[#93a8bd] font-mono mt-3 leading-relaxed">
                Connect with thousands of future founders, quantitative analysts, and student innovators. Explore custom collaboration avenues for VentureCraft 2K26.
              </p>
            </div>

            {/* Prominent CTA Button */}
            <div className="shrink-0">
              <button
                onClick={() => openSponsorInquiry("General Sponsorship")}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#f5b83d] text-[#07131f] font-heading font-black text-xs uppercase tracking-wider hover:bg-[#ffc857] shadow-[0_0_25px_rgba(245,184,61,0.25)] hover:shadow-[0_0_35px_rgba(245,184,61,0.4)] transition-all"
              >
                <Building2 className="w-4 h-4" />
                <span>Become a Sponsor</span>
              </button>
            </div>
          </div>
        </div>

        {/* 1. Confirmed Real Sponsors */}
        <div className="mb-20">
          <div className="flex items-center gap-2 mb-2">
            <Sparkles className="w-4 h-4 text-[#f5b83d]" />
            <h2 className="text-xs font-mono uppercase tracking-widest text-[#f5b83d] font-bold">
              CONFIRMED EVENT SPONSORS
            </h2>
          </div>
          <p className="text-xs text-[#93a8bd] font-mono mb-6">
            Officially verified brand partners collaborating with VentureCraft 2K26.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl">
            {/* Pizza Hut */}
            <a
              href="https://www.pizzahut.co.in"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative rounded-2xl bg-gradient-to-b from-[#0f2236] to-[#0c1c2e] border border-[#1f3a56] hover:border-[#f5b83d]/80 p-8 flex flex-col items-center justify-center min-h-[200px] transition-all duration-300 hover:shadow-[0_0_30px_rgba(245,184,61,0.12)] hover:-translate-y-1 overflow-hidden"
            >
              <div className="absolute top-3 right-3 text-[10px] font-mono uppercase tracking-wider text-[#93a8bd]/60 group-hover:text-[#f5b83d] transition-colors flex items-center gap-1">
                <span>OFFICIAL</span>
                <ExternalLink className="w-3 h-3 text-[#93a8bd] group-hover:text-[#f5b83d]" />
              </div>
              <div className="relative w-48 h-20 mb-4 transition-transform duration-300 group-hover:scale-105">
                <img
                  src="/pizza-hut-brand.svg"
                  alt="Pizza Hut Logo"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="text-center">
                <h3 className="text-lg font-heading font-bold text-[#e8eef4] group-hover:text-[#f5b83d] transition-colors">
                  Pizza Hut
                </h3>
                <p className="text-[11px] font-mono text-[#93a8bd] mt-0.5">
                  Official Event Sponsor
                </p>
              </div>
            </a>

            {/* Arun Icecreams */}
            <a
              href="https://www.arunicecreams.in"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative rounded-2xl bg-gradient-to-b from-[#0f2236] to-[#0c1c2e] border border-[#1f3a56] hover:border-[#f5b83d]/80 p-8 flex flex-col items-center justify-center min-h-[200px] transition-all duration-300 hover:shadow-[0_0_30px_rgba(245,184,61,0.12)] hover:-translate-y-1 overflow-hidden"
            >
              <div className="absolute top-3 right-3 text-[10px] font-mono uppercase tracking-wider text-[#93a8bd]/60 group-hover:text-[#f5b83d] transition-colors flex items-center gap-1">
                <span>OFFICIAL</span>
                <ExternalLink className="w-3 h-3 text-[#93a8bd] group-hover:text-[#f5b83d]" />
              </div>
              <div className="relative w-44 h-20 mb-4 transition-transform duration-300 group-hover:scale-105">
                <img
                  src="/arun-icecreams.png"
                  alt="Arun Icecreams Logo"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="text-center">
                <h3 className="text-lg font-heading font-bold text-[#e8eef4] group-hover:text-[#f5b83d] transition-colors">
                  Arun Icecreams
                </h3>
                <p className="text-[11px] font-mono text-[#93a8bd] mt-0.5">
                  Official Event Sponsor
                </p>
              </div>
            </a>
          </div>
        </div>

        {/* 2. Sponsorship Tiers (Custom Sponsorship Packages Available) */}
        <div className="mb-20">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 pb-4 border-b border-[#1f3a56]/60">
            <div>
              <span className="text-xs font-mono uppercase text-[#3ddbb0] font-bold">
                PARTNERSHIP STRUCTURE
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold font-heading text-[#e8eef4] mt-1">
                Available Sponsorship Tiers
              </h2>
              <p className="text-xs text-[#93a8bd] font-mono mt-1">
                Tailored activation packages designed to fit your marketing & outreach objectives.
              </p>
            </div>

            <button
              onClick={() => openSponsorInquiry("Custom Partnership")}
              className="mt-4 sm:mt-0 inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#0f2236] border border-[#1f3a56] hover:border-[#f5b83d] text-xs font-mono text-[#e8eef4] transition-all"
            >
              <Mail className="w-3.5 h-3.5 text-[#f5b83d]" />
              <span>Contact Secretariat</span>
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sponsorshipTiers.map((tier, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-[#0f2236] border border-[#1f3a56] hover:border-[#f5b83d] transition-all flex flex-col justify-between group hover:-translate-y-1"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span
                      className="text-[10px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-[#07131f] border border-[#1f3a56]"
                      style={{ color: tier.accent }}
                    >
                      {tier.badge}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold font-heading text-[#e8eef4] mb-2 group-hover:text-[#f5b83d] transition-colors">
                    {tier.tier}
                  </h3>

                  {/* Standardized Requirement: Custom Sponsorship Packages Available */}
                  <div className="mb-4 pb-3 border-b border-[#1f3a56]/60">
                    <span className="text-xs font-mono font-semibold text-[#f5b83d]">
                      Custom Sponsorship Packages Available
                    </span>
                  </div>

                  <p className="text-xs text-[#93a8bd] leading-relaxed mb-6 font-sans">
                    {tier.scope}
                  </p>
                </div>

                <button
                  onClick={() => openSponsorInquiry(tier.tier)}
                  className="w-full py-2.5 rounded-xl border border-[#1f3a56] hover:bg-[#152d47] hover:border-[#f5b83d] text-xs font-heading font-bold text-center text-[#e8eef4] transition-all flex items-center justify-center gap-2"
                >
                  <span>Inquire for {tier.tier}</span>
                  <ExternalLink className="w-3.5 h-3.5 opacity-60" />
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* 3. Proposed Partnership Benefits Section */}
        <div className="mb-16 rounded-3xl bg-gradient-to-b from-[#0f2236]/80 to-[#07131f] border border-[#1f3a56] p-8 sm:p-10">
          <div className="max-w-3xl mb-8">
            <span className="text-xs font-mono uppercase text-[#f5b83d] font-bold block mb-1">
              VALUE DELIVERABLES
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold font-heading text-[#e8eef4]">
              Proposed Partnership Benefits
            </h2>
            <div className="flex items-center gap-2 mt-2 text-xs font-mono text-[#93a8bd]">
              <HelpCircle className="w-4 h-4 text-[#3ddbb0] shrink-0" />
              <span>
                These deliverables represent proposed benefits and are customized based on mutual agreement.
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {proposedBenefits.map((benefit, i) => (
              <div
                key={i}
                className="p-5 rounded-2xl bg-[#07131f]/70 border border-[#1f3a56]/80 hover:border-[#3ddbb0]/50 transition-colors"
              >
                <div className="flex items-start gap-3 mb-2">
                  <CheckCircle2 className="w-4 h-4 text-[#3ddbb0] shrink-0 mt-0.5" />
                  <h4 className="text-sm font-bold font-heading text-[#e8eef4]">
                    {benefit.title}
                  </h4>
                </div>
                <p className="text-xs text-[#93a8bd] pl-7 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>

          {/* Bottom Callout & Action */}
          <div className="mt-10 pt-8 border-t border-[#1f3a56]/80 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs font-mono text-[#93a8bd] text-center sm:text-left">
              Looking for a bespoke integration or product sampling booth? Our secretariat is ready to assist.
            </p>
            <button
              onClick={() => openSponsorInquiry("Custom Integration")}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#f5b83d] text-[#07131f] font-heading font-bold text-xs uppercase tracking-wider hover:bg-[#ffc857] transition-all"
            >
              <Building2 className="w-4 h-4" />
              <span>Become a Sponsor</span>
            </button>
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

      {/* Interactive Sponsorship Inquiry Modal */}
      <SponsorInquiryModal
        isOpen={sponsorModalOpen}
        onClose={() => setSponsorModalOpen(false)}
        defaultTier={selectedTierForModal}
      />
    </main>
  );
}
