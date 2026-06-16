<script setup lang="ts">
import type { Project } from '~/types'

defineProps<{ project: Project }>()
</script>

<template>
  <article class="bg-white rounded-2xl border border-slate-200 overflow-hidden hover:shadow-lg transition-shadow duration-300">
    <!-- Header -->
    <div class="p-6 sm:p-8 pb-0">
      <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-blue-100 text-blue-700 mb-4">
        {{ project.category }}
      </span>
      <h3 class="text-xl font-bold text-slate-900 mb-6">{{ project.title }}</h3>
    </div>

    <!-- Problem / Solution -->
    <div class="px-6 sm:px-8 flex flex-col gap-4">
      <div>
        <p class="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-1.5">El desafío</p>
        <p class="text-slate-600 text-sm leading-relaxed">{{ project.problem }}</p>
      </div>
      <div>
        <p class="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-1.5">La solución</p>
        <p class="text-slate-600 text-sm leading-relaxed">{{ project.solution }}</p>
      </div>
      <div v-if="project.result" class="flex items-start gap-3 bg-green-50 border border-green-100 rounded-xl p-4">
        <svg class="w-5 h-5 text-green-600 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
        </svg>
        <p class="text-sm font-medium text-green-800">{{ project.result }}</p>
      </div>
    </div>

    <!-- Technologies -->
    <div class="p-6 sm:p-8 pt-5">
      <div class="flex flex-wrap gap-2">
        <TechBadge v-for="tech in project.technologies" :key="tech" :label="tech" />
      </div>
    </div>
  </article>
</template>
