<template>
  <div class="default__layout">
    <Navbar />
    <div>
      <router-link class="text-primary hover:underline" to="/">
        Home
      </router-link>
      <router-link class="text-primary hover:underline" to="/about">
        About
      </router-link>
    </div>
    <slot />
  </div>
</template>

<script>
import { Navbar } from '@/core/components/layout'
export default {
  name: 'DefaultLayout',
  components: {
    Navbar,
  },
}
</script>
