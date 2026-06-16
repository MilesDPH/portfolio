<script setup lang="ts">
useHead({ titleTemplate: '%s' })

useSeoMeta({
  title: 'Hugo Pedroza — Desarrollador Full-Stack | Web, eCommerce y SEO',
  description:
    'Desarrollador full-stack en Aguascalientes, México. WordPress/WooCommerce, Django, Vue/Nuxt, SEO/SEM y mantenimiento continuo bajo esquema de iguala.',
  ogTitle: 'Hugo Pedroza — Desarrollador Full-Stack',
  ogDescription:
    'Desarrollo web, eCommerce y posicionamiento SEO/SEM. Mantenimiento continuo y analítica real para negocios en México.',
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
