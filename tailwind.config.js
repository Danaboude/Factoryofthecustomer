/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-dark-blue': '#21559d',
        'brand-yellow': '#feb341',
        'brand-light-blue': '#cce0e2',
      },
      fontFamily: {
        'futura': ['FuturaBold', 'sans-serif'],
        'isidora': ['Isidora', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
