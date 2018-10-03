import Vue from 'nativescript-vue';
import Vuex from 'vuex';
import firebase from 'nativescript-plugin-firebase';

Vue.use(Vuex);

const state = {
    user: null
}

const getters = {

}

const mutations = {
    setUser: (state, user) => {
        state.user = user;
    }
}

const actions = {

}

const store = {
    state,
    getters,
    mutations,
    actions
}

export default new Vuex.Store(store)