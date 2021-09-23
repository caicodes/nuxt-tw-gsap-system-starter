<template>
  <div
    class="flex items-center justify-center"
    :class="`bg-${theme.colorScheme}-500`"
  >
    <section class="p-4">
      <h3
        class="p-2 text-xl"
        :class="`bg-${theme.colorScheme}-300 text-${theme.colorScheme}-600`"
      >
        color schemes: current is {{ theme.colorScheme }}
      </h3>

      <label
        v-for="color in colorOptions"
        :key="color"
        class="inline-flex items-center mt-3"
      >
        <input
          type="radio"
          class="hidden"
          :class="`text-${color}-600`"
          @click="updateColorScheme(color)"
          :value="color"
        /><span class="p-4 ml-2" :class="`text-${color}-300 bg-${color}-600`">{{
          color
        }}</span>
      </label>

      <br />
      <span>value: {{ colorScheme }}</span>
    </section>

    <AllColors />
  </div>
</template>
<script>
import AllColors from '~/components/AllColors.vue'
export default {
  components: { AllColors },
  props: {
    theme: {},
  },
  // mounted() {
  //   this.colorScheme = this.$store.getters.getCurrentColorScheme

  //   this.viewMode = this.$store.getters.getCurrentViewMode

  //   this.colorMode = this.$store.getters.getCurrentColorMode

  //   this.themeSkin = this.$store.getters.getCurrentThemeSkin
  // },

  methods: {
    updateColorScheme(newColorScheme) {
      this.$store.commit('setColorScheme', newColorScheme)
      this.theme.colorScheme = newColorScheme
      localStorage.setItem('colorScheme', newColorScheme)
      console.log(
        'method update run ' +
          newColorScheme +
          ' is now this color scheme: ' +
          this.colorScheme
      )
    },
  },

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
    colorOptions() {
      return this.$store.state.colorOptions
    },
  },
}
</script>
