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
        primary: '#1890ff',
        teal: '#61dafb',
        grayScale01: '#F0F0F0',
        grayScale02: '#E4E4E8',
        grayScale03: '#d9d9d9',
        grayScale04: '#AEAFB9',
        grayScale05: '#9395A1',
        grayScale06: '#6E7079',
        grayScale07: '#494A51',
        offWhite: '#F8F8F9',
      },
      screens: {
        print: { raw: 'print' },
      },
    },
  },
  plugins: [],
};
