<template>
  <div class="dashboard-page">
    <h1>This is the project wrapper page</h1>
    <router-view></router-view>
  </div>
</template>
<script>
import { store } from '@/store'
import { defineComponent, onUnmounted } from '@vue/composition-api'
import { projectDetail } from '@/store-lazy/project-detail'
export default defineComponent({
  name: 'ProjectWrapperPage',
  setup() {
    // Dynamic vuex module
    if (!store.hasModule('projectDetail')) {
      store.registerModule('projectDetail', projectDetail, {
        preserveState: false,
      })
    }
    // Only exist when viewing this page and it's sub-pages
    onUnmounted(() => {
      store.unregisterModule('projectDetail')
    })
  },
})
</script>
