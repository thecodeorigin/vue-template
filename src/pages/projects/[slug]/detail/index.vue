<template>
  <div class="dashboard-page">
    <h1>This is the project detail page</h1>
    <router-view></router-view>
  </div>
</template>
<script>
import { defineComponent } from '@vue/composition-api'
export default defineComponent({
  name: 'ProjectDetailPage',
  metaInfo() {
    return {
      title: this.$route.params.slug,
      titleTemplate: this.$t(this.$route.meta.title) + ' | %s',
    }
  },
})
</script>
