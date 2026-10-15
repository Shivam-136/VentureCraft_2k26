"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ArrowUpRight, Sparkles, TrendingUp } from "lucide-react";

interface NavbarProps {
  onOpenRegister: () => void;
  onOpenEvents: () => void;
}

export default function Navbar({ onOpenRegister, onOpenEvents }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    {
      num: "01",
      label: "Registration",
      action: () => {
        setMobileMenuOpen(false);
        onOpenRegister();
      },
      isHighlighted: true,
      badge: "LIVE",
    },
    {
      num: "02",
      label: "Home",
      href: "/#hero",
      action: () => setMobileMenuOpen(false),
    },
    {
      num: "03",
      label: "Events",
      action: () => {
        setMobileMenuOpen(false);
        onOpenEvents();
      },
    },
    {
      num: "04",
      label: "About us",
      href: "/#about",
      action: () => setMobileMenuOpen(false),
    },
    {
      num: "05",
      label: "Contact us",
      href: "/#contact",
      action: () => setMobileMenuOpen(false),
    },
  ];

  const subPages = [
    { name: "Team", href: "/team" },
    { name: "Sponsors", href: "/sponsors" },
    { name: "Guidelines", href: "/guidelines" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? "bg-[#07131f]/90 backdrop-blur-md py-3 border-b border-[#1f3a56]/80 shadow-lg"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo brand */}
          <Link
            href="/"
            className="group flex items-center gap-2.5 font-heading tracking-tighter"
          >
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#f5b83d] to-[#ff6b57] flex items-center justify-center font-black text-[#07131f] shadow-[0_0_15px_rgba(245,184,61,0.5)] group-hover:rotate-6 transition-transform">
              VC
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-sm sm:text-base tracking-widest text-[#e8eef4] uppercase">
                Venture<span className="text-[#f5b83d]">Craft</span>
              </span>
              <span className="text-[9px] font-mono tracking-widest text-[#93a8bd]">
                2026 • VENTUREVERSE
              </span>
            </div>
          </Link>

          {/* Desktop Nav - EXACT ORDER: 1 Registration, 2 Home, 3 Events, 4 About us, 5 Contact us */}
          <nav className="hidden lg:flex items-center gap-2 font-mono">
            {navItems.map((item) => {
              if (item.action && !item.href) {
                return (
                  <button
                    key={item.num}
                    onClick={item.action}
                    className={`group relative flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs transition-all ${
                      item.isHighlighted
                        ? "bg-[#f5b83d] text-[#07131f] font-bold shadow-[0_0_20px_rgba(245,184,61,0.4)] hover:bg-[#ffc857] hover:scale-105"
                        : "text-[#93a8bd] hover:text-[#e8eef4] hover:bg-[#0f2236] border border-transparent hover:border-[#1f3a56]"
                    }`}
                  >
                    <span
                      className={`text-[10px] ${
                        item.isHighlighted ? "text-[#07131f]/70" : "text-[#f5b83d]"
                      }`}
                    >
                      {item.num}
                    </span>
                    <span className="font-sans font-medium tracking-wide">
                      {item.label}
                    </span>
                    {item.badge && (
                      <span className="text-[9px] bg-[#07131f] text-[#f5b83d] px-1.5 py-0.2 rounded-full font-bold ml-1 animate-pulse">
                        {item.badge}
                      </span>
                    )}
                  </button>
                );
              }

              return (
                <Link
                  key={item.num}
                  href={item.href || "#"}
                  className="group relative flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs text-[#93a8bd] hover:text-[#e8eef4] hover:bg-[#0f2236] border border-transparent hover:border-[#1f3a56] transition-all"
                >
                  <span className="text-[10px] text-[#f5b83d]">{item.num}</span>
                  <span className="font-sans font-medium tracking-wide">
                    {item.label}
                  </span>
                </Link>
              );
            })}

            {/* Sub-pages dropdown pill */}
            <div className="relative group ml-2 border-l border-[#1f3a56] pl-3">
              <span className="text-[11px] text-[#93a8bd] hover:text-[#f5b83d] cursor-pointer flex items-center gap-1 py-1 font-sans">
                More <ArrowUpRight className="w-3 h-3 text-[#93a8bd]" />
              </span>
              <div className="absolute right-0 top-full pt-2 hidden group-hover:block w-40">
                <div className="bg-[#0f2236] border border-[#1f3a56] rounded-xl p-2 shadow-2xl backdrop-blur-md">
                  {subPages.map((sp) => (
                    <Link
                      key={sp.name}
                      href={sp.href}
                      className="block px-3 py-1.5 text-xs text-[#93a8bd] hover:text-[#e8eef4] hover:bg-[#152d47] rounded-lg transition-colors font-sans"
                    >
                      {sp.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </nav>

          {/* Mobile Hamburger Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={onOpenRegister}
              className="px-3 py-1 rounded-full bg-[#f5b83d] text-[#07131f] text-xs font-bold font-heading shadow-md"
            >
              Register
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl bg-[#0f2236] border border-[#1f3a56] text-[#e8eef4] hover:bg-[#152d47] transition-colors"
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Full-Screen Overlay Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-[#07131f]/98 backdrop-blur-xl flex flex-col justify-between p-6 pt-24 lg:hidden">
          <div className="flex flex-col space-y-4">
            <span className="text-xs uppercase font-mono tracking-widest text-[#93a8bd]">
              NAVIGATION MENU
            </span>

            {navItems.map((item, idx) => {
              if (item.action && !item.href) {
                return (
                  <button
                    key={item.num}
                    onClick={item.action}
                    className={`flex items-center justify-between p-4 rounded-xl border text-left transition-all ${
                      item.isHighlighted
                        ? "bg-[#f5b83d] text-[#07131f] border-[#f5b83d] font-bold shadow-[0_0_20px_rgba(245,184,61,0.3)]"
                        : "bg-[#0f2236] text-[#e8eef4] border-[#1f3a56] hover:border-[#f5b83d]"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-sm opacity-60">
                        {item.num}
                      </span>
                      <span className="font-heading text-lg">{item.label}</span>
                    </div>
                    {item.isHighlighted && (
                      <span className="text-xs font-mono bg-[#07131f] text-[#f5b83d] px-2 py-0.5 rounded-full font-bold">
                        OPEN
                      </span>
                    )}
                  </button>
                );
              }

              return (
                <Link
                  key={item.num}
                  href={item.href || "#"}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-between p-4 rounded-xl bg-[#0f2236] border border-[#1f3a56] text-[#e8eef4] hover:border-[#f5b83d] transition-all"
                >
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-sm text-[#f5b83d]">
                      {item.num}
                    </span>
                    <span className="font-heading text-lg">{item.label}</span>
                  </div>
                  <ArrowUpRight className="w-5 h-5 text-[#93a8bd]" />
                </Link>
              );
            })}

            {/* Sub Pages on mobile */}
            <div className="pt-2">
              <span className="text-xs uppercase font-mono tracking-widest text-[#93a8bd] block mb-2">
                MORE SECTIONS
              </span>
              <div className="grid grid-cols-3 gap-2">
                {subPages.map((sp) => (
                  <Link
                    key={sp.name}
                    href={sp.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="p-2.5 text-center text-xs font-mono rounded-lg bg-[#0f2236] border border-[#1f3a56] text-[#93a8bd] hover:text-[#e8eef4]"
                  >
                    {sp.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <div className="pt-6 border-t border-[#1f3a56] flex items-center justify-between text-xs text-[#93a8bd] font-mono">
            <span>VENTURECRAFT 2026</span>
            <span className="text-[#f5b83d]">#VENTUREVERSE</span>
          </div>
        </div>
      )}
    </>
  );
}
