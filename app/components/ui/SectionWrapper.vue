<script setup lang="ts">
defineProps<{
  id: string
  title?: string
  subtitle?: string
  dark?: boolean
}>()
</script>

<template>
  <section
    :id="id"
    :class="dark ? 'bg-slate-50' : 'bg-white'"
    class="py-20 px-4 sm:px-6"
  >
    <div class="max-w-6xl mx-auto">
      <div v-if="title" class="text-center mb-14">
        <h2 class="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
          {{ title }}
        </h2>
        <p v-if="subtitle" class="text-lg text-slate-500 max-w-2xl mx-auto">
          {{ subtitle }}
        </p>
      </div>
      <slot />
    </div>
  </section>
</template>
