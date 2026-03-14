<script setup lang="ts">
import { siteConfig } from '~/app.meta'
</script>

<template>
  <UFooter>
    <template #left>
      <div class="flex flex-col sm:flex-row sm:items-center gap-1">
        <span class="text-sm text-muted-foreground">
          &copy; {{ new Date().getFullYear() }} {{ siteConfig.name }}.
        </span>
        <span class="text-sm text-muted-foreground hidden sm:inline"> All rights reserved. </span>
      </div>
    </template>

    <template #right>
      <div class="flex items-center gap-2">
        <div class="hidden sm:flex items-center gap-2">
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
      </div>
    </template>
  </UFooter>
</template>
