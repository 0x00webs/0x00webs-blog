<script setup lang="ts">
import TheAppFooter from '~/components/ui/TheAppFooter.vue'
import TheAppHeader from '~/components/ui/TheAppHeader.vue'
import { useNavLinks } from '~/utils/links'

const navLinks = useNavLinks()
</script>

<template>
  <UApp>
    <UContainer class="min-h-screen">
      <TheAppHeader :links="navLinks" />
      <UMain>
        <NuxtPage />
      </UMain>
      <TheAppFooter />
    </UContainer>
  </UApp>
</template>
