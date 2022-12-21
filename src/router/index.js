import { createRouter, createWebHistory } from 'vue-router'
import ProductsVue from '../views/ProductsView.vue'

const routes = [
  {
    path: '/',
    name: 'products',
    component: ProductsVue
  },
  {
    path: '/admin',
    name: 'admin',
    component: () => import('../views/AdminView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

