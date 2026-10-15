"use client";

import { useEffect, useState } from "react";

export default function CustomCursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [trailingPos, setTrailingPos] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only show on devices with mouse/pointer
    if (typeof window === "undefined" || window.matchMedia("(pointer: coarse)").matches) {
      return;
    }

    const handleMouseMove = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);

      const target = e.target as HTMLElement | null;
      if (
        target &&
        (target.closest("button") ||
          target.closest("a") ||
          target.closest("[data-magnetic]") ||
          target.closest(".interactive-hover"))
      ) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    let animationFrameId: number;
    const smoothFollow = () => {
      setTrailingPos((prev) => ({
        x: prev.x + (pos.x - prev.x) * 0.18,
        y: prev.y + (pos.y - prev.y) * 0.18,
      }));
      animationFrameId = requestAnimationFrame(smoothFollow);
    };
    animationFrameId = requestAnimationFrame(smoothFollow);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
      cancelAnimationFrame(animationFrameId);
    };
  }, [pos.x, pos.y, isVisible]);

  if (!isVisible) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden">
      {/* Outer trailing halo */}
      <div
        className={`fixed top-0 left-0 rounded-full pointer-events-none transition-transform duration-75 ease-out ${
          isHovered
            ? "w-12 h-12 border-2 border-[#f5b83d] bg-[rgba(245,184,61,0.15)] shadow-[0_0_20px_rgba(245,184,61,0.5)] scale-125"
            : "w-8 h-8 border border-[rgba(61,219,176,0.6)] bg-transparent"
        }`}
        style={{
          transform: `translate3d(${trailingPos.x}px, ${trailingPos.y}px, 0) translate(-50%, -50%)`,
          transition: "width 0.2s, height 0.2s, border-color 0.2s, background-color 0.2s",
        }}
      />
      {/* Central crisp dot */}
      <div
        className={`fixed top-0 left-0 rounded-full pointer-events-none transition-all duration-75 ${
          isHovered ? "w-2 h-2 bg-[#f5b83d]" : "w-1.5 h-1.5 bg-[#3ddbb0]"
        }`}
        style={{
          transform: `translate3d(${pos.x}px, ${pos.y}px, 0) translate(-50%, -50%)`,
        }}
      />
    </div>
  );
}
