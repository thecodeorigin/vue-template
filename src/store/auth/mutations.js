import Vue from 'vue'
export const mutations = {
  SET_AUTH(state, auth) {
    Vue.set(state, 'data', auth)
  },
}
