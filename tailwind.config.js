/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#371A45", //#050816
        secondary: "#FFB200",
        tertiary: "#9B8DA2",
        "primary-dark": "#07141A",
        "button-hover": "#301934",
        "white-100": "#f3f3f3",
        "blue-main": "#4169e1",
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/bg.jpg')",
      },
    },
  },
  plugins: [],
};
