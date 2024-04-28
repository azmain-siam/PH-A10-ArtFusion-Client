/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
        spartan: ["League Spartan", "sans-serif"],
      },
      boxShadow: {
        "4xl": "0 5px 15px rgba(0, 0, 0, 0.20)",
      },
    },
  },
  plugins: [require("daisyui")],
};
