<script setup lang="ts">
import { useScroll } from 'motion-v'
import AppLogo from '~/components/AppLogo.vue'
import ThemeToggle from '~/components/ui/ThemeToggle.vue'

// Assumes this composable is auto-imported or imported from ~/composables
const navLinks = useNavLinks()
const scroll = useScroll()
</script>

<template>
  <!-- UHeader is typically used in layout files -->
  <UHeader
    mode="drawer"
    :data-scroll="scroll.scrollY.get() > 0"
    class="group"
    :ui="{
      root: 'mx-2 border-none bg-transparent backdrop-blur-none pt-4',
      container:
        'max-w-(--ui-container) rounded-xl group-data-[scroll=true]:shadow-xl border border-default backdrop-blur-lg bg-default/50 transition-all duration-150 ease-out'
    }"
  >
    <template #title>
      <AppLogo />
    </template>

    <!-- Navigation links for desktop -->
    <UNavigationMenu :items="navLinks" />

    <template #right>
      <ThemeToggle />

      <UTooltip text="Open on GitHub" :kbds="['meta', 'G']">
        <UButton
          color="neutral"
          variant="ghost"
          to="https://github.com/nuxt/ui"
          target="_blank"
          icon="i-simple-icons-github"
          aria-label="GitHub"
        />
      </UTooltip>
    </template>

    <!-- Mobile menu body content -->
    <template #body>
      <UNavigationMenu :items="navLinks" orientation="vertical" class="-mx-2.5" />
    </template>
  </UHeader>
</template>
