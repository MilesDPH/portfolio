export function useActiveSection(sectionIds: string[]) {
  const activeSection = ref<string>(sectionIds[0] ?? '')

  onMounted(() => {
    const observers: IntersectionObserver[] = []

    sectionIds.forEach((id) => {
      const el = document.getElementById(id)
      if (!el) return

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            activeSection.value = id
          }
        },
        { rootMargin: '-40% 0px -55% 0px', threshold: 0 },
      )

      observer.observe(el)
      observers.push(observer)
    })

    onUnmounted(() => observers.forEach((o) => o.disconnect()))
  })

  return { activeSection }
}
