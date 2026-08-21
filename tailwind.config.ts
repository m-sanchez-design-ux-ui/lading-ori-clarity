import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./client/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
        // Primitives: blue-clarity-ai scale (synced from Figma)
        "blue-clarity-ai": {
          50: "#F4F7FD",
          100: "#BFD3FA",
          200: "#6699FF",
          300: "#2F74FF",
          400: "#0052F6",
          500: "#0041C4",
          600: "#003399",
          700: "#002570",
          800: "#00194A",
          900: "#000F2D",
          950: "#000714",
        },
        // Semantic: brand colors (aliased from blue-clarity-ai)
        "brand-darkest": "#00194A", // blue-clarity-ai/800
        "brand-dark": "#002570", // blue-clarity-ai/700
        "brand-primary": "#003399", // blue-clarity-ai/600
        "brand-light": "#6699FF", // blue-clarity-ai/200
        "brand-bg": "#BFD3FA", // blue-clarity-ai/100
        // Semantic: text colors
        "text-primary": "#6B7280", // gray/500
        "text-paragraph": "#1F2937", // gray/800
        "text-title": "#374151", // gray/700
        "text-accent": "#003399", // = brand-primary
        "text-button": "#002570", // = brand-dark
        "text-button-pressed": "#00194A", // = brand-darkest
        // Semantic: surface colors
        "surface-primary": "#BFD3FA", // blue-clarity-ai/100
        "surface-light": "#F4F7FD", // blue-clarity-ai/50
        "surface-button-default": "#6699FF", // blue-clarity-ai/200
        "surface-button-pressed": "#2F74FF", // blue-clarity-ai/300
        "surface-button-hover": "rgba(102, 153, 255, 0.6)", // blue-clarity-ai/200-70
        "surface-navbar": "rgba(255, 255, 255, 0.7)", // White/white-70
        // Legacy oc-gray-* (kept, still used across components)
        "oc-gray-700": "#374151",
        "oc-gray-800": "#1F2937", // = text/paragraph
        "oc-gray-500": "#6B7280", // era undefined, causaba texto sin color en el formulario
        "oc-gray-400": "#9CA3AF", // era undefined, causaba placeholders sin color
        "oc-gray-300": "#D1D5DB",
        "oc-gray-200": "#E5E7EB",
        "oc-gray-50": "#F9FAFB", // era undefined, causaba inputs sin fondo
        "oc-white": "#FFFFFF",
      },
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
