/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    './src/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'livid': {
          100: '#485769',
          200: '#37475A',
          300: '#232F3E',
          400: '#232f3e',
          500: '#131A22',
          600: '#0F1111',
        }
      }
    },
  },
  plugins: [],
};
