<script lang="ts" setup>
const colorMode = useColorMode()
const { $refreshHardAos } = useNuxtApp()

type ThemeEvent = MouseEvent | TouchEvent

enum ColorMode {
  light = 'light',
  dark = 'dark'
}

const newTheme = computed(() => (colorMode.value === 'dark' ? 'light' : 'dark'))

const toggleTheme = () => {
  colorMode.preference = newTheme.value
}

const startViewTransition = (event: ThemeEvent) => {
  if (!document.startViewTransition) {
    toggleTheme()
    nextTick(() => {
      $refreshHardAos()
    })
    return
  }

  const x = event instanceof MouseEvent ? event.clientX : (event.touches[0]?.clientX ?? 0)
  const y = event instanceof MouseEvent ? event.clientY : (event.touches[0]?.clientY ?? 0)
  const endRadius = Math.hypot(
    Math.max(x, window.innerWidth - x),
    Math.max(y, window.innerHeight - y)
  )

  const transition = document.startViewTransition(() => {
    toggleTheme()
  })

  transition.ready.then(() => {
    const duration = 600
    document.documentElement.animate(
      {
        clipPath: [`circle(0px at ${x}px ${y}px)`, `circle(${endRadius}px at ${x}px ${y}px)`]
      },
      {
        duration: duration,
        easing: 'cubic-bezier(.76,.32,.29,.99)',
        pseudoElement: '::view-transition-new(root)'
      }
    )
    setTimeout(() => {
      nextTick(() => {
        $refreshHardAos()
      })
    }, duration)
  })
}
</script>

<template>
  <ClientOnly>
    <UTooltip :text="`Switch to ${newTheme} mode`" :kbds:="['Enter', 'Space']">
      <UButton
        :aria-label="`Switch to ${newTheme} mode`"
        :aria-current-value="`Switch to ${newTheme} mode`"
        :icon="`i-lucide-${newTheme === ColorMode.light ? 'moon' : 'sun'}`"
        color="neutral"
        variant="ghost"
        size="md"
        class="rounded-full"
        @click="startViewTransition"
      />

      <template #fallback>
        <UButton
          :aria-label="`Switch to ${newTheme} mode`"
          :icon="`i-lucide-${newTheme === ColorMode.light ? 'moon' : 'sun'}`"
          color="neutral"
          variant="ghost"
          size="md"
          class="rounded-full"
          @click="
            () => {
              toggleTheme()
              nextTick(() => {
                $refreshHardAos()
              })
            }
          "
        />
      </template>
    </UTooltip>
  </ClientOnly>
</template>

<style lang="css">
::view-transition-old(root),
::view-transition-new(root) {
  animation: none;
  mix-blend-mode: normal;
}

::view-transition-new(root) {
  z-index: 9999;
}

::view-transition-old(root) {
  z-index: 1;
}
</style>
