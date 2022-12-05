/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      default: ['Poppins', 'sans-serif'],
    },
    extend: {
      colors: {
        bgpurple: '#DAC7E3',
        bgblue: '#B2D3E1',
        white: '#f5f5f4',
        primary: '#f5f4ea',
        blue: '#3d90c8',
        purple: '#894cb9'
      },
    },
  },
  plugins: [],
}

