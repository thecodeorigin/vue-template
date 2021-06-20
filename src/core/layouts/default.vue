<template>
  <div class="default__layout">
    <MyNavbar />
    <slot />
  </div>
</template>

<script>
import { MyNavbar } from '@/core/components/layout'
export default {
  name: 'DefaultLayout',
  components: {
    MyNavbar,
  },
}
</script>
