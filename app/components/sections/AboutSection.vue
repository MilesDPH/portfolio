<template>
  <SectionWrapper id="sobre-mi" title="Sobre mí" :dark="true">
    <div class="grid lg:grid-cols-5 gap-12 lg:gap-16 items-start">
      <!-- Text content (3/5) -->
      <div class="lg:col-span-3 flex flex-col gap-5 text-slate-600 leading-relaxed">
        <p>
          Soy desarrollador full-stack con base sólida en backend Python/Django y amplia experiencia en
          WordPress, WooCommerce y stacks modernos como Vue 3 y Nuxt. El sitio que estás leyendo
          está construido en Nuxt — es parte del trabajo, no solo el escaparate.
        </p>
        <p>
          Me interesa el lado de negocio del desarrollo web: no solo que el sitio funcione, sino que
          ayude a vender, a medir y a crecer. Por eso trabajo con Google Tag Manager, GA4 y Meta Pixel
          no como añadidos opcionales, sino como parte natural de cualquier proyecto de eCommerce o
          presencia digital seria.
        </p>
        <p>
          Trabajo con clientes de forma continua — no soy de los que entregan el proyecto y desaparecen.
          Prefiero el esquema de iguala porque me permite conocer el negocio en profundidad y responder
          rápido cuando algo necesita atención. El mantenimiento responsable (respaldos, actualizaciones,
          monitoreo) es algo que tomo en serio porque un sitio caído o un plugin roto tiene costo real.
        </p>
        <p>
          Soy honesto sobre mi experiencia: SEO/SEM es un área en la que tengo experiencia práctica
          creciente, no décadas de agencia. Lo que sí tengo es claridad técnica sobre cómo funciona
          el tracking, la estructura correcta de un sitio para buscadores y la integración entre
          desarrollo y campañas de pago.
        </p>
      </div>

      <!-- Stats sidebar (2/5) -->
      <div class="lg:col-span-2 flex flex-col gap-4">
        <div class="bg-white rounded-2xl border border-slate-200 p-6 flex flex-col gap-6">
          <h3 class="text-sm font-semibold text-slate-400 uppercase tracking-widest">En resumen</h3>
          <ul class="flex flex-col gap-4">
            <li class="flex items-start gap-3">
              <div class="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center shrink-0">
                <svg class="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <div>
                <p class="text-sm font-semibold text-slate-800">Backend & Frontend</p>
                <p class="text-xs text-slate-500">Python, Django, Vue 3, Nuxt</p>
              </div>
            </li>
            <li class="flex items-start gap-3">
              <div class="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center shrink-0">
                <svg class="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <div>
                <p class="text-sm font-semibold text-slate-800">eCommerce</p>
                <p class="text-xs text-slate-500">WordPress, WooCommerce</p>
              </div>
            </li>
            <li class="flex items-start gap-3">
              <div class="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center shrink-0">
                <svg class="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <div>
                <p class="text-sm font-semibold text-slate-800">SEO / Analítica</p>
                <p class="text-xs text-slate-500">GTM, GA4, Meta Pixel</p>
              </div>
            </li>
            <li class="flex items-start gap-3">
              <div class="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center shrink-0">
                <svg class="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <p class="text-sm font-semibold text-slate-800">Disponibilidad continua</p>
                <p class="text-xs text-slate-500">Iguala mensual o por proyecto</p>
              </div>
            </li>
          </ul>
        </div>
        <div class="bg-blue-600 rounded-2xl p-6 text-white">
          <p class="text-sm font-semibold mb-1 opacity-80">Ubicación</p>
          <p class="font-bold">Aguascalientes, México</p>
          <p class="text-sm opacity-80 mt-1">Trabajo 100% remoto disponible</p>
        </div>
      </div>
    </div>
  </SectionWrapper>
</template>
