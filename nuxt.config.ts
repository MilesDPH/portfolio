import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  modules: ['@nuxtjs/seo', '@nuxt/image'],

  components: [
    { path: '~/components', pathPrefix: false },
  ],

  vite: {
    plugins: [tailwindcss()],
  },

  css: ['~/assets/css/main.css'],

  app: {
    head: {
      htmlAttrs: { lang: 'es-MX' },
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    },
  },

  site: {
    url: 'http://milesdph.top',
    name: 'Hugo Pedroza — Desarrollador Full-Stack',
    description:
      'Desarrollador full-stack en Aguascalientes, México. Especializado en WordPress/WooCommerce, Django, Vue/Nuxt, SEO/SEM y mantenimiento continuo.',
    defaultLocale: 'es-MX',
  },

  ogImage: { enabled: false },

  image: {
    format: ['webp'],
    quality: 85,
  },

  nitro: {
    prerender: {
      routes: ['/'],
    },
  },
})
