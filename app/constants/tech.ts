import type { TechGroup } from '~/types'

export const TECH_GROUPS: TechGroup[] = [
  {
    category: 'Backend',
    items: ['Python', 'Django', 'PostgreSQL', 'REST APIs', 'Linux'],
  },
  {
    category: 'Frontend',
    items: ['JavaScript', 'Vue 3', 'Nuxt', 'HTML5', 'CSS3', 'Tailwind'],
  },
  {
    category: 'CMS / eCommerce',
    items: ['WordPress', 'WooCommerce', 'PHP', 'Elementor'],
  },
  {
    category: 'SEO / Analítica',
    items: ['Google Tag Manager', 'GA4', 'Meta Pixel', 'Search Console', 'PageSpeed / Core Web Vitals'],
  },
  {
    category: 'Otros',
    items: ['Web scraping', 'Docker', 'Git', 'APIs externas', 'aiohttp / asyncio'],
  },
]
