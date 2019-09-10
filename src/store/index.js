import Vue from 'vue';
import Vuex from 'vuex';
import state from './state';
import getters from './getters';
import actions from './actions';
import mutations from './mutations';

Vue.use(Vuex);

state.curLanguage = state.languages[0];

const store = new Vuex.Store({
  state: state,
  mutations: mutations,
  getters: getters,
  actions: actions
});

export default store;

Vue.use(store);

store.dispatch('syncLocalStorage', {});
