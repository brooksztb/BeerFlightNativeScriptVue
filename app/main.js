import Vue from 'nativescript-vue';
import firebase from 'nativescript-plugin-firebase'

import routes from './router';
import store from './store';

import BackendService from './services/BackendService';
import AuthService from './services/AuthService';

export const backendService = new BackendService();
export const authService = new AuthService();

import './styles.scss';

Vue.prototype.$store = store;
Vue.prototype.$authService = authService
//route manually
Vue.prototype.$changeRoute = (to, options) => {
  Vue.navigateTo(routes[to], options)
}

// Uncomment the following to see NativeScript-Vue output logs
//Vue.config.silent = false;
Vue.registerElement("Mapbox", () => require("nativescript-mapbox").MapboxView);

firebase.init({
  // onAuthStateChanged: data => { // optional
  //   console.log((data.loggedIn ? "Logged in to firebase" : "Logged out from firebase") + " (init's onAuthStateChanged callback)");
  //   if (data.loggedIn) {
  //     backendService.token = data.user.uid
  //     console.log(data.user.uid)
  //     store.commit('setUser', data.user)
  //     Vue.navigateTo(routes.home, { clearHistory: true })
  //   }
  //   else {
  //     backendService.token = ""
  //     Vue.navigateTo(routes.login, { clearHistory: true })
  //   }
  // }
}).then(
  instance => {
    console.log("firebase.init done");
  },
  error => {
    console.log(`firebase.init error: ${error}`);
  }
);

new Vue({
  store,
  render(h) {
    return h('frame', [
      h(backendService.isLoggedIn() ? routes.home : routes.login)
    ])
  },
}).$start();