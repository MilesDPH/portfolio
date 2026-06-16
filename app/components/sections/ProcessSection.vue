<script setup lang="ts">
import { PROCESS_STEPS } from '~/constants/process'
</script>

<template>
  <SectionWrapper
    id="proceso"
    title="Cómo trabajo"
    subtitle="No es filosofía de empresa — son respuestas directas a lo que los clientes preguntan antes de contratar a alguien."
    :dark="true"
  >
    <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
      <div
        v-for="step in PROCESS_STEPS"
        :key="step.step"
        class="bg-white rounded-2xl p-6 border border-slate-200 flex flex-col gap-4"
      >
        <!-- Step number + icon -->
        <div class="flex items-center gap-3">
          <span class="w-8 h-8 rounded-full bg-blue-600 text-white text-sm font-bold flex items-center justify-center shrink-0">
            {{ step.step }}
          </span>
          <div class="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center text-blue-600">
            <!-- database/backup -->
            <svg v-if="step.icon === 'database'" class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
            </svg>
            <!-- desktop/staging -->
            <svg v-else-if="step.icon === 'desktop'" class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            <!-- chat/communication -->
            <svg v-else-if="step.icon === 'chat'" class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
            <!-- calendar/flexible -->
            <svg v-else-if="step.icon === 'calendar'" class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </div>
        </div>
        <h3 class="font-bold text-slate-900">{{ step.title }}</h3>
        <p class="text-sm text-slate-500 leading-relaxed">{{ step.description }}</p>
      </div>
    </div>
  </SectionWrapper>
</template>
