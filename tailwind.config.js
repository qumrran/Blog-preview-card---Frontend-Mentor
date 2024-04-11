/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'figtree': ['Figtree', 'sans-serif'],
      },
      colors: {
        customYellow: 'hsl(47, 88%, 63%)',
        customWhite: 'hsl(0, 0%, 100%)',
        customGray: 'hsl(0, 0%, 50%)',
        customBlack: 'hsl(0, 0%, 7%)',
      },
      boxShadow: {
        'custom': '7px 7px 0px 1px rgba(18, 18, 18, 1)', // Twój niestandardowy cień
      },
    },
  },
  plugins: [],
}

