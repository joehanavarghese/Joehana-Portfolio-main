
import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        terminal: {
          background: "#0C0C0C",
          text: "#00FF9C",
          dim: "#00805E",
          cursor: "#00FF9C",
          accent: "#00FFFF",
        },
      },
      animation: {
        blink: "blink 1s step-end infinite",
        "text-glow": "text-glow 1s ease-in-out infinite alternate",
        scanline: "scanline 8s linear infinite",
        glitch: "glitch 0.5s ease-in-out",
        typing: "typing 3.5s steps(30, end)",
        "fade-in": "fade-in 0.5s ease-out",
        fall: "fall 20s linear infinite",
        pulse: "pulse 2s infinite",
      },
      keyframes: {
        blink: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0" },
        },
        "text-glow": {
          "0%": { textShadow: "0 0 4px #00FF9C" },
          "100%": { textShadow: "0 0 8px #00FF9C" },
        },
        scanline: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(100%)" },
        },
        glitch: {
          "0%": { transform: "translate(0)" },
          "20%": { transform: "translate(-2px, 2px)" },
          "40%": { transform: "translate(-2px, -2px)" },
          "60%": { transform: "translate(2px, 2px)" },
          "80%": { transform: "translate(2px, -2px)" },
          "100%": { transform: "translate(0)" },
        },
        typing: {
          "0%": { width: "0" },
          "100%": { width: "100%" },
        },
        "fade-in": {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fall: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(100vh)" },
        },
        pulse: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.5" },
        },
      },
      fontFamily: {
        mono: ["JetBrains Mono", "monospace"],
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
