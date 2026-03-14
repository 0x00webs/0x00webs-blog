<template>
  <div
    class="flex flex-col items-center justify-center gap-2 rounded-2xl border border-default bg-card/40 p-8 text-center"
  >
    <span
      class="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary"
    >
      <svg
        class="h-6 w-6 animate-spin"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
      >
        <circle class="opacity-25" cx="12" cy="12" r="10" />
        <path class="opacity-75" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z" />
      </svg>
    </span>
    <p class="text-sm font-medium text-muted-foreground">{{ message }}</p>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  message: {
    type: String,
    default: 'Loading…'
  }
})
</script>
