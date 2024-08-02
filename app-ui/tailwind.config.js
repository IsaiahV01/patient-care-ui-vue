/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
      colors: {
        primary: '#f78da7', // Light pink
        secondary: '#ffcccb', // Light coral
        accent: '#ffd700', // Gold
        neutral: '#e0f7fa', // Light cyan
        base: '#ffffff', // White
        info: '#0288d1', // Light blue
        success: '#8bc34a', // Light green
        warning: '#ffeb3b', // Yellow
        danger: '#f44336', // Red
      },
    },
  },
  plugins: [],
}

