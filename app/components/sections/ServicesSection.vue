<script setup lang="ts">
import { SERVICES } from '~/constants/services'
</script>

<template>
  <SectionWrapper
    id="servicios"
    title="¿En qué puedo ayudarte?"
    subtitle="Servicios orientados a lo que tu negocio necesita para crecer en digital, ordenados por lo que más se pide."
  >
    <div class="grid sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-6">
      <ServiceCard v-for="service in SERVICES" :key="service.id" :service="service" />
    </div>
  </SectionWrapper>
</template>
