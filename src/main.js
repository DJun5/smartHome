// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import axios from 'axios'
import Vuex from 'vuex'
import Store from './store'

import 'mint-ui/lib/style.css';
import Home from './components/pages/main/home/Home'
import Mui from 'vue-awesome-mui'
//全局引入mintui的组件
import MintUI from 'mint-ui';
Vue.use(MintUI);
Vue.use(Vuex);
Vue.use(Mui);

Vue.prototype.$http = axios;
Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {
    App,
    Home,
    Store
  },
  template: '<App/>'
});
