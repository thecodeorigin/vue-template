import Vue from 'vue'
import router from './router'
import { store } from '@store'
import VueCompositionAPI from '@vue/composition-api'

Vue.use(VueCompositionAPI)

Vue.config.productionTip = false
// Plugins
import { i18nPlugin } from '@plugins/i18n'
import { eventBus } from '@plugins/bus'
// Axios instances
import clientApi from '@/core/apis/client'
import authApi from '@/core/apis/auth'
// Mixins
import { globalMixin } from '@mixins/global'
//
import { utils } from '@utils'
// Vuex constants
import App from '@/App.vue'
import '@/core/styles/css/main.css'
import '@/core/styles/scss/main.scss'

Vue.mixin(globalMixin)

Vue.use(clientApi)
Vue.use(authApi)
Vue.use(eventBus)
Vue.use(utils)

new Vue({
  store,
  router,
  i18n: i18nPlugin,
  render: (h) => h(App),
}).$mount('#app')
