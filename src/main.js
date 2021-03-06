// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'es6-promise/auto';
import 'babel-polyfill';
import Vue from 'vue';
import App from './App';
import store from './store';
import router from './router';
import vuetify from './plugins/vuetify';
import './plugins/axios';
import './plugins/function';

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  vuetify,
  router,
  store,
  components: {
    App
  },
  template: '<App/>'
}).$mount('#app');
