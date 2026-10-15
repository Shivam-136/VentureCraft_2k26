"use client";

import Link from "next/link";
import {
  Mail,
  MapPin,
  ArrowUpRight,
  ExternalLink,
  Send,
} from "lucide-react";
import { useState } from "react";

interface FooterProps {
  onOpenRegister: () => void;
  onOpenEvents: () => void;
}

// Inline crisp SVG icons for social channels
function InstagramIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

function LinkedinIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
    </svg>
  );
}

function YoutubeIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  );
}

function TwitterIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

export default function Footer({ onOpenRegister, onOpenEvents }: FooterProps) {
  const [querySent, setQuerySent] = useState(false);
  const [emailInput, setEmailInput] = useState("");

  const handleQuickInquiry = (e: React.FormEvent) => {
    e.preventDefault();
    if (!emailInput) return;
    setQuerySent(true);
    setTimeout(() => setQuerySent(false), 4000);
    setEmailInput("");
  };

  return (
    <footer id="contact" className="relative bg-[#050e18] border-t border-[#1f3a56] pt-20 pb-12 select-none overflow-hidden text-[#e8eef4]">
      {/* Subtle Financial Ambient Grid */}
      <div className="absolute inset-0 bg-financial-grid opacity-15 pointer-events-none" />

      {/* Radiant glow at bottom center */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-64 bg-[#f5b83d]/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Contact Information & Quick Connect Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-16 border-b border-[#1f3a56]">
          {/* Col 1: Connect Card */}
          <div className="lg:col-span-5 space-y-6">
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#f5b83d]">
                05 // GET IN TOUCH
              </span>
              <span className="w-10 h-[1px] bg-[#f5b83d]" />
            </div>

            <h3 className="text-2xl sm:text-4xl font-extrabold font-heading text-[#e8eef4]">
              Connect with the <span className="text-[#f5b83d]">VentureCraft</span> Secretariat
            </h3>

            <p className="text-sm text-[#93a8bd] leading-relaxed">
              Have questions regarding event rulebooks, team slots, sponsorship packages, or travel guidelines? Drop us a direct dispatch.
            </p>

            <div className="space-y-3 font-mono text-xs text-[#93a8bd]">
              {/* Email */}
              <a
                href="mailto:venturecraft2025@gmail.com"
                className="flex items-center gap-3 p-3 rounded-xl bg-[#0f2236] border border-[#1f3a56] hover:border-[#f5b83d] text-[#e8eef4] transition-all group"
              >
                <div className="p-2 rounded-lg bg-[#07131f] text-[#f5b83d] group-hover:scale-110 transition-transform">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] uppercase text-[#93a8bd] block">
                    OFFICIAL CORRESPONDENCE
                  </span>
                  <span className="font-bold text-sm text-[#f5b83d]">
                    venturecraft2025@gmail.com
                  </span>
                </div>
              </a>

              {/* Venue */}
              <a
                href="https://maps.google.com/?q=College+Campus+Auditorium"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-3 rounded-xl bg-[#0f2236] border border-[#1f3a56] hover:border-[#3ddbb0] text-[#e8eef4] transition-all group"
              >
                <div className="p-2 rounded-lg bg-[#07131f] text-[#3ddbb0] group-hover:scale-110 transition-transform">
                  <MapPin className="w-4 h-4" />
                </div>
                <div className="flex-1">
                  <span className="text-[10px] uppercase text-[#93a8bd] block">
                    EVENT VENUE (GOOGLE MAPS)
                  </span>
                  <span className="font-semibold text-xs text-[#e8eef4]">
                    The Grand Auditorium & Financial Hub Campus
                  </span>
                </div>
                <ExternalLink className="w-4 h-4 text-[#93a8bd]" />
              </a>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="lg:col-span-3 space-y-4">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#93a8bd] block">
              PORTAL DIRECTORY
            </span>

            <ul className="space-y-2.5 font-mono text-xs">
              <li>
                <button
                  onClick={onOpenRegister}
                  className="text-[#f5b83d] font-bold hover:underline flex items-center gap-1.5"
                >
                  <span>01. Registration Portal</span>
                  <ArrowUpRight className="w-3 h-3" />
                </button>
              </li>
              <li>
                <Link
                  href="/#hero"
                  className="text-[#93a8bd] hover:text-[#e8eef4] transition-colors"
                >
                  02. Home
                </Link>
              </li>
              <li>
                <button
                  onClick={onOpenEvents}
                  className="text-[#93a8bd] hover:text-[#e8eef4] transition-colors"
                >
                  03. Events & Domains
                </button>
              </li>
              <li>
                <Link
                  href="/#about"
                  className="text-[#93a8bd] hover:text-[#e8eef4] transition-colors"
                >
                  04. About us
                </Link>
              </li>
              <li>
                <Link
                  href="/team"
                  className="text-[#93a8bd] hover:text-[#e8eef4] transition-colors flex items-center gap-1"
                >
                  <span>06. Organizing Team</span>
                  <ArrowUpRight className="w-3 h-3 opacity-60" />
                </Link>
              </li>
              <li>
                <Link
                  href="/sponsors"
                  className="text-[#93a8bd] hover:text-[#e8eef4] transition-colors flex items-center gap-1"
                >
                  <span>07. Partners & Sponsors</span>
                  <ArrowUpRight className="w-3 h-3 opacity-60" />
                </Link>
              </li>
              <li>
                <Link
                  href="/guidelines"
                  className="text-[#93a8bd] hover:text-[#e8eef4] transition-colors flex items-center gap-1"
                >
                  <span>08. Rulebook & Guidelines</span>
                  <ArrowUpRight className="w-3 h-3 opacity-60" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Newsletter / Quick Query Box */}
          <div className="lg:col-span-4 space-y-4">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#93a8bd] block">
              DISPATCH WIRE
            </span>

            <p className="text-xs text-[#93a8bd]">
              Enter your email to receive spot schedule alerts, rulebook amendments, and shortlisted team results.
            </p>

            <form onSubmit={handleQuickInquiry} className="space-y-2">
              <div className="flex gap-2">
                <input
                  type="email"
                  value={emailInput}
                  onChange={(e) => setEmailInput(e.target.value)}
                  placeholder="delegate@college.edu"
                  required
                  className="flex-1 px-3.5 py-2.5 rounded-xl bg-[#0f2236] border border-[#1f3a56] text-xs font-mono text-[#e8eef4] placeholder-[#93a8bd]/50 focus:outline-none focus:border-[#f5b83d]"
                />
                <button
                  type="submit"
                  className="px-4 py-2.5 rounded-xl bg-[#f5b83d] text-[#07131f] font-bold text-xs font-mono hover:bg-[#ffc857] transition-all flex items-center gap-1"
                >
                  <Send className="w-3.5 h-3.5" />
                </button>
              </div>
              {querySent && (
                <p className="text-[11px] font-mono text-[#3ddbb0]">
                  ✓ Recorded! We will keep you updated.
                </p>
              )}
            </form>

            {/* Social channels */}
            <div className="pt-4">
              <span className="text-[11px] font-mono text-[#93a8bd] block mb-2">
                SOCIAL BROADCASTS:
              </span>
              <div className="flex items-center gap-2">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-[#0f2236] border border-[#1f3a56] hover:border-[#ff6b57] text-[#93a8bd] hover:text-[#ff6b57] transition-colors"
                  aria-label="Instagram"
                >
                  <InstagramIcon className="w-4 h-4" />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-[#0f2236] border border-[#1f3a56] hover:border-[#3ddbb0] text-[#93a8bd] hover:text-[#3ddbb0] transition-colors"
                  aria-label="LinkedIn"
                >
                  <LinkedinIcon className="w-4 h-4" />
                </a>
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-[#0f2236] border border-[#1f3a56] hover:border-[#ff6b57] text-[#93a8bd] hover:text-[#ff6b57] transition-colors"
                  aria-label="YouTube"
                >
                  <YoutubeIcon className="w-4 h-4" />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-[#0f2236] border border-[#1f3a56] hover:border-[#f5b83d] text-[#93a8bd] hover:text-[#f5b83d] transition-colors"
                  aria-label="X Twitter"
                >
                  <TwitterIcon className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* BIG-LOGO FOOTER (Reference-inspired giant typography) */}
        <div className="py-12 border-b border-[#1f3a56]/60 text-center overflow-hidden">
          <h2 className="text-5xl sm:text-8xl md:text-9xl lg:text-[13rem] font-black font-heading tracking-tighter text-[#0f2236] select-none hover:text-[#152d47] transition-colors duration-500">
            VENTURE<span className="text-[#19334e]">CRAFT</span>
          </h2>
        </div>

        {/* Bottom Copyright & Disclaimer */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#93a8bd]">
          <div>
            <span>© VentureCraft 2026. All Rights Reserved.</span>
          </div>

          <div className="flex items-center gap-6">
            <Link href="/guidelines" className="hover:text-[#e8eef4]">
              Code of Conduct
            </Link>
            <Link href="/guidelines" className="hover:text-[#e8eef4]">
              Privacy Policy
            </Link>
            <a href="mailto:venturecraft2025@gmail.com" className="hover:text-[#f5b83d]">
              venturecraft2025@gmail.com
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
