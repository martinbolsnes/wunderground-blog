/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        black: '#070606',
        white: '#FFFDFA',
        gray: '#6D6D64',
      },
      fontFamily: {
        serif: ['Gloock', 'serif'],
        body: ['EB Garamond', 'serif'],
      },
      zIndex: {
        100: '100',
      },
    },
  },
  plugins: [],
};
