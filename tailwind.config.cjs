/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens:{
        'sm': {
          'max': '576px'
        }
      },
      spacing:{
        '40px':'40px'
      }
    },
  },
  plugins: [],
}
