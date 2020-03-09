/**
 * @Author:caofei
 * @date:2019/12/9
 * @Description:向外暴露公共方法
 */
//消息提示
import Message from "@/components/Message/message";

import AoeiButton from "./Button/index.vue";

import AoeiForm from '@/components/Form/AoeiForm.vue';

import FormInput from "@/components/Form/AoeiInput.vue";

import TopBar from "@/components/Navigation/TopBar/index.vue";

import AoeiSidebar from "./Navigation/Sidebar/index.vue";

import Dialog from "@/components/Dialog/index.vue";

import AoeiDropdown from '@/components/Dropdown/index.vue';

import AoeiCard from "@/components/Card/index.vue";

import ModalPage from "@/components/ModalPage/index.vue";

import AoeiPagination from "@/components/Pagination/index.vue";

import AoeiDatePicker from "@/components/DatePicker/index.vue";


//dropdown
import Dropdown from "./Dropdown/index.vue";
import DropdownMenu from "./Dropdown/DropdownMenu.vue";
import DropdownItem from "./Dropdown/DropdownItem.vue";

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

        Vue.component('AoeiButton', AoeiButton);
        Vue.component('AoeiForm', AoeiForm);
        Vue.component('FormInput', FormInput);
        Vue.component('TopBar', TopBar);
        Vue.component('AoeiSidebar', AoeiSidebar);
        Vue.component('AoeiDropdown', AoeiDropdown);
        Vue.component('Dialog', Dialog);
        Vue.component('AoeiCard', AoeiCard);
        Vue.component('ModalPage', ModalPage);
        Vue.component('AoeiPagination', AoeiPagination);
        Vue.component('AoeiDatePicker', AoeiDatePicker);

        //table
        Vue.component('AoeiTable', AoeiTable);
        Vue.component('TableColumn', TableColumn);
        //select
        Vue.component('AoeiSelect', AoeiSelect);
        Vue.component('AoeiOption', AoeiOption);
        //dropdown
        Vue.component('AoeiDropdown', Dropdown);
        Vue.component('AoeiDropdownMenu', DropdownMenu);
        Vue.component('AoeiDropdownItem', DropdownItem);

        Vue.component('TestIndex', TestTable);
    }
}








