<template>
  <ClientOnly>
    <div class="theme-bg-wrapper" aria-hidden="true">
      <svg
        :key="mode"
        class="theme-bg-svg"
        width="100%"
        height="100%"
        viewBox="0 0 1920 1080"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <radialGradient :id="gradientId" cx="50%" cy="50%" r="80%">
            <stop offset="0%" :stop-color="themeColors[0]" stop-opacity="0.7" />
            <stop offset="100%" :stop-color="themeColors[1]" stop-opacity="0.2" />
          </radialGradient>
          <filter id="blur" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="80" />
          </filter>
        </defs>
        <circle
          v-for="(circle, i) in circles"
          :key="i"
          :cx="circle.cx"
          :cy="circle.cy"
          :r="circle.r"
          :fill="`url(#${gradientId})`"
          filter="url(#blur)"
          :style="{
            animationDelay: `${circle.delay}s`,
            animationDuration: `${circle.duration}s`
          }"
          class="theme-bg-anim"
        />
      </svg>
    </div>
  </ClientOnly>
</template>

<script setup lang="ts">
import { useColorMode } from '@vueuse/core'
import { computed, ref } from 'vue'

const mode = useColorMode({
  attribute: 'class',
  storageKey: 'vueuse-color-scheme',
  initialValue: 'auto',
  modes: {
    dark: 'dark',
    light: 'light'
  }
})
const gradientId = 'theme-bg-gradient'

const lightColors = ['#f0e7ff', '#a7f3d0']
const darkColors = ['#0f172a', '#334155']

const themeColors = computed(() => (mode.value === 'dark' ? darkColors : lightColors))

const circles = ref([
  { cx: 400, cy: 300, r: 500, delay: 0, duration: 16 },
  { cx: 1600, cy: 800, r: 400, delay: 2, duration: 18 },
  { cx: 1000, cy: 600, r: 600, delay: 4, duration: 22 }
])
</script>

<style scoped>
.theme-bg-wrapper {
  position: fixed;
  inset: 0;
  width: 100vw;
  height: 100vh;
  z-index: 0;
  pointer-events: none;
  overflow: hidden;
}
.theme-bg-svg {
  width: 100vw;
  height: 100vh;
  display: block;
}
.theme-bg-anim {
  transform-origin: 50% 50%;
  animation: theme-bg-float 16s ease-in-out infinite alternate;
}
@keyframes theme-bg-float {
  0% {
    transform: scale(1) translateY(0px);
  }
  100% {
    transform: scale(1.08) translateY(-40px);
  }
}
</style>
