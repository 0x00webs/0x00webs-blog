import { z } from 'zod'

const ImageSchema = z.object({
  src: z.string(),
  alt: z.string()
})

const SocialLinksSchema = z.object({
  twitter: z.string(),
  github: z.string(),
  linkedin: z.string(),
  website: z.string()
})

const TechStackSchema = z.object({
  name: z.string(),
  slug: z.string(),
  logo: ImageSchema,
  url: z.string()
})

const _AuthorSchema = z.object({
  name: z.string(),
  email: z.string(),
  description: z.string(),
  avatar: ImageSchema,
  socialLinks: SocialLinksSchema,
  tech: z.array(TechStackSchema)
})

export type Author = z.infer<typeof _AuthorSchema>
