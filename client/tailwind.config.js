/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#ffce1a",
        secondary: "#0d0842",
        bgcolor: "#f3f3f3",
        fav: "#ff5841",
      },
      fontFamily: {
        primary: ["Montserrat", "sans-serif"],
        secondary: ["Nunito", "sans-serif"],
      },
    },
  },
  plugins: [],
}

