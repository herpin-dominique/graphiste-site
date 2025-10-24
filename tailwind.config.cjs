/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {transitionTimingFunction: {
    'in-out': 'cubic-bezier(0.4, 0, 0.2, 1)',
  },
      colors: {
        violet: {
          DEFAULT: '#7F00FF',     // Violet électrique
          dark: '#4B0082',        // Violet profond
          light: '#C8A2C8',       // Lavande
          pastel: '#E6DAF5',      // Fond doux
          accent: '#DA70D6',      // Rose violacé
        },
        gray: {
          light: '#F5F5F5',
          dark: '#1F1F1F',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Montserrat', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
