import { state } from './state'
import { getters } from './getters'
import { mutations } from './mutations'
import { actions } from './actions'
export default {
  state,
  getters,
  mutations,
  actions,
}

/**
 * Auth mutation module's enum
 */
export const authMutations = {
  SET: {
    AUTH: 'auth/SET_AUTH',
  },
  CLEAR: {},
  TOGGLE: {},
  ADD: {},
  REMOVE: {},
  INC: {},
  SUB: {},
}

/**
 * Auth action module's enum
 */
export const authActions = {
  LOGIN: 'auth/login',
  LOGOUT: 'auth/logout',
}
