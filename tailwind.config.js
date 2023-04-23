/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "*.html"],
  theme: {
    extend: {
      colors: {
        primary: "#49BBBD",
        secondary: "#7eccce",
        container:"#9DCCFF",
        accent: "#ACACAC",
        main: "#F48C06",
        linear: "#136CB5",
        sub: "#2F327D",
        subheading: "#00CBB8",
        foot: "#252641"

      }
    },
  },
  plugins: [],
}
