/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "index.html", "main.js"],
  theme: {
    extend: {
      colors: {
        'cinza-claro': '#f2f2f2',
        'cinza-medio': '#C1D4D9',
        'rosa': '#F22259',
        'laranja': '#FF6F62',
        'azul-escuro': '#111C26',
        'cinza-escuro': '#696B66',
        'cinza': '#4D6873'
      },
      fontFamily: {
        'inter' : ['Inter', 'sans-serif'],
        'montserrat': ['Montserrat', 'sans-serif']
      }
    },
  },
  darkMode: 'class',
  plugins: [],
}
