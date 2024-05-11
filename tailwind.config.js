/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'steradian': ['Steradian', 'serif']
      },
      colors:{
        'purple100': '#484ca1',
        'purple200': '#4B50EC',
        'gray100': '#a4abbd',
        'green100': '#31AA8E'
      },
      screens: {
        'tab-one': '850px'
      }
    },
  },
  plugins: [],
}