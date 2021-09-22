<template>
  <div class="grid h-screen gap-8 place-content-center">
    <div class="gsap__hello">hello gsap</div>
    <div class="color__mode">
      {{ $colorMode.value }}/{{ $colorMode.preference }}
    </div>
    <div class="settings__store">
      <div
        class="absolute grid gap-1 p-8 text-sm  top-40 left-40 bg-coolGray-700 text-coolGray-300"
      >
        <div class="flex justify-between px-2 py-1 bg-white bg-opacity-25">
          <span>themeSkin: </span>
          <span class="ml-2">{{ themeSkin }}</span>
        </div>
        <div class="flex justify-between px-2 py-1 bg-white bg-opacity-25">
          <span>colorScheme: </span>
          <span class="ml-2">{{ colorScheme }}</span>
        </div>
        <div class="flex justify-between px-2 py-1 bg-white bg-opacity-25">
          <span>colorMode: </span>
          <span class="ml-2">{{ colorMode }}</span>
        </div>
        <div class="flex justify-between px-2 py-1 bg-white bg-opacity-25">
          <span>viewMode: </span>
          <span class="ml-2">{{ viewMode }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    const gsap = this.$gsap
    const tl = gsap.timeline({ repeat: -1, repeatDelay: 1 })
    tl.to('.gsap__hello', {
      y: -40,
      duration: 1,
      ease: 'power4.inOut',
      rotate: 360,
    }).to('.gsap__hello', {
      y: 0,
      duration: 1,
      ease: 'power4.inOut',
      rotate: -360,
    })
  },
  computed: {
    themeSkin() {
      return this.$store.state.themeSkin
    },
    colorScheme() {
      return this.$store.state.colorScheme
    },
    colorMode() {
      return this.$store.state.colorMode
    },
    viewMode() {
      return this.$store.state.viewMode
    },
  },
}
</script>
