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
  components: [
    { path: '~/components', global: true },
    { path: './node_modules/@nuxt/ui/dist/runtime/components', global: true }
  ],

  imports: {
    dirs: ['src/**/*', 'composables/**/*'],
    global: true
  },
  devtools: {
    enabled: true
  },
  app: {
    head: {
      htmlAttrs: { lang: 'en' },
      title: `0x00webs Blog`,
      titleTemplate: '%s | 0x00webs Blog',
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

  router: {
    options: { scrollBehaviorType: 'smooth' }
  },

  // Global site metadata for SEO and social sharing
  site: {
    url: process.env.NUXT_PUBLIC_SITE_URL,
    name: '0x00webs Blog',
    description: 'A blog about web development, programming, and technology.',
    defaultImage: '/default-og-image.png',
    twitter: '@0x00webs',
    github: '0x00webs',
    linkedin: '0x00webs',
    email: '0x00webs@gmail.com',
    defaultLocale: 'en'
  },

  content: {
    build: {
      markdown: {
        highlight: {
          theme: 'dark-plus',
          langs: [
            'js',
            'jsx',
            'json',
            'ts',
            'tsx',
            'vue',
            'css',
            'html',
            'vue',
            'bash',
            'md',
            'mdc',
            'yaml',
            'cpp',
            'c',
            'py'
          ]
        },
        toc: {
          depth: 3,
          searchDepth: 3
        },
        remarkPlugins: {
          'remark-reading-time': {},
          'remark-math': {}
        },
        rehypePlugins: { 'rehype-katex': {} }
      }
    }
  },

  ui: {
    experimental: {
      componentDetection: true
    }
  },

  appConfig: {},
  runtimeConfig: {},

  routeRules: {
    '/': { prerender: true },
    '/_nuxt/**': {
      cache: {
        maxAge: 2592000,
        staleMaxAge: 31536000
      }
    }
  },

  // HTTPS Development Server Configuration
  devServer: {
    host: 'localhost',
    port: 5173,
    https: {
      key: process.env.NUXT_HTTPS_KEY,
      cert: process.env.NUXT_HTTPS_CERT
    }
  },

  compatibilityDate: '2025-01-15',

  nitro: {
    debug: false,
    experimental: { openAPI: false },
    compressPublicAssets: { brotli: true },

    prerender: {
      crawlLinks: true,
      failOnError: true,
      ignore: ['/api', '/app'],
      routes: ['/']
    }
  },

  // ── Vite Configuration for HMR and Development Server
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

  // -- AOS (Animate On Scroll) Configuration
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

  // ── ESLint ─────────────────────────────────────────────────
  eslint: {
    config: {
      typescript: true,
      stylistic: {
        commaDangle: 'never',
        braceStyle: '1tbs'
      }
    }
  },

  // ── Fonts ─────────────────────────────────────────────────
  fonts: {
    // Global defaults to ensure consistency across all fonts
    defaults: {
      weights: [400, 500, 700],
      styles: ['normal', 'italic'],
      subsets: ['latin']
    },
    families: [
      // SANS-SERIF: Clean, tech-focused, and highly readable
      { name: 'Inter', weights: [300, 400, 500, 600, 700, 800, 900] },
      { name: 'Roboto', weights: [300, 400, 500, 700, 900] },
      { name: 'IBM Plex Sans', weights: [300, 400, 500, 600, 700] },

      // SERIF: Elegant, authoritative, and sophisticated
      { name: 'Playfair Display', weights: [400, 700, 900] },
      { name: 'EB Garamond', weights: [400, 500, 700] },
      { name: 'Lora', weights: [400, 500, 600, 700] },

      // MONO: Professional developer & technical display
      { name: 'JetBrains Mono', weights: [400, 500, 700] },

      // TYPEWRITER: The "Selectric" heritage — professional, tech-heavy, and crisp
      { name: 'IBM Plex Mono', weights: [300, 400, 500, 600] },

      // ANALOG TYPEWRITER: Weathered, "Top-Secret" document style
      { name: 'Special Elite', weights: [400] }
    ]
  },

  // ── Icon ───────────────────────────────────────────────────
  icon: {
    size: '1.2em',
    class: 'icon',
    serverBundle: 'auto',
    fetchTimeout: 4000,
    clientBundle: {
      scan: true
    }
  },

  // ── Image ──────────────────────────────────────────────────
  image: {
    quality: 80,
    format: ['webp', 'avif'],
    screens: {
      xs: 320,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
      xxl: 1536
    }
  },
  // ── Link Checker ───────────────────────────────────────────
  linkChecker: {
    enabled: true
  },

  // ── OG Image ───────────────────────────────────────────────
  ogImage: {
    enabled: true
  },

  // ── Robots ─────────────────────────────────────────────────
  robots: {
    disallow: ['/app/**', '/api/**', '/_nuxt/**'],
    allow: '/'
  },

  // ── Schema.org ─────────────────────────────────────────────
  schemaOrg: {
    identity: {
      '@type': 'Person',
      name: '0x00webs',
      url: process.env.NUXT_PUBLIC_SITE_URL || 'https://0x00webs-blog.vercel.app'
    }
  },

  sitemap: {
    autoLastmod: true,
    discoverImages: true,
    exclude: ['/app/**', '/api/**', '/_nuxt/**', '/__nuxt_content/**'],
    debug: false,
    xslColumns: [
      { label: 'URL', width: '60%' },
      {
        label: 'Images',
        width: '20%',
        select: 'count(image:image)'
      },
      { label: 'Last Modified', select: 'sitemap:lastmod', width: '20%' }
    ]
  }
})
