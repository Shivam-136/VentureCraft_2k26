"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import RegistrationModal from "@/components/RegistrationModal";
import EventsModal from "@/components/EventsModal";
import { Mail, ArrowLeft, Sparkles, TrendingUp } from "lucide-react";
import Link from "next/link";

function LinkedinIcon({ className = "w-3.5 h-3.5" }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
    </svg>
  );
}

export default function TeamPage() {
  const [regModalOpen, setRegModalOpen] = useState(false);
  const [eventsModalOpen, setEventsModalOpen] = useState(false);

  const teamMembers = [
    {
      name: "Aarav Singhania",
      role: "Convener & Lead Organizer",
      division: "Executive Board",
      bio: "Serial collegiate entrepreneur, finalist in Global Hult Prize, guiding strategic vision and angel partnerships.",
      badge: "CO-FOUNDER",
      color: "#f5b83d",
    },
    {
      name: "Rhea Malhotra",
      role: "Head of Karvan & Runway Creative",
      division: "Executive Board",
      bio: "Fashion director & corporate stylist with 4+ years of stage choreography experience.",
      badge: "CREATIVE LEAD",
      color: "#ff6b57",
    },
    {
      name: "Devansh Mehta",
      role: "Head of Mudra & Quant Analytics",
      division: "Executive Board",
      bio: "Quantitative finance researcher, algorithmic trading developer, and CFA Level 1 candidate.",
      badge: "QUANT LEAD",
      color: "#3ddbb0",
    },
    {
      name: "Ananya Sharma",
      role: "Head of Venture Craft & Pitch Arena",
      division: "Venture Operations",
      bio: "Incubation lead coordinating with angel syndicates, venture capitalists, and accelerators.",
      badge: "VC RELATIONS",
      color: "#f5b83d",
    },
    {
      name: "Kabir Sen",
      role: "Head of Corporate Sponsorships",
      division: "Finance & Outreach",
      bio: "Securing tier-1 corporate partnerships and brand alliances across fintech and couture brands.",
      badge: "SPONSORSHIPS",
      color: "#3ddbb0",
    },
    {
      name: "Ishita Roy",
      role: "Chief of Experience & Media",
      division: "Media & PR",
      bio: "Crafting digital presence, camera direction, stage lighting, and press relations.",
      badge: "MEDIA LEAD",
      color: "#ff6b57",
    },
  ];

  return (
    <main className="min-h-screen bg-[#07131f] text-[#e8eef4]">
      <Navbar
        onOpenRegister={() => setRegModalOpen(true)}
        onOpenEvents={() => setEventsModalOpen(true)}
      />

      <div className="pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        {/* Back Link */}
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
            // LEADERSHIP & ARCHITECTS
          </span>
          <h1 className="text-4xl sm:text-6xl font-black font-heading text-[#e8eef4]">
            MEET THE <span className="text-[#f5b83d]">TEAM</span>
          </h1>
          <p className="max-w-2xl text-sm text-[#93a8bd] font-mono mt-3">
            The student innovators, venture scouts, runway stylists, and quantitative leads orchestrating VentureCraft 2026.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {teamMembers.map((member, i) => (
            <div
              key={i}
              className="p-6 rounded-2xl bg-[#0f2236] border border-[#1f3a56] hover:border-[#f5b83d]/70 transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1 shadow-lg"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span
                    className="text-[10px] font-mono font-bold px-2.5 py-1 rounded-full border"
                    style={{
                      borderColor: `${member.color}40`,
                      color: member.color,
                      backgroundColor: `${member.color}15`,
                    }}
                  >
                    {member.badge}
                  </span>
                  <span className="text-xs font-mono text-[#93a8bd]">
                    {member.division}
                  </span>
                </div>

                <div className="w-16 h-16 rounded-2xl bg-[#07131f] border border-[#1f3a56] flex items-center justify-center font-heading font-black text-xl text-[#f5b83d] mb-4 group-hover:scale-105 transition-transform">
                  {member.name.split(" ").map((n) => n[0]).join("")}
                </div>

                <h3 className="text-xl font-bold font-heading text-[#e8eef4] mb-1">
                  {member.name}
                </h3>
                <p className="text-xs font-mono mb-4" style={{ color: member.color }}>
                  {member.role}
                </p>

                <p className="text-xs text-[#93a8bd] leading-relaxed mb-6">
                  {member.bio}
                </p>
              </div>

              <div className="pt-4 border-t border-[#1f3a56] flex items-center justify-between">
                <span className="text-[11px] font-mono text-[#93a8bd]">
                  CONNECT:
                </span>
                <div className="flex items-center gap-2">
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noreferrer"
                    className="p-1.5 rounded-lg bg-[#07131f] text-[#93a8bd] hover:text-[#3ddbb0] transition-colors"
                  >
                    <LinkedinIcon className="w-3.5 h-3.5" />
                  </a>
                  <a
                    href="mailto:venturecraft2025@gmail.com"
                    className="p-1.5 rounded-lg bg-[#07131f] text-[#93a8bd] hover:text-[#f5b83d] transition-colors"
                  >
                    <Mail className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>
          ))}
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
