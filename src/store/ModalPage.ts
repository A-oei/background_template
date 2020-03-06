export default {
    state: {
        pages: ''
    },
    mutations: {
        ModalPushPage(state: any, options: any) {
            console.log(options);
            state.pages = options;
        },
        ModalDeletePage(state: any, options: any) {
            state.pages = '';
        }
    }
}
