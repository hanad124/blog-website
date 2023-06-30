/** @type {import('tailwindcss').Config} */
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
        primarycolor: "#fff",
        secondarycolor: "rgba(255, 255, 255, 0.6)",
        bordercolor: "slate-500",
        footercolor: "slate-400",
        bgcolor: "linear-gradient(180deg, #374151 0%, #111827 100%)",
      },
      variants: {
        position: ["sticky"],
      },
    },
  },

  plugins: [require("@tailwindcss/typography")],
};
