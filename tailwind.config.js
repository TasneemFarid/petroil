/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'pop': ['Poppins', 'sans-serif'],
      },
      colors: {
        'primary': '#F40404',
        'yellowBorder': '#FFB800',
        'para': '#6C6C6C',
        'darkLight': 'rgba(0,0,0,0.6)',
      },
      maxWidth: {
        'container': '1144px',
      },
      screens: {
        'sm': '375px',
        'sml': '667px',
        'md': '768px',
      },
    },
  },
  plugins: [],
}
