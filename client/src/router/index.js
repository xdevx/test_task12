import Vue from 'vue'
import VueRouter from 'vue-router'
import Catalog from '../views/catalog.vue'
import Cart from '../views/cart.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Catalog',
    component: Catalog
  },
  {
    path: '/cart',
    name: 'Cart',
    component: Cart
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
