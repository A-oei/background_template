interface State {
    currentIndex: string | number
}

export default {
    state: {
        currentIndex: ''
    },
    mutations: {
        changeIndex(state: State, index: string | number) {
            state.currentIndex = index;
        }
    }
}
