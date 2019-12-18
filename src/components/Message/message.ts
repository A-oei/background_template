import Vue from 'vue';
import MessageTemplate from "./index.vue";

let MessageConstructor: any = Vue.extend(MessageTemplate);
let seed: number = 1,
    instance,
    instances = [];

/**
*message消息弹窗提示
*@params
*@params options 配置项，如果是纯文字那么默认时间为3000ms，默认为success格式
 * 可以配置{
 *     message:提示内容,
 *     duration:弹窗停留时长
 *     type:弹窗类型
 *     closed:是否显示关闭按钮
 * }
*/

const Message = function (options: object | string = {}) {

    if (typeof options == "string") {
        options = {
            message: options
        }
    }

    let id = 'message_' + seed++;

    instance = new MessageConstructor({
        data: options
    })

    instance.id = id;
    instance.vm = instance.$mount();

    document.body.appendChild(instance.vm.$el);

    instance.vm.visible = true;
}

export default Message;
