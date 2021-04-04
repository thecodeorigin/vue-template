<template>
  <div class="home">
    <h1>This is an home page</h1>
  </div>
</template>
<script>
import { mapActions } from 'vuex'
import { blogActions } from '@/store/blog/enums'
import { defineComponent } from '@vue/composition-api'
export default defineComponent({
  name: 'HomePage',
  methods: {
    ...mapActions({
      fetchBlogs: blogActions.FETCH.DATA,
    }),
  },
  created() {
    this.fetchBlogs()
  },
})
</script>
