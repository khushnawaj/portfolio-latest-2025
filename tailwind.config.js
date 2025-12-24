export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#0B0F14",
        neon: "#00FF9C",
        muted: "#8892B0",
        panel: "#111827"
      },
      fontFamily: {
        arcade: ["VT323", "monospace"],
        body: ["Inter", "sans-serif"]
      }
    }
  },
  plugins: []
};
