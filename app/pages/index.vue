<script setup lang="ts">
import { motion } from 'motion-v'
import siteConfig from '~/app.meta'

const { author, name: siteName } = siteConfig

const features = [
  {
    title: 'Personal stories & experiments',
    description:
      'A place to share what I learn while building projects, solving problems, and exploring new tools.',
    icon: 'i-lucide-feather'
  },
  {
    title: 'Lightweight & fast',
    description:
      'Built with Nuxt 4, Tailwind, and the smallest possible runtime so the site stays snappy.',
    icon: 'i-lucide-rocket'
  },
  {
    title: 'Just enough motion',
    description:
      'Soft animations and scroll effects keep the interface engaging without being distracting.',
    icon: 'i-lucide-magic-wand'
  }
]

const { data: latestPosts } = await useAsyncData<any[]>('latestPosts', () =>
  queryCollection('articles').order('date', 'DESC').limit(3).all()
)
</script>

<template>
  <UContainer class="pt-20 pb-24">
    <!-- Hero -->
    <motion.section
      class="relative flex flex-col items-center gap-6 text-center"
      :initial="{ opacity: 0, y: 20 }"
      :animate="{ opacity: 1, y: 0 }"
      :transition="{ duration: 0.8 }"
    >
      <p
        class="text-sm font-semibold tracking-wider text-primary/70 uppercase"
        data-aos="fade-down"
      >
        Hi, I’m {{ author.name }} —
        <span class="font-normal">building, writing, and sharing.</span>
      </p>

      <h1
        class="max-w-[44ch] text-4xl font-extrabold leading-tight sm:text-5xl lg:text-6xl"
        data-aos="fade-up"
      >
        A personal site for <span class="text-primary">projects</span> and
        <span class="text-primary">writing</span>, powered by Nuxt.
      </h1>

      <p
        class="max-w-[55ch] text-base text-muted-foreground"
        data-aos="fade-up"
        data-aos-delay="120"
      >
        Welcome to {{ siteName }}. This is my place to document what I’m building, why it matters,
        and how you can build similar things with modern web tooling.
      </p>

      <div
        class="flex flex-col items-center gap-3 sm:flex-row sm:justify-center"
        data-aos="fade-up"
        data-aos-delay="240"
      >
        <UButton variant="solid" color="primary" size="lg" class="w-full sm:w-auto" to="/projects">
          Explore projects
        </UButton>
        <UButton variant="outline" size="lg" class="w-full sm:w-auto" to="/articles">
          Read the blog
        </UButton>
      </div>
    </motion.section>

    <!-- Features -->
    <section class="mt-20">
      <div class="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div>
          <h2 class="text-3xl font-bold" data-aos="fade-right">What you’ll find here</h2>
          <p
            class="mt-2 max-w-[44ch] text-muted-foreground"
            data-aos="fade-right"
            data-aos-delay="100"
          >
            A mix of quick notes, long-form posts, and occasional deep-dives—always with an eye
            toward practical takeaways.
          </p>
        </div>
        <UButton
          variant="ghost"
          size="lg"
          class="w-full justify-center sm:w-auto"
          to="/about"
          data-aos="fade-left"
          data-aos-delay="140"
        >
          About me
        </UButton>
      </div>

      <div class="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <motion.div
          v-for="feature in features"
          :key="feature.title"
          class="group rounded-2xl border border-default bg-card/40 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
          :initial="{ opacity: 0, y: 20 }"
          :animate="{ opacity: 1, y: 0 }"
          :transition="{ duration: 0.65, delay: 0.1 }"
          data-aos="fade-up"
        >
          <div class="flex items-center gap-3">
            <span
              class="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-secondary/10 text-secondary transition group-hover:bg-secondary/20"
            >
              <i :class="feature.icon" class="text-xl" aria-hidden="true" />
            </span>
            <h3 class="text-lg font-semibold">{{ feature.title }}</h3>
          </div>
          <p class="mt-3 text-sm text-muted-foreground">{{ feature.description }}</p>
        </motion.div>
      </div>
    </section>

    <!-- Latest posts -->
    <section class="mt-20">
      <div class="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h2 class="text-3xl font-bold" data-aos="fade-right">Latest posts</h2>
          <p
            class="mt-2 max-w-[44ch] text-muted-foreground"
            data-aos="fade-right"
            data-aos-delay="100"
          >
            Short reads and deep dives—updated as I ship new ideas.
          </p>
        </div>
        <UButton
          variant="outline"
          size="lg"
          class="w-full justify-center sm:w-auto"
          to="/articles"
          data-aos="fade-left"
          data-aos-delay="140"
        >
          View all articles
        </UButton>
      </div>

      <div class="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <motion.div
          v-for="post in latestPosts"
          :key="post.path"
          class="group rounded-2xl border border-default bg-card/50 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
          :initial="{ opacity: 0, y: 24 }"
          :animate="{ opacity: 1, y: 0 }"
          :transition="{ duration: 0.65, delay: 0.12 }"
          data-aos="fade-up"
        >
          <div class="flex items-center justify-between gap-4">
            <span class="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
              {{ post.tags?.[0]?.name ?? 'Blog' }}
            </span>
            <span class="text-xs text-muted-foreground">{{
              new Date(post.date).toLocaleDateString()
            }}</span>
          </div>
          <h3 class="mt-4 text-lg font-semibold leading-snug">{{ post.title }}</h3>
          <p class="mt-2 text-sm text-muted-foreground">{{ post.description }}</p>
          <div class="mt-5">
            <UButton
              variant="ghost"
              size="sm"
              :to="`/articles/${post.path.split('/').pop()}`"
              class="font-semibold"
            >
              Read more →
            </UButton>
          </div>
        </motion.div>
      </div>
    </section>

    <!-- GitHub CTA -->
    <section class="mt-20 border-t border-default/60 pt-16">
      <div class="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 class="text-2xl font-bold" data-aos="fade-right">Want the source?</h2>
          <p
            class="mt-2 max-w-[44ch] text-muted-foreground"
            data-aos="fade-right"
            data-aos-delay="100"
          >
            Everything here is open source and easy to fork — the ideal starting point for your own
            portfolio + blog.
          </p>
        </div>
        <UButton
          variant="outline"
          size="lg"
          class="w-full justify-center sm:w-auto"
          to="https://github.com/0x00webs/0x00webs-blog"
          target="_blank"
          rel="noopener noreferrer"
          data-aos="fade-left"
          data-aos-delay="140"
        >
          View on GitHub
        </UButton>
      </div>
    </section>
  </UContainer>
</template>
