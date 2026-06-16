<script setup lang="ts">
import { PROJECTS } from '~/constants/projects'
</script>

<template>
  <SectionWrapper
    id="proyectos"
    title="Proyectos recientes"
    subtitle="Casos de trabajo real: problema, solución y tecnologías involucradas. Sin métricas inventadas."
    :dark="true"
  >
    <div class="grid sm:grid-cols-2 gap-6">
      <ProjectCard v-for="project in PROJECTS" :key="project.id" :project="project" />
    </div>
  </SectionWrapper>
</template>
