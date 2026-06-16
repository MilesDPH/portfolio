import type { Project } from '~/types'

export const PROJECTS: Project[] = [
  {
    id: 'tienda-computo',
    title: 'Tienda en línea — Productos de cómputo',
    category: 'eCommerce',
    problem:
      'El negocio necesitaba una tienda en línea funcional con capacidad de medir el comportamiento de compradores y recuperar ventas perdidas, además de sentar las bases para campañas de publicidad pagada.',
    solution:
      'Desarrollé la tienda completa en WooCommerce: catálogo de productos (impresoras, accesorios y equipos de cómputo), checkout optimizado e integración de medios de pago. En la fase actual, estoy implementando Google Tag Manager, GA4 y Meta Pixel para conversion tracking completo, recuperación de carritos abandonados y funnel a WhatsApp. Trabajo en conjunto con un especialista en marketing para alinear la arquitectura técnica con las campañas.',
    technologies: ['WordPress', 'WooCommerce', 'Google Tag Manager', 'GA4', 'Meta Pixel', 'PHP'],
    featured: true,
  },
  {
    id: 'scrapers-catalogo',
    title: 'Integración de catálogos — Abasteo y Azerty',
    category: 'Automatización',
    problem:
      'Dos distribuidores mexicanos (Abasteo y Azerty) no ofrecen API pública. Sus catálogos de miles de productos necesitaban importarse y mantenerse sincronizados automáticamente en una tienda WooCommerce.',
    solution:
      'Desarrollé scrapers async en Python con manejo de encoding complejo (corrección de mojibake Latin-1/Windows-1252), circuit breakers para respetar los límites del WAF de cada sitio, descarga y almacenamiento de imágenes, y persistencia en PostgreSQL. El sistema corre de forma programada y actualiza precios y disponibilidad sin intervención manual.',
    result: 'Miles de productos sincronizados automáticamente desde dos proveedores.',
    technologies: ['Python', 'aiohttp', 'BeautifulSoup', 'PostgreSQL', 'asyncio'],
    featured: true,
  },
  {
    id: 'sistema-rrhh',
    title: 'Sistema de RRHH — RH V3',
    category: 'Aplicación de negocio',
    problem:
      'Una empresa gestionaba vacaciones, permisos y registros de recursos humanos en hojas de cálculo, con errores frecuentes y sin visibilidad en tiempo real para los managers.',
    solution:
      'Construí un sistema web full-stack: módulo de solicitud y aprobación de vacaciones, control de permisos, dashboard de managers y reportes exportables. Backend en Django con API REST, frontend en JavaScript con interfaz clara para usuarios no técnicos.',
    technologies: ['Python', 'Django', 'PostgreSQL', 'JavaScript', 'REST API'],
    featured: false,
  },
]
