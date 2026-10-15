"use client";

import { useState } from "react";
import Preloader from "@/components/Preloader";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TickerBar from "@/components/TickerBar";
import EventsSection from "@/components/EventsSection";
import HighlightsSection from "@/components/HighlightsSection";
import AboutSection from "@/components/AboutSection";
import Footer from "@/components/Footer";
import RegistrationModal from "@/components/RegistrationModal";
import EventsModal from "@/components/EventsModal";

export default function Home() {
  const [preloaderDone, setPreloaderDone] = useState(false);
  const [regModalOpen, setRegModalOpen] = useState(false);
  const [eventsModalOpen, setEventsModalOpen] = useState(false);
  const [selectedEventId, setSelectedEventId] = useState<string | null>(null);

  const handleOpenRegister = (eventId?: string) => {
    setSelectedEventId(eventId || null);
    setRegModalOpen(true);
  };

  const handleOpenEvents = () => {
    setEventsModalOpen(true);
  };

  return (
    <div className="relative min-h-screen bg-[#07131f] text-[#e8eef4]">
      {/* 1. Global Preloader with counter, line drawing and curtain reveal */}
      <Preloader onComplete={() => setPreloaderDone(true)} />

      {/* 2. Numbered Navbar (1 Registration, 2 Home, 3 Events, 4 About us, 5 Contact us) */}
      <Navbar
        onOpenRegister={() => handleOpenRegister()}
        onOpenEvents={handleOpenEvents}
      />

      {/* Live Financial Ticker Bar underneath Navbar */}
      <div className="pt-20">
        <TickerBar />
      </div>

      {/* 3. Hero Section (Big Logo, Dual Infinite Marquees, Hanging Badges, Mouse Parallax) */}
      <Hero
        onOpenRegister={() => handleOpenRegister()}
        onOpenEvents={handleOpenEvents}
      />

      {/* 4. Events / Domains Section (3 Large Interactive Panels) */}
      <EventsSection onOpenRegister={handleOpenRegister} />

      {/* 5. Highlights / Experience Section (Video Carousel, Unmute Button, Scroll Below Cue) */}
      <HighlightsSection />

      {/* 6. About Us Section (Animated Counters: 3 events, 1 stage, 2026) */}
      <AboutSection onOpenRegister={() => handleOpenRegister()} />

      {/* 7. Contact Section & Big-Logo Footer */}
      <Footer
        onOpenRegister={() => handleOpenRegister()}
        onOpenEvents={handleOpenEvents}
      />

      {/* Popups / Modals */}
      <RegistrationModal
        isOpen={regModalOpen}
        onClose={() => {
          setRegModalOpen(false);
          setSelectedEventId(null);
        }}
        selectedEventId={selectedEventId}
      />

      <EventsModal
        isOpen={eventsModalOpen}
        onClose={() => setEventsModalOpen(false)}
        onOpenRegister={(eventId) => {
          setEventsModalOpen(false);
          handleOpenRegister(eventId);
        }}
      />
    </div>
  );
}
