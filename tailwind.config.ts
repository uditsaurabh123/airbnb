import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
      extend: {
        fontFamily: {
          sans: ["var(--font-geist-sans)","Poppins", "sans-serif", "ui-sans-serif"],
          mono: ["var(--font-geist-mono)", "monospace"],  
          },
          gridTemplateColumns: {
            "70/30":"70% 28%",
          },
          
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
} satisfies Config;
