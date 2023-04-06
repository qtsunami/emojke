// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    "@nuxtjs/tailwindcss",
    "@element-plus/nuxt",
  ],
  css: [
    "@/assets/css/tailwind.css",
    // "@/assets/css/mavon-editor.css",
    "@/node_modules/bootstrap-icons/font/bootstrap-icons.css"
  ],
  app: {
    head: {
      title: 'abroad-learning',
      htmlAttrs: {
        lang: 'en'
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: '' },
        { name: 'format-detection', content: 'telephone=no' }
      ],
      link: [
        // <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.3/font/bootstrap-icons.css">
        // { rel: "stylesheet", href: "https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.3/font/bootstrap-icons.css" }
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      ],
      script:[
        {innerHTML:"var _hmt = _hmt || [];(function() {var hm = document.createElement('script');hm.src = 'https://hm.baidu.com/hm.js?0fc5ce9869cadd5bdde579582503b3bc';var s = document.getElementsByTagName('script')[0];s.parentNode.insertBefore(hm, s);})();"}
      ],
    }
  }
})
