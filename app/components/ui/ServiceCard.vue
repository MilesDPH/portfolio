<script setup lang="ts">
import type { Service } from '~/types'

defineProps<{ service: Service }>()
</script>

<template>
  <article class="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 hover:border-blue-200 hover:shadow-lg transition-all duration-300 flex flex-col gap-5">
    <!-- Icon -->
    <div class="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600 shrink-0">
      <!-- store -->
      <svg v-if="service.icon === 'store'" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.75" d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-1.68 4.32A1 1 0 006.27 19h11.46a1 1 0 00.95-.68L20 13M7 13L5.4 5" />
      </svg>
      <!-- search/seo -->
      <svg v-else-if="service.icon === 'search'" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.75" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
      <!-- shield/maintenance -->
      <svg v-else-if="service.icon === 'shield'" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.75" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
      <!-- plug/integrations -->
      <svg v-else-if="service.icon === 'plug'" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.75" d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
      </svg>
    </div>

    <!-- Content -->
    <div class="flex flex-col gap-3">
      <h3 class="text-lg font-bold text-slate-900">{{ service.title }}</h3>
      <p class="text-slate-500 text-sm leading-relaxed">{{ service.description }}</p>
    </div>

    <!-- Highlights -->
    <ul class="flex flex-col gap-2 mt-auto">
      <li
        v-for="highlight in service.highlights"
        :key="highlight"
        class="flex items-start gap-2 text-sm text-slate-600"
      >
        <svg class="w-4 h-4 text-blue-500 mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
          <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
        </svg>
        {{ highlight }}
      </li>
    </ul>
  </article>
</template>
