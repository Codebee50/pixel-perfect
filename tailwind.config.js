/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'steradian': ['Steradian', 'serif'],
        'greatvibes': ['Great Vibes', 'cursive'],
        'badscript': ['Bad Script', 'cursive'],
        'dancingscript': ['Dancing Script', 'cursive']
      },
      colors:{
        'bg-overlay': 'rgba(0, 0, 0, 0.5)',
        'purple100': '#484ca1',
        'purple200': '#4B50EC',
        'gray100': '#a4abbd',
        'green100': '#31AA8E',
        'black100': '#01060E'
      },
      screens: {
        'tab-one': '1060px',
        'tab-956': '956px',
        'tab-400': '400px'
      }
    },
  },
  plugins: [],
}