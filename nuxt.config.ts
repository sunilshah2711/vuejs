// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // Globel Css
  css: [
    "~/assets/css/main.css",
    "~/assets/css/fontawesome.css",
    "@fortawesome/fontawesome-svg-core/styles.css",
  ],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
});
