import Vue from 'vue'
import App from './App.vue'
import router from '@/core/utils/routerInterceptor.ts'
import store from './store'

//导入通配scss
import '@/core/style/style.scss';

Vue.config.productionTip = false;


import config from "@/app.config";
import http from '@/core/utils/require';

http.config({
    baseURL: config.baseURL
})

//表单校验
Vue.directive('validator', {
    bind(el, binding, vnode) {
        el.addEventListener('blur', (e) => {
            binding.value(vnode.elm.value)
        })
    }
})

//导入公共方法
import common from "@/components/index";

Vue.use(common);


new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
