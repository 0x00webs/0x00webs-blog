import { z } from 'zod'

const ImageSchema = z.object({
  src: z.string().editor({ input: 'media' }),
  alt: z.string()
})

const SocialLinksSchema = z.object({
  twitter: z.optional(z.string()),
  github: z.optional(z.string()),
  linkedin: z.optional(z.string()),
  website: z.optional(z.string())
})

const TechStackSchema = z.object({
  name: z.string(),
  slug: z.string(),
  logo: ImageSchema.optional(),
  url: z.optional(z.string())
})

const _AuthorSchema = z.object({
  name: z.string(),
  email: z.optional(z.string()),
  description: z.optional(z.string()),
  avatar: ImageSchema.optional(),
  socialLinks: SocialLinksSchema.optional(),
  tech: z.optional(z.array(TechStackSchema))
})

export type Author = z.infer<typeof _AuthorSchema>
