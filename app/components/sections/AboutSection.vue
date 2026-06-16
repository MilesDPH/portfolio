<template>
  <SectionWrapper id="sobre-mi" title="Sobre mí" :dark="true">
    <div class="grid lg:grid-cols-5 gap-12 lg:gap-16 items-start">
      <!-- Text content (3/5) -->
      <div class="lg:col-span-3 flex flex-col gap-5 text-slate-600 leading-relaxed">
        <p>
          Python, Django, WordPress, WooCommerce, Vue, Laravel. La lista importa menos que el historial:
          empresas de gráfica, autopartes, transporte, gastronomía y salud que hoy tienen tiendas
          y sistemas que funcionan.
        </p>
        <p>
          Los proyectos de eCommerce donde más aprendo son los complicados: catálogos de decenas de miles
          de productos, MercadoLibre corriendo en paralelo con la tienda propia, inventario sincronizado
          entre canales. Mis clientes tienen exactamente eso operando.
        </p>
        <p>
          Decenas de CRMs y ERPs construidos. Restaurante, empacadora de carne, fabricante de lowboys,
          empresa gráfica, distribuidora de autopartes, grupo comercial. Cada uno diferente porque
          cada negocio funciona distinto, y los sistemas genéricos casi nunca encajan bien.
        </p>
        <p>
          Cuando termino un proyecto, suelo seguir disponible. Conozco los sistemas, registro dónde está
          cada cosa, y cuando algo falla no hay que explicarme el contexto desde cero.
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
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <div>
                <p class="text-sm font-semibold text-slate-800">eCommerce</p>
                <p class="text-xs text-slate-500">WooCommerce, MercadoLibre, catálogos grandes</p>
              </div>
            </li>
            <li class="flex items-start gap-3">
              <div class="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center shrink-0">
                <svg class="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2" />
                </svg>
              </div>
              <div>
                <p class="text-sm font-semibold text-slate-800">CRMs y ERPs</p>
                <p class="text-xs text-slate-500">6 sistemas para industrias distintas</p>
              </div>
            </li>
            <li class="flex items-start gap-3">
              <div class="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center shrink-0">
                <svg class="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <div>
                <p class="text-sm font-semibold text-slate-800">Backend & Frontend</p>
                <p class="text-xs text-slate-500">Python, Django, Vue 3, Nuxt, WordPress</p>
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
                <p class="text-xs text-slate-500">Proyectos y soporte continuo</p>
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
