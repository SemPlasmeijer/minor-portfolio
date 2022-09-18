import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import DescriptionView from '../views/DescriptionView.vue'
import CertificatesView from '../views/CertificatesView.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: {
        leave: "animate__animated animate__slideOutUp",
        enter: "animate__animated animate__slideInDown",
      }
    },
    {
      path: '/description',
      name: 'description',
      component: DescriptionView,
      meta: {
        leave: "animate__animated animate__slideOutUp",
        enter: "animate__animated animate__slideInDown",
      }
    },
    {
      path: '/certificates',
      name: 'certificates',
      component: CertificatesView,
      meta: {
        leave: "animate__animated animate__slideOutUp",
        enter: "animate__animated animate__slideInDown",
      }
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    }
  ]
})

export default router
