import { defineCollection, defineContentConfig, z } from '@nuxt/content'

const baseSchema = z.object({
  title: z.string(),
  headline: z.optional(z.string()),
  description: z.string(),
  date: z.string().or(z.date())
})

const imageSchema = z.object({
  src: z.string(),
  alt: z.string()
})

const tagSchema = z.object({
  name: z.string(),
  slug: z.string()
})

const socialLinksSchema = z.object({
  twitter: z.optional(z.string()),
  github: z.optional(z.string()),
  linkedin: z.optional(z.string()),
  website: z.optional(z.string())
})

const authorSchema = z.object({
  name: z.string(),
  description: z.optional(z.string()),
  avatar: imageSchema.optional(),
  socialLinks: socialLinksSchema.optional()
})

const articleSchema = baseSchema.extend({
  tags: z.array(tagSchema).optional(),
  author: authorSchema.optional(),
  thumbnail: imageSchema.optional()
})

const projectSchema = baseSchema.extend({
  name: z.string().optional(),
  slug: z.string().optional(),
  url: z.string().optional(),
  src: z.string().optional(),
  alt: z.string().optional(),
  tag: z.string().optional()
})

export default defineContentConfig({
  collections: {
    articles: defineCollection({
      type: 'page',
      source: 'articles/**/*.md',
      schema: articleSchema
    }),
    projects: defineCollection({
      type: 'data',
      source: 'projects/**/*.yml',
      schema: projectSchema
    })
  }
})
