/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        urbanist: ['Urbanist', 'sans-serif'],
      },
      colors: {
        primary: "#007FFF",
        secondary: "#3F3D56",
        slateblue: "#8D9CB8",
        mutedazure: "#C6CFDC",
        palewhite: "#F5F7F9"
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
}

