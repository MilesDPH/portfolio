<script setup lang="ts">
import { NAV_LINKS, CV_PATH, CV_FILENAME } from '~/constants/nav'

const SECTION_IDS = NAV_LINKS.map((l) => l.href.replace('#', ''))
const { activeSection } = useActiveSection(SECTION_IDS)

const menuOpen = ref(false)

function closeMenu() {
  menuOpen.value = false
}

function scrollTo(href: string) {
  closeMenu()
  const id = href.replace('#', '')
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
}
</script>

<template>
  <header
    class="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-slate-200"
  >
    <nav class="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16">
      <!-- Logo -->
      <a
        href="#inicio"
        class="font-bold text-slate-900 text-lg tracking-tight hover:text-blue-600 transition-colors"
        @click.prevent="scrollTo('#inicio')"
      >
        Hugo Pedroza
      </a>

      <!-- Desktop links -->
      <ul class="hidden lg:flex items-center gap-1">
        <li v-for="link in NAV_LINKS" :key="link.href">
          <a
            :href="link.href"
            class="px-3 py-2 rounded-lg text-sm font-medium transition-colors"
            :class="
              activeSection === link.href.replace('#', '')
                ? 'text-blue-600 bg-blue-50'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
            "
            @click.prevent="scrollTo(link.href)"
          >
            {{ link.label }}
          </a>
        </li>
      </ul>

      <!-- Desktop CTA -->
      <a
        :href="CV_PATH"
        :download="CV_FILENAME"
        class="hidden lg:flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold px-4 py-2 rounded-lg transition-colors"
      >
        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
        </svg>
        Descargar CV
      </a>

      <!-- Mobile hamburger -->
      <button
        class="lg:hidden p-2 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-colors"
        :aria-expanded="menuOpen"
        aria-label="Abrir menú"
        @click="menuOpen = !menuOpen"
      >
        <svg v-if="!menuOpen" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
        <svg v-else class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </nav>

    <!-- Mobile menu -->
    <Transition
      enter-active-class="transition-all duration-200"
      enter-from-class="opacity-0 -translate-y-2"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition-all duration-150"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-2"
    >
      <div v-if="menuOpen" class="lg:hidden border-t border-slate-200 bg-white px-4 pb-4">
        <ul class="flex flex-col gap-1 pt-3">
          <li v-for="link in NAV_LINKS" :key="link.href">
            <a
              :href="link.href"
              class="block px-3 py-2 rounded-lg text-sm font-medium transition-colors"
              :class="
                activeSection === link.href.replace('#', '')
                  ? 'text-blue-600 bg-blue-50'
                  : 'text-slate-700 hover:text-slate-900 hover:bg-slate-50'
              "
              @click.prevent="scrollTo(link.href)"
            >
              {{ link.label }}
            </a>
          </li>
        </ul>
        <a
          :href="CV_PATH"
          :download="CV_FILENAME"
          class="mt-3 flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold px-4 py-2.5 rounded-lg transition-colors"
          @click="closeMenu"
        >
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
          </svg>
          Descargar CV
        </a>
      </div>
    </Transition>
  </header>
</template>
