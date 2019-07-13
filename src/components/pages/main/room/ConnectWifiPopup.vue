<template>
  <!--确认连接家庭 WiFi-->
    <div>
      <!--popup-transition="popup-fade"-->
      <mt-popup style="background-color: darkslategray" v-model="visible" position="right" class="mint-popup-3" :modal="false">
        <mt-button @click.native="visible = false" size="large" type="primary">退出</mt-button>
      </mt-popup>
    </div>
</template>

<script>
    export default {
        name: "ConnectWifiPopup",
      data(){
          return{
            visible:this.popupVisible
          }
      },
      // props:{
      //   popupVisible: {
      //     type: Boolean,
      //     default: false
      //   }
      // },
      props:['popupVisible'],
      created(){
          console.log(this.visible)
      }
    }
</script>

<style scoped>
  .mint-popup-3 {
    width: 100%;
    height: 100%;
    background-color: #fff;
  }

  .mint-popup-3 .mint-button {
    position: absolute;
    width: 90%;
    top: 50%;
    left: 5%;
  }
</style>
