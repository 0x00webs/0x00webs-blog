<script setup lang="ts">
import { motion } from 'motion-v'

const { data: articles } = await useAsyncData<any[]>('articles', () =>
  queryCollection('articles').order('date', 'DESC').all()
)
</script>

<template>
  <UContainer class="pt-20 pb-24">
    <motion.section
      class="space-y-10"
      :initial="{ opacity: 0, y: 18 }"
      :animate="{ opacity: 1, y: 0 }"
      :transition="{ duration: 0.75 }"
      data-aos="fade-up"
    >
      <div class="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div>
          <h1 class="text-3xl font-bold">Blog</h1>
          <p class="mt-2 max-w-[44ch] text-muted-foreground">
            A running log of ideas, experiments, and notes — written from the perspective of a dev who loves
            building in public.
          </p>
        </div>
        <UButton variant="outline" size="lg" to="/about">
          About me
        </UButton>
      </div>

      <div class="grid gap-6 md:grid-cols-2">
        <motion.article
          v-for="post in articles"
          :key="post.path"
          class="group rounded-2xl border border-default bg-card/40 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
          :initial="{ opacity: 0, y: 18 }"
          :animate="{ opacity: 1, y: 0 }"
          :transition="{ duration: 0.6 }"
          data-aos="fade-up"
        >
          <div class="flex items-start justify-between gap-4">
            <div>
              <p class="text-xs font-semibold uppercase tracking-wide text-primary/80">
                {{ post.tags?.[0]?.name ?? 'Blog' }}
              </p>
              <h2 class="mt-2 text-xl font-semibold leading-snug">{{ post.title }}</h2>
            </div>
            <span class="text-xs text-muted-foreground">{{ new Date(post.date).toLocaleDateString() }}</span>
          </div>

          <p class="mt-4 text-sm text-muted-foreground">{{ post.description }}</p>

          <div class="mt-6">
            <UButton
              variant="ghost"
              size="sm"
              :to="`/articles/${post.path.split('/').pop()}`"
              class="font-semibold"
            >
              Read more →
            </UButton>
          </div>
        </motion.article>
      </div>
    </motion.section>
  </UContainer>
</template>
