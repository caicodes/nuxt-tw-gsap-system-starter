<template>
  <div class="flex flex-col items-center space-y-4 color__mode">
    <div class="flex px-4 py-3 bg-white rounded-full">
      {{ $colorMode.value }}/{{ $colorMode.preference }}
    </div>
    <div
      class="flex text-white rounded-full shadow-inner  bg-coolGray-300 colorMode__switch"
    >
      <div
        @click="$colorMode.preference = 'light'"
        class="grid w-12 h-12 rounded-full place-content-center bg-coolGray-300"
      >
        <Sun />
      </div>
      <div
        @click="$colorMode.preference = 'dark'"
        class="grid w-12 h-12 rounded-full place-content-center bg-coolGray-400"
      >
        <Moon />
      </div>
    </div>

    <div
      class="flex text-white rounded-full shadow-inner  bg-coolGray-400 colorMode__switch"
    >
      <div
        @click="$colorMode.preference = 'light'"
        class="grid w-12 h-12 rounded-full place-content-center bg-coolGray-300"
      >
        <Sun />
      </div>
      <div
        @click="$colorMode.preference = 'dark'"
        class="grid w-12 h-12 rounded-full place-content-center bg-coolGray-400"
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
}
</script>
