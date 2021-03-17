import qs from 'qs'
import { authApi } from '@/core/services/auth'
import { blogMutations } from './index'
import { clientApi } from '@/core/services/client'

export const actions = {
  async fetchData({ state, commit }) {
    const response = await authApi.get(
      'blogs?' + qs.stringify(state.query, { arrayFormat: 'repeat' })
    )
    commit(blogMutations.SET.DATA, response.data.data, { root: true })
    // Fix total later
    commit(blogMutations.SET.TOTAL, response.data.total, { root: true })
    return response.data
  },
  async fetchMoreData() {
    const response = await clientApi.get('/blogs')
    return response
  },
  async fetchSingle(_, id) {
    const response = await clientApi.get('/blogs/' + id)
    return response
  },
  async submitSingle(_, form) {
    const response = await authApi.post('/blogs', form)
    return response
  },
  async updateSingle(_, { id, form }) {
    const response = await authApi.put('/blogs/' + id, form)
    return response
  },
  async deleteSingle(_, id) {
    const response = await authApi.delete('/blogs/' + id)
    return response
  },
}
