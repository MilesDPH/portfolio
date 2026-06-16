<script setup lang="ts">
useHead({ titleTemplate: '%s' })

useSeoMeta({
  title: 'Hugo Pedroza — Desarrollador Full-Stack | eCommerce, CRMs y sistemas a medida',
  description:
    'Desarrollador full-stack en Aguascalientes, México. eCommerce con WooCommerce, CRMs, ERPs, MercadoLibre y mantenimiento continuo.',
  ogTitle: 'Hugo Pedroza — Desarrollador Full-Stack',
  ogDescription:
    'eCommerce, CRMs, ERPs y sistemas a medida para empresas en México. Mantenimiento continuo y soporte directo.',
  ogType: 'website',
  ogUrl: 'http://milesdph.top',
  twitterCard: 'summary_large_image',
})
</script>

<template>
  <div>
    <HeroSection />
    <AboutSection />
    <ServicesSection />
    <ProjectsSection />
    <StackSection />
    <ProcessSection />
    <ContactSection />
  </div>
</template>
