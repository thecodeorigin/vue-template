import { AuthService } from '@/services/auth'
import { authMutations } from './enums'

const authService = new AuthService()

export const actions = {
  async signin({ commit }, form) {
    const { data } = await authService.signin(form)
    localStorage.setItem('auth', data)
    commit(authMutations.SET.AUTH, data, { root: true }) // Mutating to store for client rendering
    return data
  },

  signout({ commit }) {
    localStorage.removeItem('auth')
    commit(authMutations.SET.AUTH, null, { root: true })
  },
}
