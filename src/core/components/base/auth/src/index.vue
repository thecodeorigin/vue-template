<script>
import { store } from '@/store'
import { defineComponent } from '@vue/composition-api'
import _intersectionWith from 'lodash/intersectionWith'
import _isEqual from 'lodash/isEqual'

export default defineComponent({
  name: 'Auth',
  functional: true,
  props: {
    allow: {
      type: Array,
      default() {
        return []
      },
    },
  },
  render(h, { props, slots }) {
    // Example:
    // store.state.auth.data.user.permissions: [1, 2, 3, 4]
    // this.allow: [1, 3, 5, 7]
    // _intersectionWith: [1, 3] => is allowed (has allowed permissions)

    const commonPermissions = _intersectionWith(
      props.allow,
      store.getters['auth/permissions'],
      _isEqual
    )

    return commonPermissions?.length > 0 ? slots()?.default : null
  },
})
</script>
