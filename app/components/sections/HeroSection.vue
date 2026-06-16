<script setup lang="ts">
import { CV_PATH, CV_FILENAME, CONTACT } from '~/constants/nav'
</script>

<template>
  <section
    id="inicio"
    class="relative min-h-screen flex items-center bg-white pt-16 overflow-hidden"
  >
    <!-- Background decoration -->
    <div class="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      <div class="absolute -top-40 -right-40 w-96 h-96 bg-blue-50 rounded-full blur-3xl opacity-60" />
      <div class="absolute -bottom-20 -left-20 w-72 h-72 bg-slate-100 rounded-full blur-3xl opacity-40" />
    </div>

    <div class="relative max-w-6xl mx-auto px-4 sm:px-6 py-20 sm:py-28 lg:py-32">
      <div class="max-w-3xl">
        <!-- Location badge -->
        <div class="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-sm font-medium mb-8">
          <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
            <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd" />
          </svg>
          Aguascalientes, México · Trabajo remoto
        </div>

        <!-- Heading -->
        <h1 class="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-slate-900 tracking-tight mb-6 leading-tight">
          Hugo
          <span class="text-blue-600">Pedroza</span>
        </h1>

        <!-- Tagline -->
        <p class="text-xl sm:text-2xl font-semibold text-slate-700 mb-4">
          Desarrollador Full-Stack · eCommerce, CRMs y sistemas a medida
        </p>

        <!-- Value proposition -->
        <p class="text-lg text-slate-500 leading-relaxed mb-10 max-w-2xl">
          Tiendas en línea y sistemas internos para empresas que necesitan resultados concretos.
          Llevo los proyectos de punto a punto y me quedo disponible cuando algo necesita ajuste.
        </p>

        <!-- CTAs -->
        <div class="flex flex-wrap gap-4">
          <CtaButton :href="CV_PATH" :download="CV_FILENAME" variant="primary" size="lg">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
            Descargar CV
          </CtaButton>
          <CtaButton :href="CONTACT.whatsapp" variant="outline" size="lg" :external="true">
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
              <path d="M11.999 2C6.477 2 2 6.477 2 12c0 1.989.574 3.842 1.566 5.408L2 22l4.724-1.546A9.956 9.956 0 0011.999 22C17.523 22 22 17.523 22 12S17.523 2 11.999 2z"/>
            </svg>
            Contactar por WhatsApp
          </CtaButton>
        </div>

        <!-- Social proof indicators -->
        <div class="mt-16 flex flex-wrap items-center gap-8 text-sm text-slate-400">
          <div class="flex items-center gap-2">
            <div class="w-2 h-2 rounded-full bg-green-400" />
            Disponible para nuevos clientes
          </div>
          <div class="flex items-center gap-2">
            <svg class="w-4 h-4 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </svg>
            +6 empresas atendidas
          </div>
          <div class="flex items-center gap-2">
            <svg class="w-4 h-4 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
            Respaldo antes de cada cambio
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
