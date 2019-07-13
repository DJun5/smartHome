/**
 * Created by Administrator on 2018/12/26 0026.
 */
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);
const store = new Vuex.Store({
  state: {
    user_phone: '',
    user_verif:'',
    verif_code:'',
    Messages:[],
  },
  mutations: {
    phone_Message(state,user_phone) {
      state.user_phone = user_phone
    },
    verif_Message(state,user_verif,verif_code){
      state.user_verif=user_verif;
      state.verif_code=code
    }
  },

});
export  {
 store
}
