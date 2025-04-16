import {
    createRouter,
    createWebHistory
} from 'vue-router'
import HomePage from '../pages/homePage.vue'
import ProductList from '../pages/productList.vue'
import ProductDetail from '../pages/productDetail.vue'
import OrderConfirmation from '../pages/orderConfirmation.vue'
import QuoteHistory from '../pages/qoutesHistory.vue'
import Diaspora from '../pages/africaDiaspora.vue'
import AppLayout from '../layouts/AppLayout.vue'


const routes = [{
    path: '/',
    component: AppLayout,
    children: [
        {
            path: '',
            component: HomePage
        },

        {
            path: 'products',
            component: ProductList
        },
        {
            path: 'products/:id',
            component: ProductDetail,
            props: true
        },
        {
            path: 'confirmation',
            component: OrderConfirmation,
            name: 'Confirmation'
        },
        {
            path: 'quotes',
            name: 'Quotes',
            component: QuoteHistory
        } ,
        {
            path: 'africa-diaspora',
            name: 'africa-diaspora',
            component: Diaspora
        }
    ]
}]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router