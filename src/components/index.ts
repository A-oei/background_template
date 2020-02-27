/**
 * @Author:caofei
 * @date:2019/12/9
 * @Description:向外暴露公共方法
 */
//消息提示
import Message from "@/components/Message/message";
//遮罩层
import DialogWrapper from "@/components/Dialog/LayerPop";


import AoeiButton from "./Button/index.vue";

import AoeiForm from '@/components/Form/AoeiForm.vue';

import FormInput from "@/components/Form/AoeiInput.vue";

import TopBar from "@/components/Navigation/TopBar/index.vue";

import AoeiSidebar from "./Navigation/Sidebar/index.vue";

import Dialog from "@/components/Dialog/index.vue";

import AoeiDropdown from '@/components/Dropdown/index.vue';

//table
import TestTable from "./Table/TestTable.vue";
import AoeiTable from "./Table/Table.vue";
import TableColumn from './Table/TableColumn.vue';
//select
import AoeiSelect from "./Form/SimulationSelect/Select.vue";
import AoeiOption from './Form/SimulationSelect/Option.vue';




export default {
    install(Vue: any, options: any) {
        Vue.prototype.$message = Message;
        Vue.prototype.$layerPop = DialogWrapper;

        Vue.component('AoeiButton', AoeiButton);
        Vue.component('AoeiForm', AoeiForm);
        Vue.component('FormInput', FormInput);
        Vue.component('TopBar', TopBar);
        Vue.component('AoeiSidebar', AoeiSidebar);
        Vue.component('AoeiDropdown', AoeiDropdown);
        Vue.component('Dialog', Dialog);

        //table
        Vue.component('AoeiTable', AoeiTable);
        Vue.component('TableColumn', TableColumn);
        //select
        Vue.component('AoeiSelect', AoeiSelect);
        Vue.component('AoeiOption', AoeiOption);


        Vue.component('TestIndex', TestTable);
    }
}








