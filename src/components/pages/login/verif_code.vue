<template>
  <div>
  <label class="label_start" :class="{'label_updown':label_verif}">请输入验证码</label>
  <div class="re_min" :class="{'re_min_outline':verif}">
    <span class="icon_vf_code" :class="{'icon_verif_outline':verif}"></span>
    <input   @input="verif_Message" v-model="user_verif"  class="input01" @focus="verif_show" @blur="verif_display"   name="code" type="password" />
    <mt-button class="reto_code" id="btn" @click="send_code" @disabled="isSend"  >{{verif_code}}</mt-button>
  </div>
  </div>
</template>
<script>
  import Input_phone from  "./input_phone";
  import {store} from '../../../Vuex/store';
  import qs from 'qs';
  export default{
    name:'verif_code',
    data(){
      return{
        verif_code: '获取验证码',
        timer:null,
        user_verif: '',
        url:'/apis/',
        verif:false,
        code:'',
        isSend:true,
        label_verif:false
      }
    },
    computed:{//Vuex 组件之间传值
     user_phone:state =>store.state.user_phone// 获取Input_phone组件的传输值
  },
  methods:{

      verif_show(){//不显示验证图标和规划
        this.verif=true;
        this.label_verif=true;
      },
      verif_display(){//恢复初始状态
          this.verif=false;
        if(this.user_verif==='')
        {
         this.label_verif=false
        }
        else{
          this.label_verif=true
        }
      },
      send_code(){//发送随机验证码
        if(this.user_phone==='')
        {
          this.$toast({
            message:'电话号码不能为空!',
            position: 'middle',
            duration:1500
          });
          return ;
        }
        else if(!(/^1[34578]\d{9}$/.test(this.user_phone)))
        {
          this.$toast({
            message:'电话号码格式不对!',
            position: 'middle',
            duration: 1500
          });
          return ;
        }
        else {
          const count = 60;
          let times = 60;
          if (!this.timer)
          {
            this.isSend = false;//按钮禁用
              this.code = this.random_code();//调用随机生成随机验证码的方法
            this.send_note(this.user_phone, this.code);//调用发送短信的方法
            this.timer = setInterval(()=> //倒计时;
              {
                if(times>0&&times<= count)
            {
              this.verif_code = times-- + 's后重新发送'
            }
          else
            {
              this.isSend = true;//按钮可用
              this.verif_code = '获取验证码';
              clearInterval(this.timer);
              this.timer = null;
            }
          },1000);
          }
        }
      },
      send_note(tel,code){//发送短信模板
        const text='验证码：'+code+',您正在使用登陆功能,该验证码仅用于身份验证,在五分钟之内有效，请勿泄露给其他人使用。'//短信内容模板，已经在sms平台绑定此内容，所以会比普通的更快到达用户手机。
        let param = new URLSearchParams();
        param.append('Uid','68wei');
        param.append('Key', 'd41d8cd98f00b204e980');
        param.append('smsMob',tel);
        param.append('smsText',text);
        this.$http.post(this.url,param,{
          headers:{
            'Content-Type':'application/x-www-form-urlencoded;charset=UTF-8'
          },
        }).then(function (response) {
          console.log(response)}
        )
      },
      random_code(){//生成随机6位验证码
        let code=""
        let code_lenght=6

        let random= new Array(0,1,2,3,4,5,6,7,8,9)
        for(let i=0;i<code_lenght;i++)//随机生成6位验证码
        {
          let index=Math.floor(Math.random()*10)
          code+=random[index]
        }
        return code
      },
    verif_Message() {//Vuex 将user_verif的状态保存到创库中
      store.commit('verif_Message',this.user_phone,this.code);
         }
    },
  }
</script>
<style scoped>
  @import "../../../assets/css/login.css";

</style>
