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
        primary: {"50":"#eff6ff","100":"#dbeafe","200":"#bfdbfe","300":"#93c5fd","400":"#60a5fa","500":"#3b82f6","600":"#2563eb","700":"#1d4ed8","800":"#1e40af","900":"#1e3a8a","950":"#172554"},
        primarycolor: "#fff",
        secondarycolor: "rgba(255, 255, 255, 0.6)",
        bordercolor: "slate-500",
        footercolor: "slate-400",
        bgcolor: "linear-gradient(180deg, #374151 0%, #111827 100%)",
      },
      variants: {
        extend: { typography: ["dark"] }
      },
      // typography(theme) {
      //   return {
      //     dark: {
      //       css: {
      //         color: theme("colors.gray.300"),
      //         '[class~="lead"]': { color: theme("colors.gray.400") },
      //         a: { color: theme("colors.gray.100") },
      //         strong: { color: theme("colors.gray.100") },
      //         "ul > li::before": { backgroundColor: theme("colors.gray.700") },
      //         hr: { borderColor: theme("colors.gray.800") },
      //         blockquote: {
      //           color: theme("colors.gray.100"),
      //           borderLeftColor: theme("colors.gray.800"),
      //         },
      //         h1: { color: theme("colors.gray.100") },
      //         h2: { color: theme("colors.gray.100") },
      //         h3: { color: theme("colors.gray.100") },
      //         h4: { color: theme("colors.gray.100") },
      //         code: { color: theme("colors.gray.100") },
      //         "a code": { color: theme("colors.gray.100") },
      //         pre: {
      //           color: theme("colors.gray.200"),
      //           backgroundColor: theme("colors.gray.800"),
      //         },
      //         thead: {
      //           color: theme("colors.gray.100"),
      //           borderBottomColor: theme("colors.gray.700"),
      //         },
      //         "tbody tr": { borderBottomColor: theme("colors.gray.800") },
      //       },
      //     },
      //   };
      // },
    },
  },

  plugins: [require("@tailwindcss/typography")],

  darkMode: "media",
};
