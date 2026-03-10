<script setup lang="ts">
import siteConfig from '~/app.meta'
</script>

<template>
  <UFooter>
    <template #left>
      <p class="text-sm text-muted-foreground">
        &copy; {{ new Date().getFullYear() }} 0x00webs. All rights reserved.
      </p>
    </template>

    <template #right>
      <!-- Social Links -->
      <div class="flex space-x-4">
        <UButton
          :to="siteConfig.author.socialLinks?.github"
          variant="ghost"
          size="sm"
          :icon="'i-lucide-github'"
          aria-label="GitHub"
        />
        <UButton
          :to="siteConfig.author.socialLinks?.twitter"
          variant="ghost"
          size="sm"
          :icon="'i-lucide-twitter'"
          aria-label="Twitter"
        />
        <UButton
          :to="siteConfig.author.socialLinks?.linkedin"
          variant="ghost"
          size="sm"
          :icon="'i-lucide-linkedin'"
          aria-label="LinkedIn"
        />
      </div>
    </template>
  </UFooter>
</template>
