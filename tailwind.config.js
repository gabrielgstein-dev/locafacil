/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#FE5F07',
          light: '#E9631A',
          dark: '#C55215',
        },
        secondary: {
          DEFAULT: '#003857',
          light: '#004C6D',
          dark: '#00263D',
        },
        gray: {
          input: '#ECECE7',
          dark: '#131313',
          default: '#313131',
          light: '#424242',
        },
      },
      height: {
        'home-section': '1011px',
      },
      fontSize: {
        'big-title': ['8.5rem', { lineHeight: '1' }],
      },
      borderRadius: {
        '4xl': '2.1875rem',
      },
    },
  },
  plugins: [],
};
