/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        "server-image": "url('../assets/1.jpg')"
      },

      fontFamily: {
        "poppins": "'Poppins', sans-serif"
      }
    },
  },
  plugins: [],
}

