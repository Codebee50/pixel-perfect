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
        'black100': '#01060E',
        'green200': '#f0f9f5',
        'whatsappgreen': '#128C7E',
        "white-400": "rgba(255, 255, 255, 0.80)"
        
      },
      screens: {
        'tab-one': '1060px',
        'tab-956': '956px',
        'tab-400': '400px',
        'tab-450': '450px',
        'tab-500': '500px',
        'tab-350px': '350px'
      }
    },
  },
  plugins: [],
}