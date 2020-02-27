import Vue from "vue";
import DialogWrapper from "./DialogWrapper.vue";

let DialogWrapperConstructor: any = Vue.extend(DialogWrapper),
    instance: any,
    hasLayer: boolean = false;

const LayerPopup = (options: boolean) => {
    instance = new DialogWrapperConstructor({data: {visible: options}});
    instance.vm = instance.$mount();
    instance.vm.visible = options;
    document.body.appendChild(instance.vm.$el);
    hasLayer = true;
}

export default LayerPopup;
