import type { ProcessStep } from '~/types'

export const PROCESS_STEPS: ProcessStep[] = [
  {
    step: 1,
    title: 'Respaldo antes de tocar',
    description:
      'Antes de cualquier actualización, cambio de plugin o modificación de código, hago un respaldo completo y verificado. El sitio en producción nunca corre riesgo innecesario.',
    icon: 'database',
  },
  {
    step: 2,
    title: 'Staging, no producción',
    description:
      'Los cambios importantes se prueban en un ambiente de staging antes de llegar al sitio en vivo. Lo que el cliente aprueba es exactamente lo que se publica.',
    icon: 'desktop',
  },
  {
    step: 3,
    title: 'Comunicación directa',
    description:
      'Reportes claros de lo que se hizo, por qué y qué sigue. Sin tecnicismos innecesarios. Disponibilidad por WhatsApp para preguntas y ajustes rápidos.',
    icon: 'chat',
  },
  {
    step: 4,
    title: 'Esquema flexible de iguala',
    description:
      'El modelo de iguala mensual está diseñado para negocios que necesitan un developer disponible: mantenimiento, ajustes graduales, nuevas funciones — sin necesidad de abrir proyecto cada vez.',
    icon: 'calendar',
  },
]
