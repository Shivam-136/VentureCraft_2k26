"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Sparkles } from "lucide-react";

export interface Sponsor {
  name: string;
  logo: string;
  alt: string;
  isImage?: boolean;
  website?: string;
}

export const OFFICIAL_SPONSORS: Sponsor[] = [
  {
    name: "Pizza Hut",
    logo: "/pizza-hut-brand.svg",
    alt: "Pizza Hut Logo",
    isImage: true,
    website: "https://www.pizzahut.co.in",
  },
  {
    name: "Arun Icecreams",
    logo: "/arun-icecreams.png",
    alt: "Arun Icecreams Logo",
    isImage: true,
    website: "https://www.arunicecreams.in",
  },
];

interface SponsorsSectionProps {
  showViewAllLink?: boolean;
}

export default function SponsorsSection({ showViewAllLink = true }: SponsorsSectionProps) {
  return (
    <section id="sponsors" className="relative py-20 px-4 sm:px-6 lg:px-8 bg-[#07131f] border-t border-[#1f3a56]/60 select-none overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-64 bg-[#f5b83d]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#f5b83d]">
                // OFFICIAL PARTNERS
              </span>
              <span className="w-12 h-[1px] bg-[#f5b83d]" />
            </div>
            <h2 className="text-3xl sm:text-5xl font-black font-heading text-[#e8eef4] tracking-tight">
              PROUD <span className="text-[#f5b83d]">SPONSORS</span>
            </h2>
            <p className="text-xs sm:text-sm text-[#93a8bd] font-mono mt-2 max-w-xl">
              Powering the next generation of founders, traders, and innovators at VentureCraft 2K26.
            </p>
          </div>

          {showViewAllLink && (
            <Link
              href="/sponsors"
              className="mt-4 sm:mt-0 inline-flex items-center gap-2 text-xs font-mono text-[#93a8bd] hover:text-[#f5b83d] transition-colors group"
            >
              <span>Explore Partnership Deck</span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
          )}
        </div>

        {/* Sponsor Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {OFFICIAL_SPONSORS.map((sponsor) => {
            const CardWrapper = sponsor.website ? "a" : "div";
            const wrapperProps = sponsor.website
              ? {
                  href: sponsor.website,
                  target: "_blank",
                  rel: "noopener noreferrer",
                }
              : {};

            return (
              <CardWrapper
                key={sponsor.name}
                {...wrapperProps}
                className="group relative rounded-2xl bg-gradient-to-b from-[#0f2236] to-[#0c1c2e] border border-[#1f3a56] hover:border-[#f5b83d]/80 p-8 flex flex-col items-center justify-center min-h-[220px] transition-all duration-300 hover:shadow-[0_0_30px_rgba(245,184,61,0.12)] hover:-translate-y-1 overflow-hidden"
              >
                {/* Glow accent */}
                <div className="absolute inset-0 bg-gradient-to-tr from-[#f5b83d]/0 via-[#f5b83d]/0 to-[#f5b83d]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                {/* Corner accent marker */}
                <div className="absolute top-3 right-3 text-[10px] font-mono uppercase tracking-wider text-[#93a8bd]/60 group-hover:text-[#f5b83d] transition-colors flex items-center gap-1">
                  <Sparkles className="w-3 h-3 text-[#f5b83d] opacity-0 group-hover:opacity-100 transition-opacity" />
                  <span>PARTNER</span>
                </div>

                {/* Logo Display */}
                <div className="relative w-full h-24 flex items-center justify-center p-2 mb-4">
                  {sponsor.name === "Pizza Hut" ? (
                    <div className="relative w-48 h-20 flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
                      <Image
                        src={sponsor.logo}
                        alt={sponsor.alt}
                        fill
                        className="object-contain"
                        sizes="(max-width: 768px) 192px, 200px"
                      />
                    </div>
                  ) : (
                    <div className="relative w-44 h-20 flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
                      <Image
                        src={sponsor.logo}
                        alt={sponsor.alt}
                        fill
                        className="object-contain"
                        sizes="(max-width: 768px) 176px, 180px"
                      />
                    </div>
                  )}
                </div>

                {/* Brand Name Label */}
                <div className="text-center">
                  <h3 className="text-base sm:text-lg font-heading font-bold text-[#e8eef4] group-hover:text-[#f5b83d] transition-colors">
                    {sponsor.name}
                  </h3>
                  <p className="text-[11px] font-mono text-[#93a8bd] mt-0.5">
                    Official Sponsor
                  </p>
                </div>
              </CardWrapper>
            );
          })}
        </div>
      </div>
    </section>
  );
}
