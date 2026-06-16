<script setup lang="ts">
import { TECH_GROUPS } from '~/constants/tech'
</script>

<template>
  <SectionWrapper
    id="stack"
    title="Tecnologías que uso"
    subtitle="Herramientas con las que trabajo en proyectos reales, no solo conocidas de nombre."
  >
    <div class="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
      <div
        v-for="group in TECH_GROUPS"
        :key="group.category"
        class="bg-slate-50 rounded-2xl p-5 border border-slate-100"
      >
        <p class="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-4">
          {{ group.category }}
        </p>
        <div class="flex flex-wrap gap-2">
          <TechBadge v-for="item in group.items" :key="item" :label="item" />
        </div>
      </div>
    </div>
  </SectionWrapper>
</template>
