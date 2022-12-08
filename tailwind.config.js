/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      poppins: ['Poppins', 'sans-serif'],
    },
    extend: {
      colors: {
        white: '#fffefe',
        cream: '#f4f5fd',
        primary: '#ffe6d1',
        secondary: '#495bba',
        tertiary: '#feda8f',
        quaternary: '#fe91a4',
      },
    },
  },
  plugins: [],
}

