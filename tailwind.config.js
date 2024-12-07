/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
    extend: {
      fontFamily: {
        yatra: ["Yatra One", "system-ui"],
        asapCondensed: ["Asap Condensed", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
      },
      colors: {
        primary: "#3F3F67",
        secondary: "#6B6D92",
        neutral: "#D1D2F1",
      },
    },
  },
  plugins: [],
};
