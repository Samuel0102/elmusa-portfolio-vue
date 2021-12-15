import { createRouter, createWebHashHistory } from 'vue-router'
import Index from '../views/IndexPage.vue'
import Project from '../views/ProjectPage.vue'

const routes = [
  {
    path: '/',
    name: 'Index',
    component: Index
  },
  {
    path: '/project/',
    name: 'Projects',
    component: Project
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
