<script setup lang="ts">
import { motion } from 'motion-v'
import EmptyState from '~/components/ui/EmptyState.vue'
import ErrorState from '~/components/ui/ErrorState.vue'
import LoadingState from '~/components/ui/LoadingState.vue'
import { getAllArticles } from '~/composables/useContent'
import { formatDate } from '~/utils/format'

const { data: articles, pending, error, refresh } = await useAsyncData('articles', () => getAllArticles(), {
  server: true,
  default: () => []
})
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

      <div class="mt-6">
        <LoadingState v-if="pending" message="Loading posts…" />
        <ErrorState
          v-else-if="error"
          title="Unable to load posts"
          :message="error.message || 'Something went wrong while fetching posts.'"
          :onRetry="() => refresh()"
        />
        <EmptyState
          v-else-if="Array.isArray(articles) && articles.length === 0"
          title="No posts found"
          description="There are no posts to show yet. Check back soon for new content."
        />

        <div v-else class="grid gap-6 md:grid-cols-2">
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
              <span class="text-xs text-muted-foreground">{{ formatDate(post.date) }}</span>
            </div>

            <p class="mt-4 text-sm text-muted-foreground">{{ post.description }}</p>

            <div class="mt-6">
              <UButton
                variant="ghost"
                size="sm"
                :to="post.path ? `/articles/${post.path.split('/').pop()}` : '/articles'"
                class="font-semibold"
              >
                Read more →
              </UButton>
            </div>
          </motion.article>
        </div>
      </div>
    </motion.section>
  </UContainer>
</template>
