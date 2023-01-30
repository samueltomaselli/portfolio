/** @type{import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          100: "#38BDF8",
          200: "#240046",
          300: "#5a189a",
          400: "#22d3ee",
          500: "#06b6d4",
          600: "#0891b2",
          700: "#0e7490",
          800: "#155e75",
          900: "#0E0E0F",
        },
      },
    },
    fontFamily: {
      primary: ["Raleway", "sans-serif"],
    },
  },
  plugins: [],
  darkMode: "class",
};
