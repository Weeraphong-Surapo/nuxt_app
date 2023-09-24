// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    head: {
      title: "NUXT 3 CRUD Application",
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        {
          hid: "description",
          name: "description",
          content: "NUXT 3 CRUD Application meta desc",
        },
        {
          name: "format-detection",
          content: "telephone-no",
        },
      ],
      link: [
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Roboto&display=swap",
          crossorigin: "",
        },
        {
          rel: "icon",
          type: "image/x-icon",
          href: "/favicon.ico",
        },
        {
          rel: "stylesheet",
          href: "",
        },
      ],
      script: [
        {
          src:'https://cdn.jsdelivr.net/npm/sweetalert2@11',
          type:'text/javascript'
        }
      ],
    },
  },
  modules: ["@nuxtjs/tailwindcss"],
});
