/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  mode:"jit",
  theme: {
    extend: {
      colors: {
        primary: "#00040f",
        secondary: "#FFD700",
        dimWhite: "rgba(255, 255, 255, 0.7)",
        dimOrange: "rgba(255, 188, 0, 0.1))",
      },
      fontFamily: {
        montserrat: ["Montserrat", "san-serif"],
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
}

