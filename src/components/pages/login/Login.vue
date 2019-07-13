<template>
    <div class="bg_bank">
        <mt-header class="bg-color">
            <router-link to="/user" slot="left">
                <mt-button class="mt-bu" icon="back">返回</mt-button>
            </router-link>
        </mt-header>
        <div class="bg_color">
            <div class="re_logo">
                <img src="../../../assets/image/bg_icon.png" alt="">
            </div>
            <Input_phone/>
            <Verif_code/>
        </div>
        <div class="re_login">
            <button class="btn_login" @click="login" id="login">登录</button>
        </div>
    </div>
</template>
<script>
    import Verif_code from "./verif_code";
    import Input_phone from "./input_phone";
    import {store} from '../../../Vuex/store';
    import store_login from '../../../store/index';
    import {mapGetters} from 'vuex'

    export default {
        name: 'Login',
        data() {
            return {}
        },
        components: {
            Verif_code,
            Input_phone
        },
        computed: {
            //Vuex 组件之间传值
            user_phone: state => store.state.user_phone,// 获取Input_phone组件的传输值
            user_verif: state => store.state.user_verif,// 获取输入的验证码组件的传输值
            verif_code: state => store.state.verif_code, // 获取发送的验证码组件的传输值
        },
        methods: {
            login() {
//      if(this.user_phone==='')
//      {
//        this.$toast({
//          message:'电话号码不能为空!',
//          position: 'middle',
//          duration:1500
//        });
//        return;
//      }
//      else if(!(/^1[34578]\d{9}$/.test(this.user_phone)))
//      {
//        this.$toast({
//          message:'电话号码格式不对!',
//          position: 'middle',
//          duration: 1500
//        });
//        return;
//      }
//     else if(this.user_verif==='')
//      {
//        this.$toast({
//         message:'验证码为空!!',
//         position: 'middle',
//          duration: 1500
//        });
//        return;
//      }
//      else if(this.user_verif!=this.verif_code)
//      {
//        this.$toast({
//          message:'验证码不正确!',
//          position: 'middle',
//          duration: 1500
//        });
//        return;
//      }
//      else {
//        this.$toast({
//          message:'登陆成功!',
//          position: 'middle',
//          duration: 1500
//        });
//        this.$router.push('/home');
//      }
                store_login.state.isLogin = true;
                this.$router.push({path: '/user', name: 'User'});
            }
        }
    }
</script>
<style scoped>
    @import "../../../assets/css/login.css";
</style>
