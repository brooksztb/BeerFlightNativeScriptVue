import Vue from 'nativescript-vue';

import Home from '@/components/home/home';


import './styles.scss';

// Uncomment the following to see NativeScript-Vue output logs
//Vue.config.silent = false;
Vue.registerElement("Mapbox", () => require("nativescript-mapbox").MapboxView);

new Vue({

  render: h => h('frame', [h(Home)]),

}).$start();