<script setup lang="ts">
import siteConfig from '~/app.meta'

const links = [
  {
    label: 'Explore articles',
    to: '/articles',
    icon: 'i-heroicons-newspaper-solid'
  }
]
</script>

<template>
  <section>
    <UPageHero
      :title="siteConfig.headLine"
      :description="siteConfig.description"
      :links="links"
      :ui="{
        wrapper: 'py-24 sm:py-32',
        title: '',
        description: '',
        links: 'mt-10 flex justify-center gap-4'
      }"
    />
  </section>
</template>
