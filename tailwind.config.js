/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ['Poppins', 'sans-serif'],
    },
    extend: {
      colors: {
        bgpurple: '#DAC7E3',
        bgblue: '#B2D3E1',
      },
    },
  },
  plugins: [],
}

