<script setup lang="ts">
import { motion } from 'motion-v';

const { data: projects } = await useAsyncData<any[]>('projects', () =>
  queryCollection('projects').order('date', 'DESC').all()
)
</script>

<template>
  <UContainer class="pt-20 pb-24">
    <motion.section
      class="space-y-8"
      :initial="{ opacity: 0, y: 20 }"
      :animate="{ opacity: 1, y: 0 }"
      :transition="{ duration: 0.75 }"
      data-aos="fade-up"
    >
      <div class="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div>
          <h1 class="text-3xl font-bold">Projects</h1>
          <p class="mt-2 max-w-[44ch] text-muted-foreground">
            A curated list of projects I’ve built, tinkered with, and published.
          </p>
        </div>
        <UButton variant="outline" size="lg" to="/articles">
          Read the blog
        </UButton>
      </div>

      <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <motion.div
          v-for="project in projects"
          :key="project.slug"
          class="group rounded-2xl border border-default bg-card/50 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
          :initial="{ opacity: 0, y: 20 }"
          :animate="{ opacity: 1, y: 0 }"
          :transition="{ duration: 0.65, delay: 0.1 }"
          data-aos="fade-up"
        >
          <div class="flex items-start gap-4">
            <div class="flex h-14 w-14 items-center justify-center rounded-xl bg-secondary/10">
              <img
                v-if="project.src"
                :src="project.src"
                :alt="project.alt || project.title"
                class="h-10 w-10 object-contain"
              />
            </div>
            <div class="flex-1">
              <h3 class="text-lg font-semibold">{{ project.title }}</h3>
              <p class="mt-1 text-sm text-muted-foreground">{{ project.description }}</p>
            </div>
          </div>

          <div class="mt-6 flex flex-wrap items-center justify-between gap-2">
            <span class="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
              {{ project.name ?? 'project' }}
            </span>
            <a
              v-if="project.url"
              :href="project.url"
              class="text-sm font-semibold text-primary transition hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              View source →
            </a>
          </div>
        </motion.div>
      </div>

      <div class="mt-12 flex justify-center">
        <UButton variant="ghost" size="lg" to="/articles">
          Continue to the blog
        </UButton>
      </div>
    </motion.section>
  </UContainer>
</template>
