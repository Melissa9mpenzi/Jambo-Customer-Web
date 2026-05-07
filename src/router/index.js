import { createRouter, createWebHistory } from 'vue-router'
import Home from '../Home.vue'
import HelpSupport from '../components/HelpSupport.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/help-support',
    name: 'HelpSupport',
    component: HelpSupport
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
