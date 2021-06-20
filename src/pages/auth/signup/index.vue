<template>
  <div class="signup-page">
    Signup page
  </div>
</template>
<script>
import { defineComponent } from '@vue/composition-api'
export default defineComponent({
  name: 'SignupPage',
  metaInfo() {
    return {
      titleTemplate: this.$t(this.$route.meta.title) + ' | %s',
    }
  },
})
</script>
