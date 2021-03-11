<template>
  <div class="default__layout">
    <Navbar />
    <slot />
  </div>
</template>

<script>
import { Navbar } from '@common/layout'
export default {
  name: 'DefaultLayout',
  components: {
    Navbar,
  },
}
</script>
