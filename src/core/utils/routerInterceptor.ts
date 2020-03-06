import router, {routes} from "@/router/index";
import store from '@/store/index'
import {RouterObject} from "./interface";

interface routerComponent {
    name?: string,
    component?: any,
    children?: object[],

    [propName: string]: any
}

let aggregate = new Map();

const getComponents = (routers: routerComponent[]) => {
    routers.map(item => {
        console.log(item, 'item');
        if (item['name'] && item['component'] && item.meta.isModal) {
            aggregate.set(item['name'], {title: item.title, component: item.component})
        }
        if (item['children']) {
            getComponents(item.children);
        }
    })
    return aggregate;
}

router.beforeEach((to: any, from: any, next: any) => {
    let token = window.localStorage.getItem('aoei-token');
   if (to.name != 'login' && !token) {
        next('/login')
    }
    else {
        next();
    }
})

export default router;
