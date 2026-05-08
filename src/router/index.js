import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import CourierInfo from '../views/CourierInfo.vue'
import MerchantInfo from '../views/MerchantInfo.vue'
import HelpSupport from '../views/HelpSupport.vue'
import Careers from '../views/Careers.vue'

import FoodPage from '../views/FoodPage.vue'
import PharmacyPage from '../views/PharmacyPage.vue'
import ShopsPage from '../views/ShopsPage.vue'
import GroceriesPage from '../views/GroceriesPage.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/courier-info', component: CourierInfo },
  { path: '/merchant-info', component: MerchantInfo },
  { path: '/help-support', component: HelpSupport },
  { path: '/careers', component: Careers },

  { path: '/category/food', name: 'Food', component: FoodPage },
  { path: '/category/pharmacy', name: 'Pharmacy', component: PharmacyPage },
  { path: '/category/shops', name: 'Shops', component: ShopsPage },
  { path: '/category/groceries', name: 'Groceries', component: GroceriesPage }
]

const router = createRouter({
  history: createWebHistory(),
  scrollBehavior() {
    return { top: 0 }
  },
  routes
})

export default router