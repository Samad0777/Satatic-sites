/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.{html,js}'],
  theme: {
    extend: {
      fontFamily: {
        'anton': ['Anton', 'sans-serif'], 
        'roboto': ['Roboto', 'sans-serif'], 
      },
    },
  },
  plugins: [],
}