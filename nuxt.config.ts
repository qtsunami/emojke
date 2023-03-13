// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    "@nuxtjs/tailwindcss",
    "@element-plus/nuxt",
    "@nuxt/ui",
    '@nuxt/content',
  ],
  css: [
    "@/assets/css/tailwind.css",
    // "@/assets/css/mavon-editor.css",
    // "@/node_modules/bootstrap-icons/font/bootstrap-icons.css"
  ],
  app: {
    head: {
      link: [
        // <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.3/font/bootstrap-icons.css">
        { rel: "stylesheet", href: "https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.3/font/bootstrap-icons.css" }
      ],
    }
  }
})
