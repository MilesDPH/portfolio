<script setup lang="ts">
import { CONTACT } from '~/constants/nav'

const year = new Date().getFullYear()
</script>

<template>
  <footer class="bg-slate-900 text-slate-400 py-10">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
      <p class="text-sm">
        © {{ year }} Hugo David Pedroza Hernández · Aguascalientes, México
      </p>
      <div class="flex items-center gap-4">
        <a
          :href="CONTACT.github"
          target="_blank"
          rel="noopener noreferrer"
          class="text-slate-400 hover:text-white transition-colors text-sm"
          aria-label="GitHub"
        >
          GitHub
        </a>
        <a
          :href="CONTACT.linkedin"
          target="_blank"
          rel="noopener noreferrer"
          class="text-slate-400 hover:text-white transition-colors text-sm"
          aria-label="LinkedIn"
        >
          LinkedIn
        </a>
        <a
          :href="`mailto:${CONTACT.email}`"
          class="text-slate-400 hover:text-white transition-colors text-sm"
        >
          {{ CONTACT.email }}
        </a>
      </div>
    </div>
  </footer>
</template>
