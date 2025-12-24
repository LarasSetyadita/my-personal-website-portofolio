/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./public/**/*.{html,js}"],
    theme: {
      extend: {
        colors: {
          primary: "#D9D9D9",
          secondary: "#263652",
          accent: "#B77E23",
          lightaccent: "#C2AA71",
          accent2: "#6F2F06",
        },
        fontFamily: {
          biryani: ["'Biryani'", "sans-serif"],
          openSans: ['"Open Sans"', 'sans-serif']
        }
      },
    },
    plugins: [],
  }
  
  