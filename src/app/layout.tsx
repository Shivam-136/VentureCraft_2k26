import type { Metadata } from "next";
import { Unbounded, DM_Sans } from "next/font/google";
import "./globals.css";
import CustomCursor from "@/components/CustomCursor";
import ProgressBar from "@/components/ProgressBar";
import SmoothScrollProvider from "@/components/SmoothScroll";

const unbounded = Unbounded({
  variable: "--font-unbounded",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "VentureCraft 2026 | The Premier Startup & Finance Fest (VentureVerse)",
  description:
    "Step into VentureVerse: Where high-stakes startup pitching, Wall Street trading simulations, and corporate ramp walk collide. Venture Craft, Karvan, and Mudra at VentureCraft 2026.",
  keywords: [
    "VentureCraft",
    "VentureVerse",
    "Startup Fest",
    "Finance Fest",
    "College Event",
    "Karvan",
    "Mudra",
    "Venture Craft",
    "Trading Simulation",
    "Corporate Ramp Walk",
  ],
  authors: [{ name: "VentureCraft Team" }],
  openGraph: {
    title: "VentureCraft 2026 | VentureVerse",
    description: "Startup Idea Pitching, Corporate Ramp Walk, and Trading Simulations.",
    url: "https://venturecraft2026.com",
    siteName: "VentureCraft 2026",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${unbounded.variable} ${dmSans.variable} scroll-smooth`}>
      <body className="min-h-screen bg-[#07131f] text-[#e8eef4] selection:bg-[#f5b83d] selection:text-[#07131f] overflow-x-hidden antialiased">
        <SmoothScrollProvider>
          <ProgressBar />
          <CustomCursor />
          {children}
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
