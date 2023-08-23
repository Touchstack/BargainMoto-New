/** @type {import('tailwindcss').Config} */
export default {
  content: [
     "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: { 
      fontFamily: {
        Thin: ["Montserrat-Thin", "sans-serif"],
        ExtraLight: ["Montserrat-ExtraLight", "sans-serif"],
        Light: ["Montserrat-Light", "sans-serif"],
        Bold: ["Montserrat-Bold", "sans-serif"],
        Regular: ["Montserrat-Regular", "sans-serif"],
        SemiBold: ["Montserrat-SemiBold", "sans-serif"],
      },
    },
  },

  plugins: [],
};


