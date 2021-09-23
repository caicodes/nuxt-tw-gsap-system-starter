<template>
  <div
    class="flex flex-col items-center p-8 space-y-4 rounded-lg color__mode"
    :class="`text-${theme.colorScheme}-200 bg-${theme.colorScheme}-500`"
  >
    <p>
      colorMode.preference: {{ $colorMode.preference }} {{ themeSkin }}
      {{ colorMode }}
    </p>
    <p>
      colorScheme: {{ this.$store.getters.getCurrentColorScheme }} using store
      getter... {{ theme.colorScheme }} (colorScheme)
    </p>
    <div
      class="flex px-4 py-3 rounded-md"
      :class="`bg-${theme.colorScheme}-600 focus:ring-${theme.colorScheme}-800 `"
    >
      <div>
        <h1>Color mode: {{ $colorMode.value }}</h1>
        <select
          v-model="$colorMode.preference"
          class="rounded-lg"
          :class="`bg-${theme.colorScheme}-600`"
        >
          <option value="system">System</option>
          <option value="light">Light</option>
          <option value="dark">Dark</option>
          <!-- <option value="sepia">Sepia</option> -->
        </select>
      </div>

      <div>
        <h1>Theme/Skin: {{ theme.themeSkin }}</h1>
        <select
          v-model="theme.themeSkin"
          class="rounded-lg"
          :class="`bg-${theme.colorScheme}-600`"
          @change="updateSkin"
        >
          <option v-for="skin in themeSkins" :key="skin" :value="skin">
            {{ skin }}
          </option>

          <!-- <option value="sepia">Sepia</option> -->
        </select>
      </div>
      {{ colorOptions }}
      <div>
        <h1>Theme/Color: {{ theme.colorScheme }}</h1>
        <select
          v-model="theme.colorScheme"
          class="rounded-lg"
          :class="`bg-${theme.colorScheme}-600`"
          @change="updateColorScheme"
        >
          <option v-for="color in colorOptions" :key="color" :value="color">
            {{ color }}
          </option>

          <!-- <option value="sepia">Sepia</option> -->
        </select>
      </div>

      <div>
        <h1>View mode: {{ theme.viewMode }}</h1>
        <select
          v-model="theme.viewMode"
          class="rounded-lg"
          :class="`bg-${theme.colorScheme}-600`"
          @change="updateViewMode"
        >
          <option v-for="mode in viewModes" :key="mode" :value="mode">
            {{ mode }}
          </option>
          <!-- <option value="sepia">Sepia</option> -->
        </select>
      </div>
    </div>

    <!-- Toggle A -->
    <div class="flex items-center justify-center w-full mb-12">
      <label for="toogleA" class="flex items-center cursor-pointer">
        <!-- toggle -->
        <div class="relative">
          <!-- input -->
          <input
            id="toogleA"
            type="checkbox"
            class="sr-only"
            @change="toggleColorMode"
          />
          <!-- line -->
          <div
            class="w-10 h-4 rounded-full shadow-inner"
            :class="`bg-${theme.colorScheme}-600`"
          ></div>
          <!-- dot -->
          <div
            class="absolute w-6 h-6 transition bg-white rounded-full shadow  dot -left-1 -top-1"
          ></div>
        </div>
        <!-- label -->
        <div class="ml-3 font-medium">{{ $colorMode.preference }} mode</div>
      </label>
    </div>

    <!-- Toggle B -->
    <div class="flex items-center justify-center w-full mb-12">
      <label for="toggleB" class="flex items-center cursor-pointer">
        <!-- toggle -->
        <div class="relative">
          <!-- input -->
          <input
            type="checkbox"
            id="toggleB"
            class="sr-only"
            @change="toggleColorMode"
          />
          <!-- line -->
          <div
            class="block h-8 rounded-full w-14"
            :class="`bg-${theme.colorScheme}-600`"
          ></div>
          <!-- dot -->
          <div
            class="absolute w-6 h-6 transition bg-white rounded-full  dot left-1 top-1"
          ></div>
        </div>
        <!-- label -->
        <div class="ml-3 font-medium">{{ $colorMode.preference }} mode</div>
      </label>
    </div>

    <div
      class="flex rounded-full shadow-inner colorMode__switch"
      :class="`bg-${theme.colorScheme}-300`"
    >
      <div
        @click="toggleColorMode"
        class="grid w-12 h-12 rounded-full place-content-center"
        :class="`bg-${theme.colorScheme}-600`"
      >
        <Sun />
      </div>
      <div
        @click="toggleColorMode"
        class="grid w-12 h-12 text-white rounded-full place-content-center"
        :class="`bg-${theme.colorScheme}-300 `"
      >
        <Moon />
      </div>
    </div>

    <div
      class="flex rounded-full shadow-inner colorMode__switch"
      :class="`bg-${theme.colorScheme}-600`"
    >
      <div
        @click="toggleColorMode"
        class="grid w-12 h-12 rounded-full place-content-center"
        :class="`bg-${theme.colorScheme}-300`"
      >
        <Sun />
      </div>
      <div
        @click="toggleColorMode"
        class="grid w-12 h-12 rounded-full place-content-center"
        :class="`bg-${theme.colorScheme}-600`"
      >
        <Moon />
      </div>
    </div>
  </div>
</template>
<script>
import Sun from '~/assets/icons/app/sun.svg?inline'
import Moon from '~/assets/icons/app/moon.svg?inline'

export default {
  components: { Sun, Moon },
  props: {
    theme: {},
  },
  // data() {
  //   return {
  //     colorScheme: '',
  //     viewMode: '',
  //     themeSkin: '',
  //     colorMode: '',
  //   }
  // },

  // mounted() {
  //   this.colorScheme = this.$store.getters.getCurrentColorScheme
  //   this.themeSkin = this.$store.getters.getCurrentThemeSkin
  //   this.viewMode = this.$store.getters.getCurrentViewMode
  //   this.colorMode = this.$store.getters.getCurrentColorMode
  // },
  computed: {
    themeSkin() {
      return this.$store.getters.getCurrentThemeSkin
    },
    // colorScheme() {
    //   return this.$store.getters.getCurrentColorScheme
    // },
    colorMode() {
      return this.$store.getters.getCurrentColorMode
    },
    viewMode() {
      return this.$store.getters.getCurrentViewMode
    },
    colorOptions() {
      return this.$store.state.colorOptions
    },
    viewModes() {
      return this.$store.state.viewModes
    },
    themeSkins() {
      return this.$store.state.themeSkins
    },
  },
  methods: {
    updateViewMode(el) {
      console.log(el.target.value)
      this.$store.commit('setViewMode', el.target.value)
    },

    updateSkin(el) {
      console.log(el.target.value)
      this.$store.commit('setThemeSkin', el.target.value)
    },
    updateColorScheme(el) {
      console.log(el.target.value)
      this.$store.commit('setColorScheme', el.target.value)
      this.colorScheme = el.target.value
      localStorage.setItem('colorScheme', el.target.value)
    },

    toggleColorMode() {
      this.$colorMode.preference =
        this.$colorMode.preference === 'dark' ? 'light' : 'dark'
      this.$store.commit('setColorMode', this.$colorMode.preference)
      console.log(
        'color mode update from ' +
          this.colorMode +
          ' to ' +
          this.$colorMode.preference
      )
    },
  },
  // watch: {
  //   colorScheme(newColorScheme) {
  //     this.$store.commit('setColorScheme', newColorScheme)
  //     this.colorScheme = newColorScheme
  //     localStorage.setItem('colorScheme', newColorScheme)
  //     console.log(
  //       'watch ' +
  //         newColorScheme +
  //         ' is now this color scheme: ' +
  //         this.colorScheme
  //     )
  //   },
  // },
}
</script>
<style scoped>
/* Toggle A */
input:checked ~ .dot {
  transform: translateX(100%);
}

/* Toggle B */
input:checked ~ .dot {
  transform: translateX(100%);
  background: 'var(--colorScheme)';
}
</style>
