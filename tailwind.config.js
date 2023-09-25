/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      //theme sun
      white: "#FDFEFE",
      cWhite: "#F2F3F4",
      shadowSun: "#D4D5D6",
      
      //theme moon
      black: "#1E1E1E",
      cDark: "#727272",
      shadowMoon: "#3A3A3A",

      //reacts colors
      hrtRed: "#F31636",
      sdBlue: "#235AC1",
      cmmtGreen: "#A0DD25",
    },
    extend: {},
  },
  plugins: [],
}

