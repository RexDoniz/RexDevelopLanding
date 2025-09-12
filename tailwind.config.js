/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'primary': 'var(--primary-color)',
        'primary-dark': 'var(--primary-800)',
        'secondary': 'var(--secondary-color)',
        'secondary-dark': 'var(--secondary-800)',
      },
    },
  },
  plugins: [],
}
