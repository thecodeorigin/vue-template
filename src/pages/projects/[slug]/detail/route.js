import { Route } from '@/core/models/Route'

export default new Route({
  name: 'projects-slug-detail',
  path: '/projects/:slug/detail',
  component: () => import('./index.vue'),
  meta: {
    title: 'projects-detail.title',
    auth: false,
    permissions: ['ALL'],
  },
})
