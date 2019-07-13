<template>
  <div>
  <label class="label_start" :class="{'label_updown':label_phone}" >手机</label>
  <div class="re_min" :class="{'re_min_outline':phone}" >
    <span class="icon_phone" :class="{'icon_phone_outline':phone}"></span>
    <input  @input="phone_Message"  oninput="if(value.length > 11)value = value.slice(0,11)" v-model="user_phone" @focus="phone_show" @blur="phone_display" class="input01"  name="phone" type="number"/>
  </div>
  </div>
</template>

<script>
  import {store} from '../../../Vuex/store';
  export default{
    name: 'input_phone',
    data(){
      return {
        user_phone: '',
        phone: false,
        label_phone: false,
      }
    },
    methods: {
      phone_Message () {//Vuex 将user_phone的状态保存到创库中
        store.commit('phone_Message',this.user_phone);
      },
      phone_show(){//显示电话的图标和动画
        this.phone = true
        this.label_phone = true
      },
      phone_display(){//恢复初始状态
        this.phone = false
        if (this.user_phone === '') {
          this.label_phone = false
        }
        else {
          this.label_phone = true
        }
      },
    }
  }
</script>
<style>
  @import "../../../assets/css/login.css";

</style>
