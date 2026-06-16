import type { ProcessStep } from '~/types'

export const PROCESS_STEPS: ProcessStep[] = [
  {
    step: 1,
    title: 'Respaldo antes de tocar',
    description:
      'Regla sin excepción: primero el respaldo, después el cambio. Un solo incidente donde algo se pierde en producción cuesta más que todas las horas de precaución juntas.',
    icon: 'database',
  },
  {
    step: 2,
    title: 'Staging, no producción',
    description:
      'El cliente aprueba lo que va a ver en producción, no una descripción de lo que podría verse. Los cambios pasan por staging antes de llegar al sitio en vivo.',
    icon: 'desktop',
  },
  {
    step: 3,
    title: 'Comunicación directa',
    description:
      'Prefiero el WhatsApp al correo formal. Lo que se hizo, en qué estado está, cuándo sigue. Si algo no se entiende, ahí estoy.',
    icon: 'chat',
  },
  {
    step: 4,
    title: 'Disponibilidad continua',
    description:
      'Los proyectos que terminan siendo buena experiencia para los dos lados suelen tener algo en común: seguimos en contacto. Conozco los sistemas y cuando algo falla puedo resolverlo sin que nadie me ponga al tanto.',
    icon: 'calendar',
  },
]
