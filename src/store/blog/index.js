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
 * Blog mutation module's enum
 */
export const blogMutations = {
  SET: {
    DATA: 'blog/SET_DATA',
    TOTAL: 'blog/SET_TOTAL',
    QUERY: 'blog/SET_QUERY',
  },
  CLEAR: {
    QUERY: 'blog/CLEAR_QUERY',
  },
  TOGGLE: {},
  ADD: {
    DATA: 'blog/ADD_DATA',
  },
  REMOVE: {},
  INC: {
    QUERY_PAGE: 'blog/INC_QUERY_OFFSET',
  },
  SUB: {
    QUERY_PAGE: 'blog/SUB_QUERY_OFFSET',
  },
}

export const blogActions = {
  FETCH: {
    DATA: 'blog/fetchData',
    MORE: 'blog/fetchMoreData',
    SINGLE: 'blog/fetchSingle',
  },
  SUBMIT: {
    // MULTIPLE: 'blog/submitMultiple',
    SINGLE: 'blog/submitSingle',
  },
  UPDATE: {
    // MULTIPLE: 'blog/updateMultiple',
    SINGLE: 'blog/updateSingle',
  },
  TOGGLE: {},
  ACTIVATE: {},
  DEACTIVATE: {},
  DELETE: {
    // MULTIPLE: 'blog/deleteMultiple',
    SINGLE: 'blog/deleteSingle',
  },
}
