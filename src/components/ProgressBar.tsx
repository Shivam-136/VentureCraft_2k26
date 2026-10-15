"use client";

import { useEffect, useState } from "react";

export default function ProgressBar() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const currentProgress = (window.scrollY / totalHeight) * 100;
        setScrollProgress(currentProgress);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 h-[3px] z-[100] bg-transparent pointer-events-none">
      <div
        className="h-full bg-gradient-to-r from-[#f5b83d] via-[#3ddbb0] to-[#ff6b57] transition-all duration-75 ease-out shadow-[0_0_10px_rgba(245,184,61,0.8)]"
        style={{ width: `${scrollProgress}%` }}
      />
    </div>
  );
}
