import Vue from 'vue'
import VueRouter from 'vue-router'

import RoleChange from "../views/SaaS/RoleChange.vue";
import Home from "../views/Home.vue";


Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        component: Home,
        redirect:'/saaSRoleManagement',
        children: [
            {
                path: '/saaSRoleManagement',
                name: 'saaSRoleManagement',
                component: () => import('../views/SaaS/SaasRoleManagement.vue')
            },
            // {
            //     path: '/home1/',
            //     name: 'home1',
            //     component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
            // },
            {
                path: 'iconFont',
                name: 'iconFont',
                component: () => import(/* webpackChunkName: "about" */ '../views/IconFont/index.vue'),
            },
            {
                path: '/saasPop',
                name: 'saasPop',
                component: RoleChange,
                meta: {
                    title: '修改角色',
                    isModal: true
                }
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

export {routes}

const router = new VueRouter({
    // mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
