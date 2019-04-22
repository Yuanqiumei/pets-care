// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import axios from 'axios'
import global_ from './view/Global'
import Vuex from 'vuex'
import store from './store/store'


Vue.use(Vuex)
Vue.use(ElementUI);
Vue.config.productionTip = false
Vue.prototype.GLOBAL = global_;
axios.defaults.baseURL=global_.BASE_URL;

// axios.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8';
Vue.prototype.$http = axios

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
