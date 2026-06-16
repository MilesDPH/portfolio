import type { Project } from '~/types'

export const PROJECTS: Project[] = [
  {
    id: 'bigauto',
    title: 'BigAuto: eCommerce y gestión de MercadoLibre',
    category: 'eCommerce + Marketplace',
    problem:
      'BigAuto necesitaba vender en dos lugares al mismo tiempo: su tienda propia y MercadoLibre. El reto real era que el catálogo de autopartes es grande y los dos canales tienen lógicas completamente distintas.',
    solution:
      'Tienda en línea con Laravel y Vue, integración con la API de MercadoLibre usando Laravel Horizon para manejar la cola de actualizaciones, y Django para el backend de gestión interna. El inventario se actualiza en ambos canales desde un solo lugar. En MercadoLibre se trabajó el posicionamiento de los listings: títulos con los términos que la gente busca, categorías correctas, fichas técnicas completas, que es lo que el algoritmo de ML usa para decidir qué aparece primero.',
    technologies: ['Laravel', 'Vue', 'Django', 'Laravel Horizon', 'MercadoLibre API', 'PostgreSQL'],
    featured: true,
  },
  {
    id: 'especialidades-graficas',
    title: 'Especialidades Gráficas: tienda con catálogo masivo',
    category: 'eCommerce',
    problem:
      'La conversación inicial fue sobre cuántos productos caben en WooCommerce antes de que todo empiece a ir lento. Especialidades Gráficas tiene un catálogo enorme y necesitaba que la tienda aguantara el volumen sin degradar la experiencia de búsqueda.',
    solution:
      'Tienda construida con Django, Vue y PostgreSQL. Catálogo estructurado en TypeScript con búsqueda funcional sobre decenas de miles de SKUs. En el lado del posicionamiento: URLs limpias por producto y categoría, títulos y descripciones pensados para reflejar cómo busca el cliente, y estructura de categorías que los motores de búsqueda pueden leer bien.',
    technologies: ['Django', 'Vue', 'PostgreSQL', 'TypeScript'],
    featured: true,
  },
  {
    id: 'dermaglobal',
    title: 'Dermaglobal: tienda de cosméticos y dermatología',
    category: 'eCommerce',
    problem:
      'Dermaglobal vende productos cosméticos y dermatológicos: el comprador necesita confiar en lo que va a ponerse en la piel antes de hacer clic en comprar. La tienda tenía que transmitir esa seriedad desde el primer vistazo.',
    solution:
      'Tienda en WooCommerce con diseño que pone la imagen del producto al frente, catálogo estructurado por categorías dermatológicas con fichas completas por producto. Pasarela de pago integrada y flujo de envíos configurado con el equipo de operaciones. El trabajo de fondo fue asegurarse de que la información del producto (la que genera confianza) estuviera presente y bien presentada en cada página.',
    technologies: ['WordPress', 'WooCommerce', 'PHP', 'CSS', 'JavaScript'],
    featured: true,
  },
  {
    id: 'crms-erps',
    title: 'CRMs y ERPs. seis empresas, seis industrias',
    category: 'Sistemas a medida',
    problem:
      'Seis empresas con operaciones distintas, ninguna encajaba bien en un sistema genérico. El problema de fondo siempre es el mismo: los datos importantes viven en hojas de cálculo o en la cabeza de alguien.',
    solution:
      'Magnera, Especialidades Gráficas, BigAuto, TTSA, Bones y Empacadora Huerta. Cada sistema mapea los flujos reales del negocio.',
    technologies: ['Python', 'Django', 'PostgreSQL', 'JavaScript', 'REST API'],
    featured: false,
  },
]
