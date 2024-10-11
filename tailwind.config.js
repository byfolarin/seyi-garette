/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'DepartureMono': ['DepartureMono', 'Courier New', 'monospace'], 
        'helvetica-neue-5': ['helvetica-neue-5', 'sans-serif'],
      },
    },
  },
  plugins: [],
}