/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: {
          50: "#eff6ff",
          100: "#dbeafe",
          200: "#bfdbfe",
          300: "#93c5fd",
          400: "#60a5fa",
          500: "#3b82f6",
          600: "#2563eb",
          700: "#1d4ed8",
          800: "#1e40af",
          900: "#1e3a8a",
          950: "#172554",
        },
        primarycolor: "#fff",
        secondarycolor: "rgba(255, 255, 255, 0.6)",
        bordercolor: "slate-500",
        footercolor: "slate-400",
        bgcolor: "linear-gradient(180deg, #374151 0%, #111827 100%)",
      },
      variants: {
        extend: { typography: ["dark"] },
      },
      fontFamily: {
        "sans-serif": ["Nunito", ...defaultTheme.fontFamily.sans],
      },
    },
    // fontFamily: {
    //   "sans-serif": ["Nunito", "sans-serif"],
    // },
  },

  plugins: [require("@tailwindcss/typography")],

  darkMode: "media",
};
