import { defineConfig } from 'tailwindcss'

export default defineConfig({
  darkMode: ['class'],
  content: ['./app/**/*.{vue,js,ts,jsx,tsx}', './src/**/*.{html,js,ts,jsx,tsx}'],
  theme: {
    extend: {}
  },
  plugins: []
})
