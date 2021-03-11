import Vue from 'vue'
import VueRouter from 'vue-router'
import about from '@pages/about/config'
import home from '@pages/home/config'
// Sandbox
import sandbox from '@pages/sandbox/config'
// Auth pages
import authForgotPassword from '@pages/auth/forgot-password/config'
import authSignup from '@pages/auth/signup/config'
import authSignin from '@pages/auth/signin/config'
// Middleware
import { auth } from '@middleware/auth'

Vue.use(VueRouter)

const routes = [
  ...sandbox.routes,
  // Pages
  ...about.routes,
  ...home.routes,
  // Auth pages
  ...authForgotPassword.routes,
  ...authSignup.routes,
  ...authSignin.routes,
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

// Global middleware
router.beforeEach(auth)

export default router
