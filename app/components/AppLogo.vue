<script setup lang="ts">
import { motion } from 'motion-v'
import siteConfig from '~/app.meta'
</script>

<template>
  <!-- Avatar with name at bottom -->
  <motion.div
    class="flex flex-col items-center gap-1 max-w-40 min-w-0 overflow-hidden md:flex-row md:gap-2"
    :initial="{ opacity: 0, y: 20 }"
    :animate="{ opacity: 1, y: 0 }"
    :transition="{ delay: 0.5 }"
  >
    <UAvatar
      :src="siteConfig.author.avatar.src"
      :alt="siteConfig.author.name"
      size="lg"
      class="w-10 h-10 rounded-full border-2 border-default"
    />

    <div class="min-w-0 text-center md:text-left hidden md:block">
      <p class="text-sm font-semibold truncate">{{ siteConfig.author.name }}</p>
    </div>
  </motion.div>
</template>
