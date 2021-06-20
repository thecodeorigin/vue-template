<template>
  <div class="signin-page"></div>
</template>
<script>
import { defineComponent } from '@vue/composition-api'
export default defineComponent({
  name: 'SigninPage',
  metaInfo() {
    return {
      titleTemplate: this.$t(this.$route.meta.title) + ' | %s',
    }
  },
})
</script>
