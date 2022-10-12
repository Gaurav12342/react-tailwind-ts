/** @type {import('tailwindcss').Config} */

// font-family: 'Alkalami', serif;
// font-family: 'Roboto Slab', serif;
// font-family: 'Source Serif Pro', serif;
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        alkalami: ['Alkalami', 'serif'],
        alkalamiSerif: ['Alkalami', 'serif',
          'font-family', 'Source Serif Pro', 'serif'],
        robotSlabSerif: ['Roboto Slab', 'serif'],
        robotSlabSerifPro: ['Source Serif Pro', 'serif'],
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ]
}
