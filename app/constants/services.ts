import type { Service } from '~/types'

export const SERVICES: Service[] = [
  {
    id: 'ecommerce',
    title: 'Desarrollo web y eCommerce',
    description:
      'Sitios y tiendas en línea construidos para vender, no solo para verse bien. Desde WordPress/WooCommerce hasta stacks modernos con Vue y Nuxt.',
    highlights: [
      'Tiendas WooCommerce completas',
      'Integración de pasarelas de pago',
      'Catálogos de productos y variantes',
      'Recuperación de carritos abandonados',
      'Sitios de aterrizaje y funnels',
    ],
    icon: 'store',
  },
  {
    id: 'seo',
    title: 'SEO y SEM',
    description:
      'Posicionamiento orgánico y gestión de campañas con medición real. Google Tag Manager, GA4 y Meta Pixel para que cada peso invertido sea rastreable.',
    highlights: [
      'Optimización on-page y estructura técnica',
      'Google Tag Manager y GA4',
      'Meta Pixel y conversiones',
      'Funnels a formularios y WhatsApp',
      'Reportes de rendimiento de campañas',
    ],
    icon: 'search',
  },
  {
    id: 'mantenimiento',
    title: 'Mantenimiento y soporte continuo',
    description:
      'Esquema de iguala mensual: respaldos, actualizaciones, monitoreo y ajustes graduales. Sin sorpresas, sin emergencias evitables.',
    highlights: [
      'Respaldo verificado antes de cada cambio',
      'Actualizaciones de core, plugins y temas',
      'Monitoreo de disponibilidad y seguridad',
      'Ajustes y mejoras graduales',
      'Comunicación directa y respuesta ágil',
    ],
    icon: 'shield',
  },
  {
    id: 'integraciones',
    title: 'Integraciones y automatización',
    description:
      'Cuando los datos están en un sistema y necesitan estar en otro, o cuando un proceso manual puede hacerlo un script. Scrapers, APIs y migraciones de datos.',
    highlights: [
      'Sincronización de catálogos de proveedores',
      'Scraping de datos async a gran escala',
      'Integraciones con APIs externas',
      'Migraciones y exportación de datos',
      'Automatización de procesos repetitivos',
    ],
    icon: 'plug',
  },
]
