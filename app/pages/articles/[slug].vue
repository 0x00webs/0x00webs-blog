<script setup lang="ts">
import { motion } from 'motion-v'
import { useRoute, useRouter } from 'vue-router'
import EmptyState from '~/components/ui/EmptyState.vue'
import ErrorState from '~/components/ui/ErrorState.vue'
import LoadingState from '~/components/ui/LoadingState.vue'
import { getArticleBySlug } from '~/composables/useContent'

import { formatDate } from '~/utils/format'

const route = useRoute()
const router = useRouter()
const slug = String(route.params.slug || '')

const {
  data: article,
  pending,
  error,
  refresh
} = await useAsyncData(`article-${slug}`, () => getArticleBySlug(slug), {
  server: true,
  default: () => null
})

if (!pending.value && !error.value && !article.value) {
  // Redirect to articles index if slug is invalid
  router.replace('/articles')
}

const formattedDate = computed(() => formatDate(article.value?.date))
</script>

<template>
  <UContainer class="pt-20 pb-24">
    <motion.section
      class="max-w-3xl space-y-8"
      :initial="{ opacity: 0, y: 18 }"
      :animate="{ opacity: 1, y: 0 }"
      :transition="{ duration: 0.75 }"
      data-aos="fade-up"
    >
      <LoadingState v-if="pending" message="Loading article…" />

      <ErrorState
        v-else-if="error"
        title="Failed to load article"
        :message="error.message || 'Something went wrong while fetching this article.'"
        :on-retry="() => refresh()"
      />

      <EmptyState
        v-else-if="!article"
        title="Article not found"
        description="This article may have been removed or the URL is incorrect."
      >
        <UButton variant="solid" color="primary" size="lg" to="/articles" class="mt-4">
          Back to blog
        </UButton>
      </EmptyState>

      <div v-else>
        <div class="space-y-3">
          <p class="text-sm font-semibold uppercase tracking-wide text-primary/70">
            {{ article.tags?.[0]?.name ?? 'Blog' }}
          </p>
          <h1 class="text-3xl font-bold leading-tight">{{ article.title }}</h1>
          <p class="text-sm text-muted-foreground">{{ formattedDate }}</p>
        </div>

        <div class="prose prose-invert max-w-none" data-aos="fade-up" data-aos-delay="80">
          <ContentRenderer :value="article" />
        </div>

        <div class="mt-12 flex flex-wrap items-center gap-3">
          <UButton variant="outline" size="md" to="/articles"> ← Back to all posts </UButton>
          <UButton
            variant="ghost"
            size="md"
            :to="article.path ? `/articles/${article.path.split('/').pop()}` : '/articles'"
          >
            Share
          </UButton>
        </div>
      </div>
    </motion.section>
  </UContainer>
</template>
