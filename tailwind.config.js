/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'nav-texture': "url('./imgs/eraserB2.png')"
      }
    },
  },
  plugins: [],
}

