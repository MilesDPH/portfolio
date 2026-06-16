<script setup lang="ts">
import { CV_PATH, CV_FILENAME, CONTACT } from '~/constants/nav'

const contactLinks = [
  {
    label: 'WhatsApp',
    href: CONTACT.whatsapp,
    description: 'Respuesta directa y rápida',
    external: true,
    icon: 'whatsapp',
  },
  {
    label: CONTACT.email,
    href: `mailto:${CONTACT.email}`,
    description: 'Para proyectos y cotizaciones',
    external: false,
    icon: 'email',
  },
  {
    label: 'LinkedIn',
    href: CONTACT.linkedin,
    description: 'Perfil profesional',
    external: true,
    icon: 'linkedin',
  },
  {
    label: 'GitHub',
    href: CONTACT.github,
    description: 'Código y proyectos abiertos',
    external: true,
    icon: 'github',
  },
]
</script>

<template>
  <section id="contacto" class="bg-slate-900 py-20 px-4 sm:px-6">
    <div class="max-w-6xl mx-auto">
      <!-- Main CTA block -->
      <div class="text-center mb-16">
        <h2 class="text-3xl sm:text-4xl font-bold text-white mb-4">
          ¿Hablamos de tu proyecto?
        </h2>
        <p class="text-lg text-slate-400 max-w-2xl mx-auto mb-10">
          Si buscas un developer de confianza para mantener y hacer crecer tu presencia digital,
          me interesa escucharte.
        </p>
        <div class="flex flex-wrap justify-center gap-4">
          <a
            :href="CONTACT.whatsapp"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-3.5 rounded-lg transition-colors text-base"
          >
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM11.999 2C6.477 2 2 6.477 2 12c0 1.989.574 3.842 1.566 5.408L2 22l4.724-1.546A9.956 9.956 0 0011.999 22C17.523 22 22 17.523 22 12S17.523 2 11.999 2z"/>
            </svg>
            Escribir por WhatsApp
          </a>
          <a
            :href="CV_PATH"
            :download="CV_FILENAME"
            class="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold px-6 py-3.5 rounded-lg transition-colors text-base border border-white/20"
          >
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
            Descargar CV en PDF
          </a>
        </div>
      </div>

      <!-- Contact links grid -->
      <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <a
          v-for="link in contactLinks"
          :key="link.icon"
          :href="link.href"
          :target="link.external ? '_blank' : undefined"
          :rel="link.external ? 'noopener noreferrer' : undefined"
          class="flex items-center gap-4 bg-white/5 hover:bg-white/10 border border-white/10 rounded-2xl p-5 transition-colors group"
        >
          <div class="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-white shrink-0 group-hover:bg-blue-600 transition-colors">
            <!-- WhatsApp -->
            <svg v-if="link.icon === 'whatsapp'" class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM11.999 2C6.477 2 2 6.477 2 12c0 1.989.574 3.842 1.566 5.408L2 22l4.724-1.546A9.956 9.956 0 0011.999 22C17.523 22 22 17.523 22 12S17.523 2 11.999 2z"/>
            </svg>
            <!-- Email -->
            <svg v-else-if="link.icon === 'email'" class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            <!-- LinkedIn -->
            <svg v-else-if="link.icon === 'linkedin'" class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
            <!-- GitHub -->
            <svg v-else-if="link.icon === 'github'" class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
            </svg>
          </div>
          <div class="min-w-0">
            <p class="text-white font-semibold text-sm truncate">{{ link.label }}</p>
            <p class="text-slate-400 text-xs">{{ link.description }}</p>
          </div>
        </a>
      </div>

      <!-- Closing phrase -->
      <p class="text-center text-slate-500 text-sm mt-12">
        Busco relaciones de largo plazo con clientes que valoran la constancia y la comunicación directa.
      </p>
    </div>
  </section>
</template>
