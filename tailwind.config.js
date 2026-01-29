/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#ff5722", // Deep Orange
        secondary: "#1a1a1a", // Dark Gray/Black
        dark: "#000000", // Pure Black
        accent: "#fb8c00" // Lighter Orange
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
