/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'navy': '#0C0D40',
        'navy-dark': '#080A2B',
        'sidebar': '#bebad0',
        'purple-accent': '#aa44e5',
        'cyan-accent': '#44d6e5',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

