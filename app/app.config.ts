export default defineAppConfig({
  ui: {
    colors: {
      primary: 'amber',
      secondary: 'purple',
      neutral: 'olive',
      success: 'green',
      info: 'blue',
      warning: 'yellow',
      error: 'red'
    },
    icons: {
      loading: 'i-lucide-loader-circle',
      search: 'i-lucide-search',
      menu: 'i-lucide-menu'
    },
    experimental: {
      componentDetection: true
    }
  }
})
