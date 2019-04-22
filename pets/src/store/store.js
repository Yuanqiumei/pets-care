import Vuex from 'vuex';
import Vue from 'vue';
import email from './modules/email';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    email
  }
});

