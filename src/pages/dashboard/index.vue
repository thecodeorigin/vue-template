<template>
  <div class="dashboard-page">
    Heheh
    <auth :allow="['SEE_STUFF']">
      <h1>This is an dashboard page</h1>
    </auth>
  </div>
</template>
<script>
import { defineComponent } from '@vue/composition-api'
export default defineComponent({
  name: 'DashboardPage',
  metaInfo() {
    return {
      titleTemplate: this.$t(this.$route.meta.title) + ' | %s',
    }
  },
})
</script>
