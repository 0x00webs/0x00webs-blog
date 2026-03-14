import type { Author } from '~/types/author'

const author: Author = {
  name: '0x00webs',
  email: '0x00webs@proton.me',
  description: 'A passionate web developer and blogger.',
  avatar: {
    src: 'https://avatars.githubusercontent.com/u/178827097',
    alt: '0x00webs Avatar'
  },
  socialLinks: {
    twitter: 'https://twitter.com/0x00webs',
    github: 'https://github.com/0x00webs',
    linkedin: 'https://www.linkedin.com/in/0x00webs',
    website: 'https://0x00webs.dev'
  },
  tech: [
    {
      name: 'TypeScript',
      slug: 'typescript',
      logo: {
        src: '/tech/typescript.png',
        alt: 'TypeScript Logo'
      },
      url: 'https://www.typescriptlang.org/'
    },
    {
      name: 'Next.js',
      slug: 'nextjs',
      logo: {
        src: '/tech/nextjs.png',
        alt: 'Next.js Logo'
      },
      url: 'https://nextjs.org/'
    },
    {
      name: 'Tailwind CSS',
      slug: 'tailwindcss',
      logo: {
        src: '/tech/tailwindcss.png',
        alt: 'Tailwind CSS Logo'
      },
      url: 'https://tailwindcss.com/'
    }
  ]
}

const siteConfig = {
  id: '0x00webs-blog',
  name: '0x00webs Blog',
  headLine: 'Welcome to 0x00webs Blog',
  description:
    'The blog of 0x00webs, Here I share my thoughts on web development, programming, and everything in between.',
  url: 'https://0x00webs-blog.vercel.app',
  icon: '/favicon.ico',
  author
}

export default siteConfig
