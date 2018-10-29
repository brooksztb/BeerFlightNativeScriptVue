import Vue from 'nativescript-vue';
import Vuex from 'vuex';
import firebase from 'nativescript-plugin-firebase';
import BreweryService from '../services/BreweryService';

Vue.use(Vuex);

const state = {
    user: null,
    message: null,
    info: null,
    breweries: [],
    selectedBrewery: null,
    selectedBeer: null
}

const getters = {
    brewery: state => {
        return state.breweries.find(brewery => brewery.uid === state.selectedBrewery);
    },
    // beers: state => {
    //     return state.breweries.find(brewery => brewery.beers)
    // },
    beer: state => {
        return state.breweries.find(brewery => brewery.beers.find(beer => beer.uid === state.selectedBeer));
    }
}

const mutations = {
    setUser: (state, user) => {
        state.user = user;
    },
    setSelectedBrewery: (state, id) => {
        state.selectedBrewery = id;
    },
    setSelectedBeer: (state, id) => {
        state.selectedBeer = id;
    },
    setBreweries: (state, breweries) => {
        state.breweries = breweries;
    },
    pushBrewery: (state, brewery) => {
        state.breweries.push(brewery);
    },
    pushBeer: (state, brewery, beer) => {
        state.breweries[brewery].beers.push(beer);
    },
    setMessage: (state, message) => {
        state.message = message;
    },
    setInfo: (state, info) => {
        state.info = info;
        //timeout the view
        setTimeout(function () {
        state.info = '';
        }, 2000);
    }
}

const actions = {
    fetchBreweries() {
        BreweryService.getCurrentUser();
    },

    updateUser({commit}, user) {
        firebase.update(
          '/Users/' + user.uid,
          {
            DisplayName: user.email,
            Email: user.name,
            id: user.uid,
            updateTs: firebase.ServerValue.TIMESTAMP
          }).then(
          () => {
            //commit('setUser', payload);
          },
          error => {
            console.log("firebase.setValue error: " + error);
          }
        );
    },

    addBrewery(brewery) {
        BreweryService.addBrewery(brewery);
    },

    removeBrewery(brewery) {
        BreweryService.removeBrewery(brewery);
    },

    addBeer(brewery, beer) {
        BreweryService.addBeer(brewery, beer);
    },

    fetchCurrentUser({commit}) {
        firebase.getCurrentUser().then(
          function (user) {
            commit('setUser', user);
          },
          function (errorMessage) {
            console.log(errorMessage);
          }
        );
    }
}

const store = {
    state,
    getters,
    mutations,
    actions
}

export default new Vuex.Store(store)