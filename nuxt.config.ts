// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxt/eslint',
    '@nuxt/ui',
    '@nuxt/a11y',
    '@nuxt/content',
    '@nuxt/hints',
    '@nuxt/image',
    '@nuxtjs/seo',
    '@nuxtjs/mdc',
    'motion-v/nuxt',
    '@vueuse/nuxt',
    'nuxt-aos'
  ],
  devtools: {
    enabled: true
  },

  app: {
    head: {
      title: '0x00webs Blog',
      meta: [
        {
          name: 'description',
          content: 'A blog about web development, programming, and technology.'
        },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'author', content: '0x00webs' },
        {
          name: 'keywords',
          content: 'blog, web development, programming, technology'
        },
        { name: 'msapplication-TileColor', content: '#ffffff' },
        { name: 'msapplication-TileImage', content: '/favicon-144x144.png' },
        { name: 'msapplication-config', content: '/browserconfig.xml' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'apple-touch-icon', sizes: '57x57', href: '/favicon-57x57.png' },
        { rel: 'apple-touch-icon', sizes: '60x60', href: '/favicon-60x60.png' },
        { rel: 'apple-touch-icon', sizes: '72x72', href: '/favicon-72x72.png' },
        { rel: 'apple-touch-icon', sizes: '76x76', href: '/favicon-76x76.png' },
        {
          rel: 'apple-touch-icon',
          sizes: '114x114',
          href: '/favicon-114x114.png'
        },
        {
          rel: 'apple-touch-icon',
          sizes: '120x120',
          href: '/favicon-120x120.png'
        },
        {
          rel: 'apple-touch-icon',
          sizes: '144x144',
          href: '/favicon-144x144.png'
        },
        {
          rel: 'apple-touch-icon',
          sizes: '152x152',
          href: '/favicon-152x152.png'
        },
        {
          rel: 'apple-touch-icon',
          sizes: '180x180',
          href: '/favicon-180x180.png'
        },
        {
          rel: 'icon',
          type: 'image/png',
          sizes: '16x16',
          href: '/favicon-16x16.png'
        },
        {
          rel: 'icon',
          type: 'image/png',
          sizes: '32x32',
          href: '/favicon-32x32.png'
        },
        {
          rel: 'icon',
          type: 'image/png',
          sizes: '96x96',
          href: '/favicon-96x96.png'
        },
        {
          rel: 'icon',
          type: 'image/png',
          sizes: '192x192',
          href: '/favicon-192x192.png'
        },
        { rel: 'shortcut icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      ]
    }
  },

  css: ['~/assets/css/main.css'],

  routeRules: {
    '/': { prerender: true }
  },

  devServer: {
    host: 'localhost',
    port: 3000
  },

  compatibilityDate: '2025-01-15',

  vite: {
    server: {
      allowedHosts: true,
      watch: { usePolling: true },
      hmr: {
        protocol: 'wss',
        port: 5173
      }
    }
  },

  aos: {
    // Global settings:
    disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
    startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
    initClassName: 'aos-init', // class applied after initialization
    animatedClassName: 'aos-animate', // class applied on animation
    useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
    disableMutationObserver: false, // disables automatic mutations' detections (advanced)
    debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
    throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)

    // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
    offset: 120, // offset (in px) from the original trigger point
    delay: 0, // values from 0 to 3000, with step 50ms
    duration: 400, // values from 0 to 3000, with step 50ms
    easing: 'ease', // default easing for AOS animations
    once: false, // whether animation should happen only once - while scrolling down
    mirror: true, // whether elements should animate out while scrolling past them
    anchorPlacement: 'top-bottom' // defines which position of the element regarding to window should trigger the animation
  },
  eslint: {
    config: {
      typescript: true,
      stylistic: {
        commaDangle: 'never',
        braceStyle: '1tbs'
      }
    }
  },

  fonts: {
    families: [
      // Loads the Hack font from a supported provider
      { name: 'Hack', provider: 'google' },
      { name: 'Fira Code', provider: 'google' }
    ]
  }
})
