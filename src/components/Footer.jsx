import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-[#0B0B0D] border-t border-gray-100 dark:border-white/5 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col items-center text-center gap-8">
          
          {/* Status Section */}
          <div className="flex flex-col items-center gap-3">
            <h4 className="font-bold text-gray-900 dark:text-white uppercase text-[10px] tracking-[0.2em] opacity-50">Status</h4>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-50 dark:bg-emerald-500/10 border border-emerald-100 dark:border-emerald-500/20 text-emerald-700 dark:text-emerald-400 text-xs font-semibold">
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500"></span>
              </span>
              Available for Hire
            </div>
          </div>

          {/* Divider */}
          <div className="w-12 h-px bg-gray-200 dark:bg-white/10" />

          {/* Bottom Section */}
          <div className="flex flex-col items-center gap-4">
            <p className="text-sm text-gray-500 dark:text-gray-500 font-medium">
              © {new Date().getFullYear()} Khushnawaj. All rights reserved.
            </p>
            <div className="flex gap-6 text-xs font-bold text-gray-400 dark:text-gray-600 tracking-wider">
              <span className="hover:text-cyan-600 dark:hover:text-accent transition-colors cursor-pointer uppercase">Privacy Policy</span>
              <span className="hover:text-cyan-600 dark:hover:text-accent transition-colors cursor-pointer uppercase">Terms of Service</span>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
}
