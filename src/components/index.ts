/**
 * @Author:caofei
 * @date:2019/12/9
 * @Description:向外暴露公共方法
 */
//消息提示
import Message from "@/components/Message/message";
//AoeiButton
import AoeiButton from "./Button/index";

import AoeiForm from '@/components/Form/AoeiForm';
import FormInput from "@/components/Form/FormInput";

import Test from './test/index';

export default {
    install(Vue: any, options: any) {
        Vue.prototype.$message = Message;
        Vue.component('AoeiButton', AoeiButton);
        Vue.component('AoeiForm', AoeiForm);
        Vue.component('FormInput', FormInput);


        Vue.component('Test', Test);
    }
}








