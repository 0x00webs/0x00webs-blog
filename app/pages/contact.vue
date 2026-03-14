<script setup lang="ts">
import { motion } from 'motion-v'
import { siteConfig } from '~/app.meta'

const { author } = siteConfig

const sendEmail = () => {
  const subject = encodeURIComponent('Hello from your website')
  const body = encodeURIComponent('Hi! I came across your site and wanted to say hi.\n\n')
  window.location.href = `mailto:${author.email}?subject=${subject}&body=${body}`
}
</script>

<template>
  <UContainer class="pt-20 pb-24">
    <motion.section
      class="max-w-3xl space-y-10"
      :initial="{ opacity: 0, y: 18 }"
      :animate="{ opacity: 1, y: 0 }"
      :transition="{ duration: 0.75 }"
      data-aos="fade-up"
    >
      <div>
        <h1 class="text-3xl font-bold">Get in touch</h1>
        <p class="mt-2 max-w-[44ch] text-muted-foreground">
          Have a question or want to collaborate? Drop me a note — I’ll usually respond within a few
          days.
        </p>
      </div>

      <div class="grid gap-6 sm:grid-cols-2">
        <div class="rounded-2xl border border-default bg-card/40 p-6">
          <h2 class="text-xl font-semibold">Email</h2>
          <p class="mt-1 text-sm text-muted-foreground">
            Send me a note and I’ll follow up as soon as I can.
          </p>
          <div class="mt-4">
            <UButton variant="solid" color="primary" size="lg" @click="sendEmail">Email me</UButton>
          </div>
        </div>

        <div class="rounded-2xl border border-default bg-card/40 p-6">
          <h2 class="text-xl font-semibold">Social</h2>
          <p class="mt-1 text-sm text-muted-foreground">
            Chat with me on GitHub, Twitter, or LinkedIn.
          </p>

          <div class="mt-4 flex flex-wrap gap-3">
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
      </div>
    </motion.section>
  </UContainer>
</template>
