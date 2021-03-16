import Vue from 'vue'
import router from './router'
import store from './store'
import VueCompositionAPI from '@vue/composition-api'

Vue.use(VueCompositionAPI)

Vue.config.productionTip = false
// Plugins
import { i18nPlugin } from '@plugins/i18n'
import { eventBus } from '@plugins/bus'
// Services
import clientApi from '@services/client'
import authApi from '@services/auth'
// Mixins
import { globalMixin } from '@mixins/global'
//
import { utils } from '@utils'
// Vuex constants
import { rootActions } from './store/index'
import App from '@/App.vue'
import '@core/assets/css/main.css'
import '@core/assets/scss/main.scss'

Vue.mixin(globalMixin)

Vue.use(clientApi)
Vue.use(authApi)
Vue.use(eventBus)
Vue.use(utils)

new Vue({
  i18n: i18nPlugin,
  router,
  store,
  render: (h) => h(App),
  created() {
    this.$store.dispatch(rootActions.VUE_SERVER_INIT)
  },
}).$mount('#app')
