import detail from './detail/route'
import settings from './settings/route'
import { Route } from '@/core/models/Route'

// This page is not belong (children) to the product listing
// page, this is just good folder organizing
export default new Route({
  name: 'projects-slug',
  path: '/projects/:slug',
  redirect: '/projects/:slug/detail',
  component: () => import('./index.vue'),
  meta: {
    title: 'projects.title',
    auth: false,
    permissions: ['ALL'],
  },
  children: [detail, settings],
})
