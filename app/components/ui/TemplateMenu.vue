<script setup lang="ts"></script>

<template>
  <UDropdownMenu
    v-slot="{ open }"
    :modal="false"
    :items="socialLinks"
    :content="{ align: 'start', sideOffset: 4 }"
    :ui="{ content: 'min-w-fit' }"
    size="xs"
  >
    <UButton
      label="Social Links"
      variant="subtle"
      trailing-icon="i-lucide-chevron-down"
      size="xs"
      class=""
      :class="[open && 'bg-primary/15']"
      :ui="{
        trailingIcon: ['transition-transform duration-200', open ? 'rotate-180' : undefined]
          .filter(Boolean)
          .join(' ')
      }"
    />
  </UDropdownMenu>
</template>
