import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import CourierInfo from '../views/CourierInfo.vue'
import MerchantInfo from '../views/MerchantInfo.vue'
import HelpSupport from '../views/HelpSupport.vue'
import Careers from '../views/Careers.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/courier-info', component: CourierInfo },
  { path: '/merchant-info', component: MerchantInfo},
  { path: '/help-support', component: HelpSupport},
  { path: '/careers', component: Careers}
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
