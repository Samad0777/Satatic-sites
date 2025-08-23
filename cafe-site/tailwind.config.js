/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    backgroundImage: {
      'logo': "url('./src/images/logo.png')",
      'home': "url('./src/images/home.jpg')",
      'coffe': "url('./src/images/coffe.jpg')",
      'pastries': "url('./src/images/Pastries.jpg')",
      'achievements': "url('./src/images/achievement.jpg')",
    },
    extend: {
      fontFamily: {
        'headline': ['"Mozilla Headline"', 'sans-serif'],
      },
      colors: {
        'brand-brown': '#2a1a1f', // YE NAYA COLOR ADD KARO
      },
    },
  },
  plugins: [],
}