<script setup lang="ts">
import ThemeBackground from '~/components/ui/ThemeBackground.vue'
</script>

<template>
  <NuxtLoadingIndicator
    color="repeating-linear-gradient(to right, #14b8a6 0%, #0d9488 50%, #2dd4bf 100%)"
    :height="3"
  />
  <ThemeBackground />
  <NuxtLayout class="relative">
    <NuxtPage />
  </NuxtLayout>
</template>
