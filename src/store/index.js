/* eslint-disable prettier/prettier */
import Vue from 'vue'
import Vuex from 'vuex'
import { camelCase } from 'lodash'
import { authMutations } from './auth/index'

Vue.use(Vuex)

const modules = {}

// See docs: https://webpack.js.org/guides/dependency-management/#context-module-api
const requireModule = require.context('./', true, /^(?=.*index).*\.js$/ /* Every index.js file */)
requireModule.keys().forEach((fileName) => {
  // Ignore this root index.js file, this is not a module
  if (fileName === './index.js') return
  // If your module path is something/else, moduleName will be somethingElse
  const moduleName = camelCase(fileName.replace(/(\.\/|index.js)/g, ''))
  modules[moduleName] = {
    namespaced: true,
    ...requireModule(fileName).default,
  }
})

/**
 * Root action module's enum
 */
 export const rootActions = {
  VUE_SERVER_INIT: 'vueServerInit',
  RESET_STATE: 'resetState',
}

/**
 * Root mutation module's enum
 */
 export const rootMutations = {
  SET: {
    SERVER_STATE: 'SET_SERVER_STATE',
  },
  CLEAR: {},
  TOGGLE: {
    SIDEBAR_COLLAPSE: 'TOGGLE_SIDEBAR_COLLAPSE',
  },
  ADD: {},
  REMOVE: {},
  INC: {},
  SUB: {},
}

export default new Vuex.Store({
  state: {
    options: {
      sidebarCollapsed: false,
    }
  },
  mutations: {
    TOGGLE_SIDEBAR_COLLAPSE(state) {
      Vue.set(state.options, 'sidebarCollapsed', !state.options.sidebarCollapsed)
    },
    SET_SERVER_STATE(state, serverReady) {
      Vue.set(state, 'serverReady', serverReady)
    },
  },
  actions: {
    vueServerInit({ commit }) {
      let auth = null
      const authString = localStorage.getItem('auth')
      if (authString) {
        auth = JSON.parse(authString)
        commit(authMutations.SET.AUTH, auth)
      }
      commit(rootMutations.SET.SERVER_STATE, true) // Server is ready
    }
  },
  modules,
})
