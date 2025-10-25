/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f2faff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0E76C4',
          600: '#0c62a3',
          700: '#0a4d82',
          800: '#083961',
          900: '#061c2c',
        },
        gray: {
          100: '#F2F2F2',
          200: '#EAEAEA',
          400: '#AAAAAA',
          500: '#9F9F9F',
        },
        red: {
          500: '#D10003',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

