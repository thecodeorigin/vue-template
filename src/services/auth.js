import { clientApi } from '@/core/apis/client'

export class AuthService {
  /**
   * Sign in
   * @param {*} form
   * @returns
   */
  signin = (form) => clientApi.post('/auth/signin', form)

  /**
   * Sign up
   * @param {*} form
   * @returns
   */
  signup = (form) => clientApi.post('/auth/signup', form)
}
