import Vue from 'vue'
import VueRouter from 'vue-router'
import dashboard from '@/pages/dashboard/route'
import projects from '@/pages/projects/route'
import projectDetail from '@/pages/projects/[slug]/route'
import authPages from '@/pages/auth/route'
import sandbox from '@/core/pages/sandbox/route'
import error500 from '@/core/pages/error/500/route'
import error404 from '@/core/pages/error/404/route'
// Middleware
import { auth } from '@middleware/auth'

Vue.use(VueRouter)

const routes = [
  dashboard,
  projects,
  projectDetail,
  authPages,
  // Core pages
  sandbox,
  error500,
  error404,
]

const router = new VueRouter({
  // mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

// Global middleware
router.beforeEach(auth)

export default router
