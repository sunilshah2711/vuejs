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
    extend: {},
    colors: {
      black: "red",
      bgGray: "#f6f8fa",
      bgDarkgray: "#eaedf0",
      bgPurpal: "#5e53fd",
      white: "#fff",
    },
    fontFamily: {
      poppins: ["Poppins", "sans-serif"],
      roboto: ["Roboto", "sans-serif"],
      inter: ["Inter", "sans-serif"],
    },
    container: {
      center: true,
    },
  },
  plugins: [require("@headlessui/tailwindcss")],
};
