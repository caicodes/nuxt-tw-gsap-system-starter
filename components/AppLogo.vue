<template>
  <div class="flex items-center justify-center w-64 space-x-2">
    <SiteIcon class="w-auto h-5" />
    <SiteLogo class="h-6 w-52" />
  </div>
</template>
<script>
import SiteIcon from '~/assets/svg/site-icon.svg?inline'
import SiteLogo from '~/assets/svg/site-logo.svg?inline'

export default {
  components: { SiteIcon, SiteLogo },
}
</script>
