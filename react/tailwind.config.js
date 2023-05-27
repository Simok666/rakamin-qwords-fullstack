/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'body' : ['Plus Jakarta Sans','sans-serif'],
      },
      dropShadow: {
        '3xl': '0 10px 20px rgba(249, 192, 131, 0.89)',
      },
    },
  },
  plugins: [],
}

