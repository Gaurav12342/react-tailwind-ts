/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      primary: "#1976d2"
    },
    extend: {
      fontFamily: {
        alkalami: ['Alkalami', 'serif'],
        alkalamiSerif: ['Alkalami', 'serif',
          'font-family', 'Source Serif Pro', 'serif']
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ]
}
