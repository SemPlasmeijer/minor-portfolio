import { createRouter, createWebHistory, createWebHashHistory, createMemoryHistory  } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import DescriptionView from '../views/DescriptionView.vue'
import CertificatesView from '../views/CertificatesView.vue'
import FeedpulseView from '../views/FeedpulseView.vue'
import BlogsView from '../views/BlogsView.vue'
import LeerdoelenView from '../views/LeerdoelenView.vue'
import ProjectView from '../views/ProjectView.vue'




const router = createRouter({
  history: createMemoryHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/description',
      name: 'description',
      component: DescriptionView,
    },
    {
      path: '/certificates',
      name: 'certificates',
      component: CertificatesView,
    },
    {
      path: '/feedpulse',
      name: 'feedpulse',
      component: FeedpulseView,
    },
    {
      path: '/blogs',
      name: 'blogs',
      component: BlogsView,
    },
    {
      path: '/leerdoelen',
      name: 'leerdoelen',
      component: LeerdoelenView,
    },
    {
      path: '/project',
      name: 'Project',
      component: ProjectView,
    }
  ],
})

export default router
