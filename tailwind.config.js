/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      serif: ['Reforesta'],
      sans: ['Varela Round'],
    },
    extend: {
      colors: {
        primary: '#312e81',
        primaryLighter: '#413D66',
        primaryDarker: '#181726',
        primaryContrast: '#E7ECEF',
        secondary: '#6096ba',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
      animation: {
        blob: 'blob 12s infinite',
      },
      keyframes: {
        blob: {
          '0%': {
            transform: 'translate(0px, 0px) scale(1)',
          },
          '33%': {
            transform: 'translate(30px, -50px) scale(1.4)',
          },
          '66%': {
            transform: 'translate(-20px, 20px) scale(0.8)',
          },
          '100%': {
            transform: 'tranlate(0px, 0px) scale(1)',
          },
        },
      },
    },
  },
  plugins: [],
};
