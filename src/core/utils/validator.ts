/**
 * @Author:caofei
 * @date:2019/11/29
 * @Description:表单校验
 */

import Vue from "vue";

function Validator() {
    Vue.directive('validator', {
        bind(el, binding, vnode) {
            el.addEventListener('blur', (e) => {
                console.log(e);
            })
        }
    })
}

export default Validator;

