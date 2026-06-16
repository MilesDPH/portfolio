import type { Service } from '~/types'

export const SERVICES: Service[] = [
  {
    id: 'ecommerce',
    title: 'Desarrollo web y eCommerce',
    description:
      'Tiendas que tienen que vender desde el primer día, con catálogos que van de diez productos a decenas de miles. WordPress y WooCommerce la mayor parte del tiempo, Vue y Django cuando el proyecto lo exige.',
    highlights: [
      'Tiendas WooCommerce completas',
      'Catálogos grandes y bien estructurados',
      'Integración de pasarelas de pago',
      'Gestión de envíos y variantes',
      'Sitios de aterrizaje y micrositios',
    ],
    icon: 'store',
  },
  {
    id: 'seo-tecnico',
    title: 'SEO técnico y medición',
    description:
      'La parte técnica que hace que tu sitio sea legible para los buscadores y que tu operación de marketing tenga dónde apoyarse. Trabajo la implementación: estructura on-page, etiquetas y herramientas de seguimiento. La estrategia de pauta la llevas tú o tu equipo; yo dejo el sitio listo para conectarla.',
    highlights: [
      'Estructura on-page: títulos, metaetiquetas y URLs limpias',
      'Integración de Google Tag Manager',
      'Implementación de GoHighLevel para gestión y seguimiento de leads',
      'Catálogos y fichas estructurados para que los buscadores los lean bien',
    ],
    icon: 'chart',
  },
  {
    id: 'crm-erp',
    title: 'CRMs, ERPs y sistemas a medida',
    description:
      'Cada empresa tiene procesos distintos y los sistemas genéricos nunca encajan del todo. CRMs y ERPs hechos a la medida: el flujo de trabajo que ya existe en el negocio, digitalizado sin complicar las cosas.',
    highlights: [
      'CRMs de gestión de clientes y ventas',
      'ERPs con módulos a medida',
      'Paneles de administración internos',
      'Flujos de trabajo digitalizados',
      'Reportes y dashboards operativos',
    ],
    icon: 'crm',
  },
  {
    id: 'mantenimiento',
    title: 'Mantenimiento y soporte',
    description:
      'Respaldos, actualizaciones, monitoreo y ajustes graduales. Alguien disponible cuando algo necesita atención, sin tener que explicar el contexto cada vez.',
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
    id: 'marketplaces',
    title: 'Marketplaces e integraciones',
    description:
      'MercadoLibre tiene sus propias reglas: publicaciones, posicionamiento dentro del marketplace, logística, respuestas. He gestionado esto para empresas con catálogos grandes y hay bastante trabajo detrás de lo que parece simple.',
    highlights: [
      'Publicaciones y gestión en MercadoLibre',
      'Posicionamiento de productos en marketplace',
      'Sincronización de inventario entre canales',
      'Integraciones con APIs externas',
      'Automatización de catálogos y precios',
    ],
    icon: 'plug',
  },
]
