<script setup lang="ts">
import TheAppFooter from '~/components/ui/TheAppFooter.vue'
import TheAppHeader from '~/components/ui/TheAppHeader.vue'
import { useNavLinks } from '~/utils/links'

const navLinks = useNavLinks()
</script>

<template>
  <UApp>
    <TheAppHeader :links="navLinks" />
    <UMain>
      <UContainer class="min-h-screen">
        <NuxtPage />
      </UContainer>
    </UMain>
    <TheAppFooter />
  </UApp>
</template>
