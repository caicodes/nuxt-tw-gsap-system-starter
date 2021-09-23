<template>
  <div class="flex px-4 py-3 bg-white rounded-full gsap__hello">
    yo gsap emoji themed component /// colorScheme {{ theme.colorScheme }} /
    themeSkin {{ theme.themeSkin }} / colorMode {{ theme.colorMode }} / viewMode
    {{ theme.viewMode }}
    THEME
    {{ theme }}
  </div>
</template>

<script>
export default {
  props: {
    theme: {},
  },
  mounted() {
    const gsap = this.$gsap
    const tl = gsap.timeline({ repeat: -1 })
    tl.to('.gsap__hello', {
      x: -90,
      duration: 2,
      ease: 'power2.inOut',
    })
      .to('.gsap__hello', {
        x: 90,
        duration: 2,
        ease: 'power2.inOut',
      })
      .to('.gsap__hello', {
        x: 0,
        duration: 2,
        ease: 'power2.inOut',
      })
  },
}
</script>
