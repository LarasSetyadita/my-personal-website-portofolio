/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      colors: {
        primary: "#FAF8F3",
        secondary: "#243027",
        accent: "#8FA98F",
        accent2: "#4F6B52",
        lightaccent: "#EDF1E7",
      },

      fontFamily: {
        display: ['"Space Grotesk"', "sans-serif"],
        sans: ["Inter", "sans-serif"],
      },
    },
  },

  plugins: [],
};