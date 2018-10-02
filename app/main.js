import Vue from 'nativescript-vue';

import App from './app';


import './styles.scss';

// Uncomment the following to see NativeScript-Vue output logs
//Vue.config.silent = false;
Vue.registerElement("Mapbox", () => require("nativescript-mapbox").MapboxView);

new Vue({

  render: h => h('frame', [h(App)]),

}).$start();