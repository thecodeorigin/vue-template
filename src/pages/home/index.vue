<template>
  <div class="home">
    <h1>This is an home page</h1>
    <div></div>
  </div>
</template>
<script>
import { defineComponent } from '@vue/composition-api'
export default defineComponent({
  name: '',
  props: {},
  // eslint-disable-next-line no-unused-vars
  setup(props) {
    //
  },
  data() {
    return {
      //
    }
  },
  created() {
    this.$store.dispatch('blog/fetchData')
  },
})
</script>
