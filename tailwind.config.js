/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'brand': {
          50: '#faf8f6',
          100: '#f5f1ed',
          200: '#ebe3db',
          300: '#dfd2c7',
          400: '#cebeb0',
          500: '#bca898',
          600: '#a08977',
          700: '#8c7563',
          800: '#6b5a4c',
          900: '#4d413a',
          950: '#000',
        }
      },
      fontFamily: {
        'georgia': ['Georgia', 'serif'],
      },
    },
  },
  plugins: [],
};