import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../pages/homePage.vue'
import ProductList from '../pages/ProductList.vue'
import ProductDetail from '../pages/ProductDetail.vue'
import OrderConfirmation from '../pages/OrderConfirmation.vue'


const routes = [
  { path: '/', component: HomePage },
  { path: '/products', component: ProductList },
  { path: '/products/:id', component: ProductDetail, props: true },
  { path: '/confirmation', component: OrderConfirmation },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
