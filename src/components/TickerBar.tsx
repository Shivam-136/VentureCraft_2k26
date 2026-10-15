"use client";

import { useEffect, useState } from "react";
import { ArrowUpRight, ArrowDownRight, Zap } from "lucide-react";

export default function TickerBar() {
  const [tickers, setTickers] = useState([
    { symbol: "$VCRAFT", price: "₹2,480.50", change: "+14.2%", isUp: true },
    { symbol: "$KARVAN", price: "₹1,895.00", change: "+9.8%", isUp: true },
    { symbol: "$MUDRA", price: "₹3,410.20", change: "+18.4%", isUp: true },
    { symbol: "ANGEL_INDEX", price: "4,920.80", change: "+6.1%", isUp: true },
    { symbol: "RUNWAY_YIELD", price: "100.0%", change: "+0.0%", isUp: true },
    { symbol: "SEED_CAPITAL", price: "₹30,000", change: "+25.0%", isUp: true },
    { symbol: "S&P_VENTURE", price: "5,820.40", change: "+4.3%", isUp: true },
    { symbol: "COUTURE_RATIO", price: "9.85", change: "+12.1%", isUp: true },
  ]);

  // Subtle real-time oscillation to feel alive like Bloomberg / TradingView
  useEffect(() => {
    const interval = setInterval(() => {
      setTickers((prev) =>
        prev.map((t) => {
          if (Math.random() > 0.6) {
            const delta = (Math.random() * 0.4 - 0.15).toFixed(2);
            const currentPct = parseFloat(t.change);
            const newPct = (currentPct + parseFloat(delta)).toFixed(1);
            return {
              ...t,
              change: `${parseFloat(newPct) >= 0 ? "+" : ""}${newPct}%`,
              isUp: parseFloat(newPct) >= 0,
            };
          }
          return t;
        })
      );
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full bg-[#07131f] border-b border-[#1f3a56] py-2 px-4 overflow-hidden select-none">
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-1.5 px-2.5 py-0.5 rounded bg-[#0f2236] border border-[#1f3a56] text-[11px] font-mono text-[#f5b83d] shrink-0">
          <Zap className="w-3 h-3 text-[#f5b83d] animate-pulse" />
          <span>LIVE TICKER</span>
        </div>

        <div className="overflow-hidden w-full">
          <div className="animate-marquee-left flex items-center gap-8 font-mono text-xs">
            {tickers.concat(tickers).map((t, index) => (
              <div key={index} className="flex items-center gap-2 shrink-0">
                <span className="text-[#93a8bd] font-medium">{t.symbol}</span>
                <span className="text-[#e8eef4] font-bold">{t.price}</span>
                <span
                  className={`flex items-center text-[11px] font-bold ${
                    t.isUp ? "text-[#3ddbb0]" : "text-[#ff6b57]"
                  }`}
                >
                  {t.isUp ? (
                    <ArrowUpRight className="w-3 h-3" />
                  ) : (
                    <ArrowDownRight className="w-3 h-3" />
                  )}
                  {t.change}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
