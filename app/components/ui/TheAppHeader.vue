<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui'
import siteConfig from '~/app.meta'
import TemplateMenu from '~/components/ui/TemplateMenu.vue'
import ThemeToggle from '~/components/ui/ThemeToggle.vue'

defineProps<{
  links: NavigationMenuItem[]
}>()
</script>

<template>
  <!-- Floating Glassmophic Centered Header on Desktop and popover on small devices -->
  <UHeader
    data-aos="fade-down"
    mode="drawer"
    :ui="{
      root: 'border border-accented fixed inset-x-0 mx-auto w-max top-4 rounded-lg backdrop-blur-lg bg-white/50 dark:bg-gray-900/50 z-50'
    }"
  >
    <template #left>
      <!-- Avatar with name at bottom -->
      <div class="flex items-center space-x-2 flex-col sm:flex-row">
        <UAvatar
          :src="siteConfig.author.avatar?.src"
          :alt="siteConfig.author.avatar?.alt"
          size="sm"
          color="neutral"
        />
        <span class="sm:inline font-medium">{{ siteConfig.author.name }}</span>
      </div>
    </template>

    <UNavigationMenu :items="links" />

    <template #right>
      <ThemeToggle />
      <TemplateMenu />
    </template>

    <template #body>
      <UNavigationMenu :items="links" orientation="vertical" class="-mx-2.5" />
    </template>
  </UHeader>
</template>
