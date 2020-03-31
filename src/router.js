import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from './components/Home.vue'
import Noten from './components/Noten.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/noten',
        name: 'Noten',
        component: Noten
    }
]

const router = new VueRouter({
    routes
})

export default router
