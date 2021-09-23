<template>
  <div class="grid h-screen gap-20 place-content-center">
    <div class="flex flex-col items-center justify-center space-y-4 welcome">
      <AppHelloGsap />
      <AppColorMode />
      <AppSettings />
      <AppLogo />

      <div class="flex items-center justify-center w-64 space-x-2">
        <SiteIcon class="w-auto h-5" />
        <SiteLogo class="h-6 w-52" />
      </div>
    </div>
    <!-- absolute postioned stuff  -->
  </div>
</template>

<script>
import SiteIcon from '~/assets/svg/site-icon.svg?inline'
import SiteLogo from '~/assets/svg/site-logo.svg?inline'
import AppSettings from '~/components/AppSettings.vue'
import AppColorMode from '~/components/AppColorMode.vue'
import AppHelloGsap from '~/components/AppHelloGsap.vue'
import AppLogo from '~/components/AppLogo.vue'

export default {
  components: {
    SiteIcon,
    SiteLogo,
    AppSettings,
    AppColorMode,
    AppHelloGsap,
    AppLogo,
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
