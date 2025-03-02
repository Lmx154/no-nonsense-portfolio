/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1a1a1a',
        secondary: '#2a2a2a',
        accent: '#3498db',
        success: '#2ecc71',
      },
      backgroundColor: {
        'transparent-dark': 'rgba(26, 26, 26, 0.8)',
        'card-bg': 'rgba(42, 42, 42, 0.7)',
      },
    },
  },
  plugins: [],
}