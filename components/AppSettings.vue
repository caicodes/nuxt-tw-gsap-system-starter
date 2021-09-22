<template>
  <div class="settings__store">
    <div
      class="grid gap-1 p-8 text-sm rounded-lg  bg-coolGray-700 top-40 left-40 text-coolGray-300"
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
</template>
<script>
export default {
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
