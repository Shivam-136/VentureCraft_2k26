export interface EventItem {
  id: string;
  name: string;
  tagline: string;
  category: string;
  accentColor: string;
  accentBorder: string;
  accentGlow: string;
  description: string;
  longDescription: string;
  perks: string[];
  rules: string[];
  prizePool: string;
  timing: string;
  teamSize: string;
  iconName: "TrendingUp" | "Sparkles" | "CandlestickChart" | "Briefcase" | "Award";
}

export const FEST_EVENTS: EventItem[] = [
  {
    id: "venture-craft",
    name: "Venture Craft",
    tagline: "The Pitch Arena & Venture Building",
    category: "Startup Pitching & Incubation",
    accentColor: "#f5b83d", // gold
    accentBorder: "rgba(245, 184, 61, 0.4)",
    accentGlow: "rgba(245, 184, 61, 0.25)",
    description: "Startup idea pitching, business model stress-testing, and venture incubation in front of real angel investors and founders.",
    longDescription:
      "Step into the ring with your boldest business models. Pitch your seed or MVP startup to venture capitalists, withstand intense Q&A cross-examinations, and pitch for seed capital and incubation backing.",
    perks: [
      "Live VC term sheet simulations & mentorship",
      "Direct incubator fast-track access",
      "Exclusive pitch deck reviews by founders",
    ],
    rules: [
      "Teams of 2 to 4 members.",
      "10-slide deck maximum with 7-minute pitch and 5-minute Q&A.",
      "Prototypes or MVP demonstrations earn bonus points.",
    ],
    prizePool: "₹60,000 + Term Sheet Pool",
    timing: "Day 1 - 10:00 AM to 3:00 PM",
    teamSize: "2 - 4 Members",
    iconName: "TrendingUp",
  },
  {
    id: "karvan",
    name: "Karvan",
    tagline: "Corporate Couture Runway Walk",
    category: "Executive Fashion & Presence",
    accentColor: "#ff6b57", // coral
    accentBorder: "rgba(255, 107, 87, 0.4)",
    accentGlow: "rgba(255, 107, 87, 0.25)",
    description: "The corporate ramp walk where boardroom charisma meets runway couture. Strut with executive poise, power suiting, and thematic panache.",
    longDescription:
      "Karvan reimagines formal corporate culture as a high-octane fashion spectacle. Bring the charisma of Wall Street moguls, tech disruptors, and luxury venture titans down the illuminated runway.",
    perks: [
      "Professional spotlight staging & runway choreography",
      "Judged by leading fashion stylists & corporate leaders",
      "Best Styled Team, Best Walk & Audience Choice awards",
    ],
    rules: [
      "Teams of 6 to 12 models + 1 narrator/stylist.",
      "Theme: 'The 2035 Boardroom: Power, Tech & Elegance'.",
      "Performance duration: 8 to 10 minutes including intro track.",
    ],
    prizePool: "₹50,000 + Trophy & Swag",
    timing: "Day 1 - 5:30 PM to 8:30 PM",
    teamSize: "6 - 12 Members",
    iconName: "Sparkles",
  },
  {
    id: "mudra",
    name: "Mudra",
    tagline: "Learn Trading & Real-Time Investment Pit",
    category: "Algorithmic & Equity Trading",
    accentColor: "#3ddbb0", // mint
    accentBorder: "rgba(61, 219, 176, 0.4)",
    accentGlow: "rgba(61, 219, 176, 0.25)",
    description: "Master financial markets, order flow mechanics, and mock trading pits with simulated live market volatility and portfolio allocation.",
    longDescription:
      "A fast-paced mock trading floor where prices oscillate in real time. React to breaking market headlines, manage margin calls, execute derivatives hedges, and maximize Sharpe ratio before the closing bell.",
    perks: [
      "Real-time simulator terminal with high-frequency updates",
      "Workshops on algorithmic indicators & risk sizing",
      "Accreditation certificate for top performing traders",
    ],
    rules: [
      "Solo or Duo (1-2 participants).",
      "Initial starting capital: ₹1,00,00,000 virtual balance.",
      "Automated penalty for breach of risk management limits.",
    ],
    prizePool: "₹40,000 + Trading Pro Subscriptions",
    timing: "Day 2 - 10:30 AM to 2:30 PM",
    teamSize: "1 - 2 Members",
    iconName: "CandlestickChart",
  },
];
