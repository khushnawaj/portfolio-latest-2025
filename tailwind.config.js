/** tailwind.config.js */

export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        bg: "#0B0B0D",
        surface: "#111216",
        border: "#1F2937",
        text: "#E5E7EB",
        muted: "#9CA3AF",
        accent: "#38BDF8",
        accentSoft: "#0EA5E9"
      },
      fontFamily: {
        body: ["Inter", "sans-serif"],
        mono: ["VT323", "monospace"]
      }
    }
  },
  plugins: []
};
