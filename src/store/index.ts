import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import navigation from "./Navigation";
import select from './Select';
import modal from "./ModalPage";


export default new Vuex.Store({
    state: {
        layerPopVisible: false
    },
    mutations: {},
    actions: {},
    modules: {
        navigation,
        select,
        modal
    }
})
