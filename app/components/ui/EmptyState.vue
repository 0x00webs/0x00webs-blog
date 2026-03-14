<template>
  <div
    class="flex flex-col items-center justify-center gap-3 rounded-2xl border border-default bg-card/40 p-10 text-center"
  >
    <div
      class="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary"
    >
      <i class="i-lucide-inbox" aria-hidden="true" />
    </div>
    <p class="text-sm font-semibold">{{ title }}</p>
    <p class="text-sm text-muted-foreground">{{ description }}</p>
    <div v-if="$slots.default">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps({
  title: { type: String, default: 'Nothing here yet' },
  description: { type: String, default: 'Try adding some content or check back later.' }
})
</script>
