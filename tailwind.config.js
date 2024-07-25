/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html'],
  theme: {
    container: {
      center: true,
      padding: '16px',
    },
    extend: {
      colors: {
        primary: "#6A7D6A",
        dark: "#1c1917",
        secondary:"#737373"
      },
      screens: {
        '2xl': '1320px',
      }
    },
  },
  plugins: [],
}

