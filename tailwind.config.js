
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Comfortaa', 'Raleway', 'cursive'],
      },
      colors: {
        gray: {
          default: "#f8f9fa",
          0: "#E5E5E5",
          100: "#D2D2D2",
          200: "#B3B3B3",
          300: "#727272",
          //   400: "#696969",
          400: "black", //color sent by br Imad
          500: "#969696",
        },
      },
      fontSize: {
        
        sm: ['21px', {
          lineHeight: '1.5rem',
          letterSpacing: '-0.01em',
          fontWeight: '400',
        }],        
      }
    }
  },
  plugins: [],
}