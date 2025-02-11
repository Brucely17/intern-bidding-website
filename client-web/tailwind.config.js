// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        "fade-in-right": {
          "0%": {
            opacity: 0,
            transform: "translate3d(100%, 0, 0)",
          },
          "100%": {
            opacity: 1,
            transform: "translate3d(0, 0, 0)",
          },
        },
        "fade-out-left": {
          "0%": {
            opacity: 1,
            transform: "translate3d(0, 0, 0)",
          },
          "100%": {
            opacity: 0,
            transform: "translate3d(-100%, 0, 0)",
          },
        },
      },
      animation: {
        fadeinright: 'fade-in-right 1s ease-in-out',
        fadeoutleft: 'fade-out-left 1s ease-in-out',
      },
    },
  },
  plugins: [],
}
