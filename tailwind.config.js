/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'selector',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
    },
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {
      colors: {
        'primary-color': '#F4CE14',
        'secondary-color': '#495E57',
      },
      fontFamily: {
        'primary-font': "Markazi Text",
        'secondary-font':  "Karla",
        'text-font': '"Poppins", sans-serif'
      }
    },
  },
  plugins: [],
}

