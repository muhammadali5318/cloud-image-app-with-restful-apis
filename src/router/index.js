import Vue from 'vue'
import VueRouter from 'vue-router'
import SignUpLogin from '../views/SignUpLogin.vue'
import Home from '../views/Home.vue'
import Carousel from "../components/Carousel.vue"
import SingleImage from "../components/SingleImage.vue"



Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'SignUpLogin',
        component: SignUpLogin
    },
    {
        path: '/Home',
        name: 'Home',
        component: Home
    },
    {
        path: '/Carousel',
        name: 'Carousel',
        component: Carousel
    },
    {
        path: '/SingleImage',
        name: 'SingleImage',
        component: SingleImage
    },
    {
        path: '/about',
        name: 'About',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/About.vue')
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router