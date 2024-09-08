/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-dark-gray': 'rgb(14 14 22)', // Adjust this color to your preference
      },
    },
  },
  plugins: [],
}

