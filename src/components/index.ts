/**
 * @Author:caofei
 * @date:2019/12/9
 * @Description:向外暴露公共方法
 */
//消息提示
import Message from "@/components/Message/message";
//AoeiButton
import AoeiButton from "./Button/index.vue";

import AoeiForm from '@/components/Form/AoeiForm.vue';
import FormInput from "@/components/Form/AoeiInput.vue";
import AoeiSelect from "@/components/Form/AoeiSelect.vue";
import AoeiOptgroup from "@/components/Form/AoeiOptgroup.vue";

import AoeiOption from "@/components/Form/AoeiOption.vue";


import TopBar from "@/components/Navigation/TopBar/index.vue";


import Test from './test/index.vue';


import FormSelect from "./Form/SimulationSelect/Select.vue";
import FormOption from './Form/SimulationSelect/Option.vue';


import AoeiSidebar from "./Navigation/Sidebar/index.vue";

//table
import AoeiTable from "./Table/Table.vue";
import TableColumn from './Table/TableColumn.vue';

export default {
    install(Vue: any, options: any) {
        Vue.prototype.$message = Message;
        Vue.component('AoeiButton', AoeiButton);
        Vue.component('AoeiForm', AoeiForm);
        Vue.component('FormInput', FormInput);
        Vue.component('TopBar', TopBar);
        Vue.component('AoeiSelect', AoeiSelect);
        Vue.component('AoeiOption', AoeiOption);
        Vue.component('AoeiOptgroup', AoeiOptgroup);
        Vue.component('AoeiSidebar', AoeiSidebar);


        Vue.component('FormSelect', FormSelect);
        Vue.component('FormOption', FormOption);
        //table
        Vue.component('AoeiTable', AoeiTable);
        Vue.component('TableColumn', TableColumn);

        Vue.component('Test', Test);
    }
}








