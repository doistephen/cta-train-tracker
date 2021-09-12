const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  mode: 'jit',
  purge: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      'display-primary': '#182D34',
      'display-secondary': '#5D6C71',
      accent: '#00A1DE',
      'background-primary': '#FFFFFF',
      'background-secondary': '#F7F7F7',
      divider: '#E9EFF1',
      'on-time': '#42BC77',
      'is-fault': '#FFC735',
      'is-delayed': '#FF6E64',
    },
    fontSize: {
      headline: '30px',
      lg: '20px',
      DEFAULT: '16px',
      sm: '14px',
    },
    letterSpacing: {
      tighter: '-.02em',
      tight: '-.01em',
    },
    borderRadius: {
      DEFAULT: '10px',
      full: '999px',
    },
    boxShadow: {
      DEFAULT: '0px 2px 16px -3px rgba(0, 0, 0, 0.38)',
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
