import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        primary: "#8B5CF6", // Purple
        secondary: "#10B981", // Emerald
        accent: "#F59E0B", // Amber
        dark: {
          100: "#1E1E1E",
          200: "#171717",
          300: "#0F0F0F",
          400: "#080808",
        },
        light: {
          100: "#EDEDED",
          200: "#E5E5E5",
          300: "#D4D4D4",
          400: "#A3A3A3",
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease-in-out",
        "slide-up": "slideUp 0.6s ease-in-out",
        "slide-down": "slideDown 0.6s ease-in-out",
        "slide-left": "slideLeft 0.6s ease-in-out",
        "slide-right": "slideRight 0.6s ease-in-out",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { transform: "translateY(20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        slideDown: {
          "0%": { transform: "translateY(-20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        slideLeft: {
          "0%": { transform: "translateX(20px)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
        slideRight: {
          "0%": { transform: "translateX(-20px)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
      },
    },
  },
  darkMode: "class",
  plugins: [],
};

export default config; 