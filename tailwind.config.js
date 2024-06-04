/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      '2xl': {'max': '1500px'},
      // => @media (max-width: 1535px) { ... }

      'xl': {'max': '950px'},
      // => @media (max-width: 1279px) { ... }

      'lg': {'max': '1200px'},
      // => @media (max-width: 1023px) { ... }

      'md': {'max': '760px'},
      // => @media (max-width: 767px) { ... }

      'sm': {'max': '550px'},
      
    },
    extend: {},
  },
  darkMode:"class",
  plugins: [],
}

