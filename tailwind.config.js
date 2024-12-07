/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'noto-sans': ['"Noto Sans"', 'sans-serif'],
        'jura': ['"Jura"', 'sans-serif'],
        'estonia': ['"Estonia"', 'serif'],
        'cormorant': ['"Cormorant"', 'serif'],
        'carattere': ['"Carattere"', 'cursive'],
      },
      animation: {
        'fade-in': 'fade-in 4s cubic-bezier(0.885, 0.225, 0.140, 0.905)',
      },
      keyframes: {
        'fade-in': {
          from: { opacity: 0 },
          to: { opacity: 1 },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
  ],
}

