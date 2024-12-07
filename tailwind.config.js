/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary:{
          default: '#1D4ED8',
          light: '#3B82F6',  // Optional: Lighter shade
          dark: '#1E40AF', 
        }
      }
    },
  },
  plugins: [],
}