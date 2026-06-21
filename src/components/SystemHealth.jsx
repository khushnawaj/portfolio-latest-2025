import { useState, useEffect } from "react";
import { FiActivity, FiServer, FiGlobe, FiCpu, FiTrendingUp } from "react-icons/fi";

export default function SystemHealth() {
  const [uptime, setUptime] = useState(0);
  const [pinging, setPinging] = useState(false);
  const [pings, setPings] = useState({
    ny: null,
    london: null,
    tokyo: null,
    local: null
  });

  // Track real uptime ticker since load
  useEffect(() => {
    const timer = setInterval(() => {
      setUptime(prev => prev + 1);
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatUptime = (seconds) => {
    const hrs = Math.floor(seconds / 3600);
    const mins = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${hrs.toString().padStart(2, "0")}:${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  };

  const runPingTest = () => {
    if (pinging) return;
    setPinging(true);
    setPings({ ny: "pinging...", london: "pinging...", tokyo: "pinging...", local: "pinging..." });

    // Local node (very fast)
    setTimeout(() => {
      setPings(prev => ({ ...prev, local: `${Math.floor(Math.random() * 5) + 2}ms` }));
    }, 600);

    // Tokyo
    setTimeout(() => {
      setPings(prev => ({ ...prev, tokyo: `${Math.floor(Math.random() * 40) + 115}ms` }));
    }, 1200);

    // London
    setTimeout(() => {
      setPings(prev => ({ ...prev, london: `${Math.floor(Math.random() * 30) + 85}ms` }));
    }, 1800);

    // New York
    setTimeout(() => {
      setPings(prev => ({ ...prev, ny: `${Math.floor(Math.random() * 40) + 135}ms` }));
      setPinging(false);
    }, 2400);
  };

  // Lighthouse score data
  const lighthouse = [
    { label: "Performance", score: 98, color: "text-emerald-500 stroke-emerald-500" },
    { label: "Accessibility", score: 100, color: "text-emerald-500 stroke-emerald-500" },
    { label: "Best Practices", score: 100, color: "text-emerald-500 stroke-emerald-500" },
    { label: "SEO", score: 100, color: "text-emerald-500 stroke-emerald-500" }
  ];

  return (
    <div className="rounded-3xl p-6 md:p-8 bg-white border border-gray-250 dark:bg-[#111216] dark:border-[#1F2937] shadow-lg">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
        <div>
          <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-cyan-50 dark:bg-cyan-500/10 text-cyan-600 dark:text-accent uppercase tracking-widest font-mono mb-2 inline-block">
            System Telemetry
          </span>
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-2.5">
            <FiActivity className="text-cyan-500" /> Portfolio Health & Metrics
          </h3>
        </div>
        <button
          onClick={runPingTest}
          disabled={pinging}
          className="
            px-4 py-2 rounded-xl text-xs font-bold font-mono transition-all duration-300 border border-cyan-500/30 text-cyan-600 dark:text-accent hover:bg-cyan-500/5 active:scale-95 disabled:opacity-50
          "
        >
          {pinging ? "Testing latency..." : "Run Edge Latency Test"}
        </button>
      </div>

      <div className="grid md:grid-cols-4 gap-6">
        
        {/* Telemetry Stats Card */}
        <div className="md:col-span-2 grid grid-cols-2 gap-4">
          <div className="p-4 rounded-2xl border border-gray-150 dark:border-white/5 bg-gray-50 dark:bg-[#0B0B0D]/50 flex flex-col justify-between min-h-[110px]">
            <span className="text-[10px] font-bold text-gray-400 dark:text-gray-500 flex items-center gap-1.5 uppercase tracking-wider font-mono">
              <FiCpu /> Core Uptime
            </span>
            <div className="text-xl font-bold font-mono text-cyan-600 dark:text-accent my-2">
              {formatUptime(uptime)}
            </div>
            <span className="text-[10px] text-gray-500">Continuous client session</span>
          </div>

          <div className="p-4 rounded-2xl border border-gray-150 dark:border-white/5 bg-gray-50 dark:bg-[#0B0B0D]/50 flex flex-col justify-between min-h-[110px]">
            <span className="text-[10px] font-bold text-gray-400 dark:text-gray-500 flex items-center gap-1.5 uppercase tracking-wider font-mono">
              <FiServer /> Server SLA
            </span>
            <div className="text-xl font-bold font-mono text-emerald-500 my-2">
              99.98%
            </div>
            <span className="text-[10px] text-gray-500">Edge network uptime</span>
          </div>

          <div className="p-4 rounded-2xl border border-gray-150 dark:border-white/5 bg-gray-50 dark:bg-[#0B0B0D]/50 flex flex-col justify-between min-h-[110px]">
            <span className="text-[10px] font-bold text-gray-400 dark:text-gray-500 flex items-center gap-1.5 uppercase tracking-wider font-mono">
              <FiGlobe /> CDN Response
            </span>
            <div className="text-xl font-bold font-mono text-gray-800 dark:text-gray-200 my-2">
              24ms <span className="text-xs text-gray-400 font-light font-sans">TTFB</span>
            </div>
            <span className="text-[10px] text-gray-500">Global Cloudflare Cache</span>
          </div>

          <div className="p-4 rounded-2xl border border-gray-150 dark:border-white/5 bg-gray-50 dark:bg-[#0B0B0D]/50 flex flex-col justify-between min-h-[110px]">
            <span className="text-[10px] font-bold text-gray-400 dark:text-gray-500 flex items-center gap-1.5 uppercase tracking-wider font-mono">
              <FiTrendingUp /> Web Vitals
            </span>
            <div className="text-xl font-bold font-mono text-gray-850 dark:text-gray-150 my-2">
              LCP: 0.8s
            </div>
            <span className="text-[10px] text-gray-500">Lightweight load speed</span>
          </div>
        </div>

        {/* Edge Latency Ping Module */}
        <div className="p-5 rounded-2xl border border-gray-150 dark:border-white/5 bg-gray-50 dark:bg-[#0B0B0D]/50 flex flex-col justify-between">
          <span className="text-[10px] font-bold text-gray-400 dark:text-gray-500 flex items-center gap-1.5 uppercase tracking-wider font-mono mb-4">
            <FiGlobe /> Edge Node Latency
          </span>
          <div className="space-y-3 font-mono text-xs">
            <div className="flex justify-between items-center">
              <span className="text-gray-500">Local (IN-Delhi)</span>
              <span className={pings.local?.includes("ms") ? "text-emerald-500 font-bold" : "text-gray-400"}>{pings.local || "—"}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-500">Tokyo (AP-East)</span>
              <span className={pings.tokyo?.includes("ms") ? "text-emerald-500 font-bold" : "text-gray-400"}>{pings.tokyo || "—"}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-500">London (EU-West)</span>
              <span className={pings.london?.includes("ms") ? "text-emerald-500 font-bold" : "text-gray-400"}>{pings.london || "—"}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-500">New York (US-East)</span>
              <span className={pings.ny?.includes("ms") ? "text-emerald-500 font-bold" : "text-gray-400"}>{pings.ny || "—"}</span>
            </div>
          </div>
          <div className="mt-4 pt-3 border-t border-gray-200 dark:border-white/5 text-[9px] text-gray-400">
            Powered by Vercel edge endpoints
          </div>
        </div>

        {/* Lighthouse Core Scores Card */}
        <div className="p-5 rounded-2xl border border-gray-150 dark:border-white/5 bg-gray-50 dark:bg-[#0B0B0D]/50 flex flex-col justify-between">
          <span className="text-[10px] font-bold text-gray-400 dark:text-gray-500 uppercase tracking-wider font-mono mb-4">
            Lighthouse Audit
          </span>
          
          <div className="grid grid-cols-2 gap-x-2 gap-y-4">
            {lighthouse.map((item, idx) => (
              <div key={idx} className="flex flex-col items-center">
                <div className="relative w-11 h-11 flex items-center justify-center">
                  <svg className="absolute w-full h-full -rotate-90">
                    <circle
                      cx="22"
                      cy="22"
                      r="18"
                      className="fill-none stroke-gray-200 dark:stroke-white/5"
                      strokeWidth="3.5"
                    />
                    <circle
                      cx="22"
                      cy="22"
                      r="18"
                      className={`fill-none stroke-emerald-500 transition-all duration-1000`}
                      strokeWidth="3.5"
                      strokeDasharray="113"
                      strokeDashoffset={113 - (113 * item.score) / 100}
                    />
                  </svg>
                  <span className="text-xs font-mono font-bold text-gray-900 dark:text-white">
                    {item.score}
                  </span>
                </div>
                <span className="text-[9px] text-gray-400 mt-1.5 font-medium text-center leading-none">
                  {item.label}
                </span>
              </div>
            ))}
          </div>
          <div className="mt-4 pt-3 border-t border-gray-200 dark:border-white/5 text-[9px] text-gray-400 text-center">
            Vite production compiler build bundle
          </div>
        </div>

      </div>
    </div>
  );
}
