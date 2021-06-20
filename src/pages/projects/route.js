import { Route } from '@/core/models/Route'

// The product detail page is not belong (children) to the
// product listing page, this is just good folder organizing
export default new Route({
  name: 'projects',
  path: '/projects',
  component: () => import('./index.vue'),
  meta: {
    title: 'projects.title',
    auth: false,
    permissions: ['ALL'],
  },
})
