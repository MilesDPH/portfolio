import type { Project } from '~/types'

export const PROJECTS: Project[] = [
  {
    id: 'bigauto',
    title: 'BigAuto — eCommerce y gestión de MercadoLibre',
    category: 'eCommerce + Marketplace',
    problem:
      'BigAuto necesitaba vender en dos lugares al mismo tiempo: su tienda propia y MercadoLibre. El reto real era que el catálogo de autopartes es grande y los dos canales tienen lógicas completamente distintas.',
    solution:
      'Tienda en línea con Laravel y Vue, integración con la API de MercadoLibre usando Laravel Horizon para manejar la cola de actualizaciones, y Django para el backend de gestión interna. El inventario se actualiza en ambos canales desde un solo lugar.',
    technologies: ['Laravel', 'Vue', 'Django', 'Laravel Horizon', 'MercadoLibre API', 'PostgreSQL'],
    featured: true,
  },
  {
    id: 'especialidades-graficas',
    title: 'Especialidades Gráficas — tienda con catálogo masivo',
    category: 'eCommerce',
    problem:
      'La conversación inicial fue sobre cuántos productos caben en WooCommerce antes de que todo empiece a ir lento. Especialidades Gráficas tiene un catálogo enorme y necesitaba que la tienda aguantara el volumen sin degradar la experiencia de búsqueda.',
    solution:
      'Tienda construida con Django, Vue y PostgreSQL. Catálogo estructurado en TypeScript, búsqueda funcional sobre decenas de miles de SKUs, y posicionamiento de productos para que los clientes lleguen desde los buscadores.',
    technologies: ['Django', 'Vue', 'PostgreSQL', 'TypeScript'],
    featured: true,
  },
  {
    id: 'dermaglobal',
    title: 'Dermaglobal — tienda de cosméticos y dermatología',
    category: 'eCommerce',
    problem:
      'Dermaglobal quería que la tienda se viera como la marca: limpia, confiable, con la foto del producto al centro. Nada que distraiga de lo que se vende.',
    solution:
      'Tienda en WooCommerce con diseño enfocado en la presentación visual del producto, catálogo organizado por categorías dermatológicas, pasarela de pago configurada y flujo de envíos definido con el equipo.',
    technologies: ['WordPress', 'WooCommerce', 'PHP', 'CSS', 'JavaScript'],
    featured: true,
  },
  {
    id: 'crms-erps',
    title: 'CRMs y ERPs — seis empresas, seis industrias',
    category: 'Sistemas a medida',
    problem:
      'Seis empresas con operaciones distintas, ninguna encajaba bien en un sistema genérico. El problema de fondo siempre es el mismo: los datos importantes viven en hojas de cálculo o en la cabeza de alguien.',
    solution:
      'Magnera, Especialidades Gráficas, BigAuto, TTSA, Bones y Empacadora Huerta. Cada sistema mapea los flujos reales del negocio: sin módulos que nadie va a usar, sin campos que no tienen sentido para quien lo opera todos los días.',
    technologies: ['Python', 'Django', 'PostgreSQL', 'JavaScript', 'REST API'],
    featured: false,
  },
]
