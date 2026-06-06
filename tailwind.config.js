/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "#2BA8E0",
          dark: "#1C8AC0",
          deep: "#1A6E96",
          light: "#E8F6FC",
        },
        ink: {
          DEFAULT: "#1A2330",
          soft: "#5B6573",
          muted: "#6B7280",
        },
        surface: {
          DEFAULT: "#FFFFFF",
          alt: "#F5F7FA",
          footer: "#EDEFF2",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "serif"],
        body: ["var(--font-body)", "sans-serif"],
      },
      maxWidth: {
        container: "1200px",
      },
      boxShadow: {
        card: "0 4px 24px rgba(26, 35, 48, 0.06)",
        cardHover: "0 12px 32px rgba(26, 35, 48, 0.12)",
      },
    },
  },
  plugins: [],
};
