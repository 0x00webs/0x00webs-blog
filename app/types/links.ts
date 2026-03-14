import { z } from 'zod'

const _socialLink = z.object({
  label: z.string(),
  to: z.string(),
  icon: z.string(),
  target: z.optional(z.enum(['_blank', '_self', '_parent', '_top']))
})

export type SocialLink = z.infer<typeof _socialLink>
