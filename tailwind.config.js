/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'leftOrnek': "url('./assets/leftOrnek.webp')", // Path to your image
      },
      backgroundColor: {
        'dark-blue': '#000051',
        'custom-red': '#ED2E3C',
      },
      borderColor: {
        'custom-red': '#FF0013',
      },
      textColor: {
        'custom-red': '#FF0013',
      },
      fontFamily: {
        'formula1': ['Formula1', 'sans-serif'],
        'ubuntu': ['Ubuntu', 'sans-serif'],
        'timer': ['Timer', 'sans-serif']
      },
    },
  },
  plugins: [],
}

