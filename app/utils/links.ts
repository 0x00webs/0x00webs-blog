import type { NavigationMenuItem } from '@nuxt/ui'
import { computed } from 'vue'
import type { SocialLink } from '~/types/links'

// provide a composable so router access occurs inside a setup context
export function useNavLinks() {
  const route = useRoute()
  return computed<NavigationMenuItem[]>(() => [
    {
      label: 'Home',
      icon: 'i-lucide-home',
      to: '/',
      active: route.path === '/'
    },
    {
      label: 'About',
      icon: 'i-lucide-user',
      to: '/about',
      active: route.path === '/about'
    },
    {
      label: 'Projects',
      icon: 'i-lucide-folder',
      to: '/projects',
      active: route.path === '/projects'
    },
    {
      label: 'Blog',
      icon: 'i-lucide-file-text',
      to: '/articles',
      active: route.path === '/articles'
    },
    {
      label: 'Contact',
      icon: 'i-lucide-mail',
      to: '/contact',
      active: route.path === '/contact'
    }
  ])
}

export const socialLinks: SocialLink[] = [
  {
    label: 'GitHub',
    icon: 'i-lucide-github',
    to: 'https://github.com/0x00webs',
    target: '_blank'
  },
  {
    label: 'Twitter',
    icon: 'i-lucide-twitter',
    to: 'https://twitter.com/0x00webs',
    target: '_blank'
  },
  {
    label: 'LinkedIn',
    icon: 'i-lucide-linkedin',
    to: 'https://linkedin.com/in/0x00webs',
    target: '_blank'
  }
]
