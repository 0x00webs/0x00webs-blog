<script setup lang="ts"></script>

<template>
  <NuxtLoadingIndicator
    color="repeating-linear-gradient(to right, #14b8a6 0%, #0d9488 50%, #2dd4bf 100%)"
    :height="3"
  />
  <NuxtLayout class="relative">
    <NuxtPage />
  </NuxtLayout>
</template>
