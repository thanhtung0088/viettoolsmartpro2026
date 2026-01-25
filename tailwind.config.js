/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'vietedu-blue': '#1e40af', // màu xanh chính từ hình
        'vietedu-dark': '#0f172a',
      },
    },
  },
  plugins: [],
}