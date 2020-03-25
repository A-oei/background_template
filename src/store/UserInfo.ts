export default {
    state: {
        userInfo: {}
    },
    mutations: {
        set_user_info(state: any, data: any) {
            state.userInfo = data
        }
    }
}
