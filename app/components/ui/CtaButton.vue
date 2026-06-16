<script setup lang="ts">
defineProps<{
  href: string
  variant?: 'primary' | 'secondary' | 'outline'
  download?: string
  external?: boolean
  size?: 'sm' | 'md' | 'lg'
}>()
</script>

<template>
  <a
    :href="href"
    :download="download"
    :target="external ? '_blank' : undefined"
    :rel="external ? 'noopener noreferrer' : undefined"
    :class="[
      'inline-flex items-center justify-center gap-2 font-semibold rounded-lg transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2',
      size === 'lg' ? 'px-6 py-3.5 text-base' : size === 'sm' ? 'px-3 py-2 text-sm' : 'px-5 py-3 text-sm',
      variant === 'secondary'
        ? 'bg-slate-100 text-slate-700 hover:bg-slate-200'
        : variant === 'outline'
          ? 'border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white'
          : 'bg-blue-600 text-white hover:bg-blue-700 shadow-sm hover:shadow-md',
    ]"
  >
    <slot />
  </a>
</template>
