import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./features/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "1.5rem",
      screens: { "2xl": "1440px" },
    },
    extend: {
      colors: {
        background: "#17181C",
        surface: "#1D1F24",
        card: "#25272E",
        border: "#34363E",
        input: "#34363E",
        ring: "#EAB63C",
        primary: {
          DEFAULT: "#EAB63C",
          foreground: "#1C1608",
          hover: "#D9A428",
          muted: "#4A3A12",
        },
        accent: {
          DEFAULT: "#C08A2E",
          foreground: "#1C1608",
          hover: "#A8781F",
        },
        success: {
          DEFAULT: "#22C55E",
          foreground: "#052e18",
          muted: "#14532D",
        },
        warning: {
          DEFAULT: "#F97316",
          foreground: "#2b1204",
          muted: "#7C2D12",
        },
        error: {
          DEFAULT: "#EF4444",
          foreground: "#450a0a",
          muted: "#7F1D1D",
        },
        foreground: "#F4F2EA",
        muted: {
          DEFAULT: "#9C9AA1",
          foreground: "#726F78",
        },
        secondary: {
          DEFAULT: "#25272E",
          foreground: "#F4F2EA",
        },
        destructive: {
          DEFAULT: "#EF4444",
          foreground: "#F4F2EA",
        },
        popover: {
          DEFAULT: "#25272E",
          foreground: "#F4F2EA",
        },
      },
      fontFamily: {
        sans: [
          "var(--font-poppins)",
          "ui-sans-serif",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "system-ui",
          "sans-serif",
        ],
        mono: [
          "var(--font-jetbrains-mono)",
          "ui-monospace",
          "SFMono-Regular",
          "Menlo",
          "monospace",
        ],
      },
      fontSize: {
        xs: ["0.8125rem", { lineHeight: "1.15rem" }],
        sm: ["0.9375rem", { lineHeight: "1.4rem" }],
        base: ["1rem", { lineHeight: "1.6rem" }],
        lg: ["1.1875rem", { lineHeight: "1.75rem" }],
        xl: ["1.4375rem", { lineHeight: "1.9rem" }],
        "2xl": ["1.75rem", { lineHeight: "2.15rem" }],
        "3xl": ["2.25rem", { lineHeight: "2.6rem" }],
        "4xl": ["2.75rem", { lineHeight: "3.1rem" }],
      },
      borderRadius: {
        sm: "6px",
        DEFAULT: "10px",
        md: "12px",
        lg: "16px",
        xl: "20px",
      },
      boxShadow: {
        panel: "0 1px 2px 0 rgb(0 0 0 / 0.4)",
        elevated: "0 4px 24px -4px rgb(0 0 0 / 0.5)",
        ring: "0 0 0 3px rgb(234 182 60 / 0.18), 0 0 24px -6px rgb(234 182 60 / 0.45)",
      },
      keyframes: {
        "fade-in": { from: { opacity: "0" }, to: { opacity: "1" } },
        "slide-up": {
          from: { opacity: "0", transform: "translateY(4px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        pulse: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.4" },
        },
      },
      animation: {
        "fade-in": "fade-in 0.15s ease-out",
        "slide-up": "slide-up 0.2s ease-out",
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "pulse-slow": "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
