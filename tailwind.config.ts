import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Refined, dialed-back premium palette derived from brief
        // (deeper rose instead of candy-pink, deeper violet, kept cyan as data accent)
        rose: {
          50: "#FDF2F6",
          100: "#FCE4ED",
          200: "#F9C7DA",
          300: "#F39DBC",
          400: "#E76A98",
          500: "#D6336C", // primary
          600: "#B92558",
          700: "#971D48",
          800: "#7A1A3D",
          900: "#671A36",
        },
        violet: {
          50: "#F4F1FD",
          100: "#E6DEFA",
          200: "#CCBBF5",
          300: "#A98EEA",
          400: "#8B66DD",
          500: "#6D28D9", // secondary
          600: "#5B1FB8",
          700: "#4A1C93",
          800: "#3D1A75",
          900: "#33195F",
        },
        cyan: {
          50: "#ECFEFF",
          100: "#CFFAFE",
          200: "#A5F3FC",
          300: "#67E8F9",
          400: "#22D3EE",
          500: "#06B6D4", // accent
          600: "#0891B2",
          700: "#0E7490",
          800: "#155E75",
          900: "#164E63",
        },
        ink: {
          950: "#070B16",
          900: "#0B1120", // dark bg
          800: "#0F172A",
          700: "#131B2E",
          600: "#1A2438",
          500: "#222E47",
        },
      },
      fontFamily: {
        display: ["var(--font-fraunces)", "Georgia", "serif"],
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "mesh-light":
          "radial-gradient(at 20% 20%, rgba(214,51,108,0.10) 0px, transparent 50%), radial-gradient(at 80% 0%, rgba(109,40,217,0.10) 0px, transparent 50%), radial-gradient(at 50% 90%, rgba(6,182,212,0.08) 0px, transparent 50%)",
        "mesh-dark":
          "radial-gradient(at 20% 20%, rgba(214,51,108,0.16) 0px, transparent 50%), radial-gradient(at 80% 0%, rgba(109,40,217,0.18) 0px, transparent 50%), radial-gradient(at 50% 90%, rgba(34,211,238,0.10) 0px, transparent 50%)",
      },
      boxShadow: {
        glass: "0 8px 32px 0 rgba(15, 23, 42, 0.08)",
        "glass-dark": "0 8px 32px 0 rgba(0, 0, 0, 0.45)",
        glow: "0 0 40px -8px rgba(214, 51, 108, 0.35)",
        "glow-cyan": "0 0 40px -8px rgba(6, 182, 212, 0.35)",
      },
      animation: {
        "pulse-slow": "pulse-slow 3s ease-in-out infinite",
        float: "float 6s ease-in-out infinite",
        "spin-slow": "spin 12s linear infinite",
      },
      keyframes: {
        "pulse-slow": {
          "0%, 100%": { opacity: "0.6" },
          "50%": { opacity: "1" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
      },
      backdropBlur: {
        xs: "2px",
      },
    },
  },
  plugins: [],
};
export default config;
