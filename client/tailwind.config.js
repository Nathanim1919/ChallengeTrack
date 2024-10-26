/** @type {import('tailwindcss').Config} */
export default {
  content: [
      './index.html',
      './src/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
        fontFamily: {
            Montserrat: ['Montserrat', 'sans-serif'],
        },
        keyframes: {
            fadeIn: {
                '0%': { opacity: 0 },
                '100%': { opacity: 1 },
            },
            fadeOut: {
                '0%': { opacity: 1 },
                '100%': { opacity: 0 },
            },
            slideup: {
                '0%': { transform: 'translateY(5%)' },
                '100%': { transform: 'translateY(0)' },
            },
            slideFadeIn: {
                '0%': { opacity: 0.2, transform: 'translateY(5%)' },
                '100%': { opacity: 1, transform: 'translateY(0)' },
            },
        },
        animation: {
            fadeIn: 'fadeIn 0.5s ease-in-out',
            fadeOut: 'fadeOut 0.5s ease-in-out',
            slideup: 'slideup 0.5s ease-in-out',
            slideFadeIn: 'slideFadeIn 0.5s ease-in-out',
        },
    },
  },
  plugins: [],
}
