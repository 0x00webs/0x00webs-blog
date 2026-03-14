import { z } from 'zod'

export const ImageSchema = z.object({
  src: z.string().optional(),
  alt: z.string().optional()
})

export const TagSchema = z.object({
  name: z.string(),
  slug: z.string()
})

export const AuthorSchema = z.object({
  name: z.string(),
  avatar: ImageSchema.optional(),
  description: z.string().optional(),
  socialLinks: z
    .object({
      twitter: z.string().optional(),
      github: z.string().optional(),
      linkedin: z.string().optional(),
      website: z.string().optional()
    })
    .optional()
})

export const ArticleSchema = z.object({
  title: z.string(),
  description: z.string(),
  date: z.string().or(z.date()),
  tags: z.array(TagSchema).optional(),
  author: AuthorSchema.optional(),
  thumbnail: ImageSchema.optional(),
  // Nuxt Content provides a path field for routing
  path: z.string().optional(),
  // The actual markdown body is provided via `body` (often nested in the object)
  body: z.any().optional()
})

export const ProjectSchema = z.object({
  title: z.string(),
  description: z.string(),
  date: z.string().or(z.date()).optional(),
  name: z.string().optional(),
  slug: z.string().optional(),
  url: z.string().optional(),
  src: z.string().optional(),
  alt: z.string().optional(),
  tag: z.string().optional()
})

export type Article = z.infer<typeof ArticleSchema>
export type Project = z.infer<typeof ProjectSchema>
