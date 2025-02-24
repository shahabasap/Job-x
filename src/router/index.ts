import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import JobView from '../views/JobView.vue'
import JobDetailView from '../views/JobDetailView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/jobs',
      name: 'jobs',
      component:JobView
    },
    {
      path: '/jobs/:id',
      name: 'job-detail',
      component: JobDetailView,
      props: true
    },
  ],
})

export default router
