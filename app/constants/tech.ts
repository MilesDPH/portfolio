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
    category: 'Marketplaces',
    items: ['MercadoLibre API', 'Gestión de publicaciones', 'Sincronización de catálogos'],
  },
  {
    category: 'Otros',
    items: ['Docker', 'Git', 'Web scraping', 'APIs externas', 'aiohttp / asyncio'],
  },
]
