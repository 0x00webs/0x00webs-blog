<script setup lang="ts">
import { motion } from 'motion-v';
import siteConfig from '~/app.meta';

const { author } = siteConfig
</script>

<template>
  <UContainer class="pt-20 pb-24">
    <motion.section
      class="grid gap-10 lg:grid-cols-[280px_1fr]"
      :initial="{ opacity: 0, y: 20 }"
      :animate="{ opacity: 1, y: 0 }"
      :transition="{ duration: 0.75 }"
      data-aos="fade-up"
    >
      <div class="flex flex-col items-center gap-6 rounded-2xl border border-default bg-card/40 p-8 shadow-sm">
        <UAvatar
          :src="author.avatar.src"
          :alt="author.avatar.alt"
          size="xl"
          class="rounded-full border-2 border-default"
        />
        <div class="text-center">
          <h1 class="text-2xl font-bold">{{ author.name }}</h1>
          <p class="text-sm text-muted-foreground">{{ author.description }}</p>
        </div>

        <div class="flex flex-wrap justify-center gap-3">
          <a
            v-if="author.socialLinks?.github"
            :href="author.socialLinks.github"
            class="inline-flex items-center gap-2 rounded-full border border-default px-3 py-2 text-sm font-semibold transition hover:bg-primary/10"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i class="i-lucide-github" aria-hidden="true" />
            GitHub
          </a>
          <a
            v-if="author.socialLinks?.twitter"
            :href="author.socialLinks.twitter"
            class="inline-flex items-center gap-2 rounded-full border border-default px-3 py-2 text-sm font-semibold transition hover:bg-primary/10"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i class="i-lucide-twitter" aria-hidden="true" />
            Twitter
          </a>
          <a
            v-if="author.socialLinks?.linkedin"
            :href="author.socialLinks.linkedin"
            class="inline-flex items-center gap-2 rounded-full border border-default px-3 py-2 text-sm font-semibold transition hover:bg-primary/10"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i class="i-lucide-linkedin" aria-hidden="true" />
            LinkedIn
          </a>
        </div>
      </div>

      <div>
        <div class="prose prose-invert max-w-none">
          <h2 class="text-2xl font-bold" data-aos="fade-right">
            About this site
          </h2>
          <p class="mt-4" data-aos="fade-right" data-aos-delay="60">
            This site is a personal hub where I share what I’m building, the tools I use, and the lessons I learn
            along the way.
          </p>
          <p class="mt-3" data-aos="fade-right" data-aos-delay="80">
            It’s intentionally minimal, focused on content, and built using the latest Nuxt tooling. Feel free to
            fork the repo and customize it for your own projects.
          </p>

          <h3 class="mt-10 text-xl font-semibold" data-aos="fade-right" data-aos-delay="120">
            Tech I use most
          </h3>
          <div class="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3">
            <div
              v-for="tech in author.tech"
              :key="tech.slug"
              class="flex items-center gap-3 rounded-xl border border-default bg-card/50 p-3"
              data-aos="fade-up"
              data-aos-delay="150"
            >
              <img
                v-if="tech.logo"
                :src="tech.logo.src"
                :alt="tech.logo.alt"
                class="h-8 w-8 rounded-md object-cover"
              />
              <div>
                <p class="font-semibold">{{ tech.name }}</p>
                <p class="text-xs text-muted-foreground">
                  <a
                    v-if="tech.url"
                    :href="tech.url"
                    class="underline hover:text-primary"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Learn more
                  </a>
                </p>
              </div>
            </div>
          </div>

          <div class="mt-12">
            <UButton variant="solid" color="primary" size="lg" to="/projects">
              Start with projects
            </UButton>
          </div>
        </div>
      </div>
    </motion.section>
  </UContainer>
</template>
