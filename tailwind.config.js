const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html'],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        lg: '0rem',
      },
      screens: {
        lg: '1200px',
      },
    },
    extend: {
      colors: {
        bgColor: '#F7F7F7',
        primary: '#282828',
        secondary: '#F7F7F7',
        accent: '#0147FF',
        gray: '#F1F1F1',
        dark: '#1D1D1B',
        light: '#F2F2F2',
      },
      fontFamily: {
        bebasNeue: ['"Bebas Neue"', ...defaultTheme.fontFamily.sans],
        robotoFlex: ['"Roboto Flex"', ...defaultTheme.fontFamily.sans],
        robotoCondensed: [
          '"Roboto Condensed"',
          ...defaultTheme.fontFamily.sans,
        ],
        magra: ['"Magra"', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
}
