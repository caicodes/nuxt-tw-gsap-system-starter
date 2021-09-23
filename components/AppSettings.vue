<template>
  <div class="w-full p-4 settings__store" :class="`bg-${colorScheme}-500`">
    <div
      class="container grid gap-1 p-8 text-sm  rounded-3xl top-40 left-40 text-coolGray-300"
      :class="`bg-${colorScheme}-700`"
    >
      <div class="flex justify-between px-2 py-1 bg-white bg-opacity-25">
        <span>themeSkin: </span>
        <span class="ml-2">{{ themeSkin }}</span>
      </div>

      <div class="flex justify-between px-2 py-1 bg-white bg-opacity-25">
        <span>viewMode: </span>
        <span class="ml-2">{{ viewMode }}</span>
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
        <span>$colorMode.preference: </span>
        <span class="ml-2">{{ $colorMode.preference }}</span>
      </div>
      <div class="flex justify-between px-2 py-1 bg-white bg-opacity-25">
        <span>$colorMode.value: </span>
        <span class="ml-2">{{ $colorMode.value }}</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  computed: {
    themeSkin() {
      return this.$store.getters.getCurrentThemeSkin
    },
    colorScheme() {
      return this.$store.getters.getCurrentColorScheme
    },
    colorMode() {
      return this.$store.getters.getCurrentColorMode
    },
    viewMode() {
      return this.$store.getters.getCurrentViewMode
    },
  },
}
</script>
