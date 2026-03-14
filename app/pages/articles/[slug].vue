<script setup lang="ts">
import { motion } from 'motion-v'
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()
const slug = String(route.params.slug || '')

const {
  data: article,
  pending,
  error
} = await useAsyncData(`article-${slug}`, () =>
  queryCollection('articles').path(`/articles/${slug}`).first()
)

if (!pending.value && !error.value && !article.value) {
  // Redirect to articles index if slug is invalid
  router.replace('/articles')
}

const formattedDate = computed(() => {
  if (!article.value?.date) return ''
  return new Date(article.value.date).toLocaleDateString(undefined, {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  })
})
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
      <div v-if="pending" class="rounded-2xl border border-default bg-card/40 p-8 text-center">
        <p class="text-base font-medium">Loading article…</p>
      </div>

      <div v-else-if="article">
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

      <div v-else class="rounded-2xl border border-default bg-card/40 p-8 text-center">
        <p class="text-base font-medium">Article not found.</p>
        <UButton variant="solid" color="primary" size="lg" to="/articles" class="mt-4">
          Back to blog
        </UButton>
      </div>
    </motion.section>
  </UContainer>
</template>
