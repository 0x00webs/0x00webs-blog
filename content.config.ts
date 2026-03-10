import { defineCollection, defineContentConfig, z } from '@nuxt/content'
import { asSitemapCollection } from '@nuxtjs/sitemap/content'

const baseSchema = z.object({
  title: z.string(),
  headline: z.optional(z.string()),
  description: z.string(),
  date: z.date()
})

const imageSchema = z.object({
  src: z.string().editor({ input: 'media' }),
  alt: z.string()
})

const socialLinksSchema = z.object({
  twitter: z.optional(z.string()),
  github: z.optional(z.string()),
  linkedin: z.optional(z.string()),
  website: z.optional(z.string())
})

const techStackSchema = z.object({
  name: z.string(),
  slug: z.string(),
  logo: imageSchema.optional(),
  url: z.optional(z.string())
})

const authorSchema = z.object({
  name: z.string(),
  description: z.optional(z.string()),
  avatar: imageSchema.optional(),
  socialLinks: socialLinksSchema.optional(),
  tech: z.optional(z.array(techStackSchema))
})

const tagSchema = z.object({
  name: z.string(),
  slug: z.string()
})

const projectSchema = z.object({
  ...baseSchema.shape,
  ...imageSchema.shape,
  ...tagSchema.shape
})

export default defineContentConfig({
  collections: {
    articles: defineCollection(
      asSitemapCollection({
        source: 'articles/**/*.md',
        type: 'page',
        schema: z.object({
          ...baseSchema.shape,
          thumbnail: imageSchema.optional(),
          tags: z.optional(z.array(tagSchema)),
          author: authorSchema.optional()
        })
      })
    ),
    projects: defineCollection(
      asSitemapCollection({
        type: 'data',
        source: 'projects/**/*.yml',
        schema: z.object({
          ...projectSchema.shape
        })
      })
    )
  }
})
