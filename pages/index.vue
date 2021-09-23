<template>
  <div class="grid min-h-screen gap-20 place-content-center">
    <div class="flex flex-col items-center justify-center space-y-4 welcome">
      <AppLogo
        :class="`text-${colorScheme}-600 dark:text-${colorScheme}-400`"
      />
      {{ themeSkin }} {{ colorMode }} {{ colorScheme }}
      {{ viewMode }}
      <AppHelloGsap
        :theme="theme"
        :class="`text-${colorScheme}-600 dark:text-${colorScheme}-400`"
      />
      <AppColorMode :theme="theme" />
      <AppColorScheme :theme="theme" />
      <AppSettings />
    </div>
    <!-- absolute postioned stuff  -->
  </div>
</template>

<script>
import AppSettings from '~/components/AppSettings.vue'
import AppColorMode from '~/components/AppColorMode.vue'
import AppColorScheme from '~/components/AppColorScheme.vue'
import AppHelloGsap from '~/components/AppHelloGsap.vue'
import AppLogo from '~/components/AppLogo.vue'

export default {
  components: {
    AppSettings,
    AppColorMode,
    AppColorScheme,
    AppHelloGsap,
    AppLogo,
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
    theme() {
      const theme = {}
      theme.colorScheme = this.colorScheme
      theme.colorMode = this.colorMode
      theme.viewMode = this.viewMode
      theme.themeSkin = this.themeSkin
      return theme
    },
  },
}
</script>
