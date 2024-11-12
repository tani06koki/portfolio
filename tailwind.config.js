/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*",                // Add this
    "./public/index.html",       // Add this
    "./src/components/**/*.{js,jsx,ts,tsx}",  // Add this
    "./src/pages/**/*.{js,jsx,ts,tsx}",       // Add this
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

