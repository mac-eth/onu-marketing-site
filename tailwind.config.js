/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      default: ['Outfit', 'sans-serif'],
    },
    extend: {
      colors: {
        white: '#f5f5f4',
        primary: '#417b5a',
        secondary: '#3454D1',
        tertiary: '#D1345B',
      },
    },
  },
  plugins: [],
}

