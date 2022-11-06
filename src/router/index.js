import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import DescriptionView from '../views/DescriptionView.vue'
import CertificatesView from '../views/CertificatesView.vue'
import FeedpulseView from '../views/FeedpulseView.vue'
import BlogsView from '../views/BlogsView.vue'
import LeerdoelenView from '../views/LeerdoelenView.vue'





const router = createRouter({
  history: createWebHashHistory(),
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
        leave: "animate__animated animate__slideOutRight",
        enter: "animate__animated animate__slideInLeft",
      }
    },
    {
      path: '/certificates',
      name: 'certificates',
      component: CertificatesView,
      meta: {
        leave: "animate__animated animate__slideOutRight",
        enter: "animate__animated animate__slideInLeft",
      }
    },
    {
      path: '/feedpulse',
      name: 'feedpulse',
      component: FeedpulseView,
      meta: {
        leave: "animate__animated animate__slideOutRight",
        enter: "animate__animated animate__slideInLeft",
      }
    },
    {
      path: '/blogs',
      name: 'blogs',
      component: BlogsView,
      meta: {
        leave: "animate__animated animate__slideOutRight",
        enter: "animate__animated animate__slideInLeft",
      }
    },
    {
      path: '/leerdoelen',
      name: 'leerdoelen',
      component: LeerdoelenView,
      meta: {
        leave: "animate__animated animate__slideOutRight",
        enter: "animate__animated animate__slideInLeft",
      }
    }
  ],
})

export default router
