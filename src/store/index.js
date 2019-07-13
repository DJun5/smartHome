import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);
const store_login = new Vuex.Store({
  state:{
      isLogin: false
  },
  mutations : {
    changeLogin(state, data){
      state.isLogin = data;
    }
  }
});

const store_equipment_status = new Vuex.Store({
    state:{
      isOpen:false
    },
    mutations : {
        changeLogin(state, data){
            state.isOpen = data;
        }
    }
});

export default store_login
