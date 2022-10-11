/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');

module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    header: {
      height: '5rem',
    },
    footer: {
      height: '5rem',
    },
    extend: {
      colors: {
        primaryNavy: '#001B44',
        primaryOcean: '#00457C',
        secondaryCobalt: '#3167B8',
        offWhite: '#F8F8F9',
        grayScale01: '#F0F0F0',
        grayScale02: '#E4E4E8',
        grayScale03: '#C9CAD0',
        grayScale04: '#AEAFB9',
        grayScale05: '#9395A1',
        grayScale06: '#6E7079',
        grayScale07: '#494A51',
        black01: '#252528',
        black02: '#222222',
        tableTint: '#EDF0F5',
        hover01: '#2F77E2',
        hover02: '#E4EBF7',
        hover03: '#DDE4EF',
        hover04: '#25608F',
        hover05: '#253C5F',
      },
      screens: {
        print: { raw: 'print' },
      },
    },
  },
  plugins: [],
};
