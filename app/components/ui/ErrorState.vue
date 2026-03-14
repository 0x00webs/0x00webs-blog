<template>
  <div
    class="flex flex-col items-center justify-center gap-3 rounded-2xl border border-default bg-card/40 p-8 text-center"
  >
    <div
      class="inline-flex h-10 w-10 items-center justify-center rounded-full bg-error/10 text-error"
    >
      <i class="i-lucide-alert-circle" aria-hidden="true" />
    </div>
    <p class="text-sm font-semibold">{{ title }}</p>
    <p class="text-sm text-muted-foreground">{{ message }}</p>
    <div v-if="onRetry">
      <UButton variant="outline" size="sm" @click="onRetry">Try again</UButton>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { PropType } from 'vue';

const props = defineProps({
  title: { type: String, default: 'Something went wrong' },
  message: { type: String, default: 'Unable to load data. Please try again.' },
  onRetry: { type: Function as PropType<() => void | Promise<void>> }
})
</script>
