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
    },
  },
  plugins: [],
};
