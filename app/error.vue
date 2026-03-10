<script lang="ts" setup>
import TheAppFooter from '~/components/ui/TheAppFooter.vue'
import TheAppHeader from '~/components/ui/TheAppHeader.vue'

const error = useError()
const navLinks = useNavLinks()

useSeoMeta({
  title: error.value?.status?.toString(),
  description: error.value?.statusMessage
})
</script>

<template>
  <UApp>
    <TheAppHeader :links="navLinks" />
    <UMain>
      <UContainer class="min-h-screen flex flex-col items-center justify-center text-center">
        <h1 class="text-6xl font-bold mb-4">{{ error?.status }}</h1>
        <p class="text-xl text-muted mb-8">{{ error?.statusMessage }}</p>
        <UNuxtLink
          to="/"
          class="px-4 py-2 bg-primary text-white rounded hover:bg-primary-dark transition"
        >
          Go back home
        </UNuxtLink>
      </UContainer>
    </UMain>
    <TheAppFooter />
  </UApp>
</template>
