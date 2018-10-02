export default new Vuex.Store({
    state: {
        currentUser: null
    },
    mutations: {
        setCurrentUser (state, payload) {
            state.currentUser = payload
        }
    },
    actions : {

    }
})