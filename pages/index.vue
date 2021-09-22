<template>
  <div class="grid h-screen gap-20 place-content-center">
    <div class="flex flex-col items-center justify-center space-y-8 welcome">
      <div class="flex px-2 py-1 bg-white rounded-full gsap__hello">
        hello gsap
      </div>
      <div class="flex color__mode">
        {{ $colorMode.value }}/{{ $colorMode.preference }}
      </div>
      <div
        class="flex items-center justify-center space-x-2  nuxt__svg animate-tilt"
      >
        <SiteIcon class="w-auto h-5" />
        <SiteLogo class="h-6 w-52" />
      </div>
      <AppSettings />
    </div>
    <!-- absolute postioned stuff  -->
  </div>
</template>

<script>
import SiteIcon from '~/assets/svg/site-icon.svg?inline'
import SiteLogo from '~/assets/svg/site-logo.svg?inline'
import AppSettings from '~/components/AppSettings.vue'

export default {
  components: { SiteIcon, SiteLogo, AppSettings },

  mounted() {
    const gsap = this.$gsap
    const tl = gsap.timeline({ repeat: -1 })
    tl.to('.gsap__hello', {
      x: -90,
      duration: 1,
      ease: 'power2.inOut',
    })
      .to('.gsap__hello', {
        x: 90,
        duration: 1,
        ease: 'power2.inOut',
      })
      .to('.gsap__hello', {
        x: 0,
        duration: 1,
        ease: 'power2.inOut',
      })
  },
}
</script>
