/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        dark: "#121212",
        darkGray: "#1C1C1C",
      },
      fontFamily: {
        roboto: ["Roboto"],
        montserrat: ["Montserrat"],
      },
    },
  },
  plugins: [],
};
