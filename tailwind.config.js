const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'primary-red': 'hsl(12, 88%, 59%)',
        'primary-blue': 'hsl(228, 39%, 23%)',
        'gray-blue': 'hsl(227, 12%, 61%)',
        'dark-blue': 'hsl(233, 12%, 13%)',
        'pale-blue': 'hsl(13, 100%, 96%)',
        'light-gray': 'hsl(0, 0%, 98%)',
        'light-red': 'hsl(12, 88%, 70%)',
        'light-dark': 'rgba(0, 0, 0, 0.3)',
      },
      fontFamily: {
        sans: ['Be Vietnam Pro', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
