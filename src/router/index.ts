import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        component: () => import('../views/Home.vue'),
        children: [
            {
                path: '/home1/',
                name: 'about',
                component: () => import(/* webpackChunkName: "about" */ '../views/IconFont/index.vue'),
            },
            {
                path: 'home2',
                name: 'home2',
                component: () => import(/* webpackChunkName: "about" */ '../views/Home2.vue'),
            },
            {
                path: 'iconFont',
                name: 'iconFont',
                component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
            }
        ]
    },
    {
        path: '/login',
        name: 'login',
        component: () => import('../views/Login/index.vue'),
        meta: {
            hidden: true
        }
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
