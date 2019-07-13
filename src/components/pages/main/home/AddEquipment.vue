<template>
  <div class="imgcard">
    <div class="container">
      <mt-button type="primary" class="btn-Style" @click="addMore">
        <img src="../../../../assets/image/icon_add.png" height="26" width="26" slot="icon">
        添加设备
      </mt-button>
    </div>
  </div>
</template>

<script>
  import store_login from '../../../../store/index';
  import {MessageBox} from 'mint-ui';
  export default {
    name: "AddEquipment",
    data() {
      return {
        roomId:-1
      }
    },
    watch: {
      roomId: function ToAddPage() {
        if (this.roomId !== -1) {
          this.$router.push('equipmentOperation?id=' + this.roomId + '&name=add')
        }
      }

    },
    methods: {
      addMore() {
        if (store_login.state.isLogin === false){
          MessageBox('提示','您还没有登录哦！')
        }
        else {
          MessageBox.prompt('请输入需要添加设备的房间名称：').then(({ value, action }) => {
            if (value === '客厅'){
              this.roomId = 1;
            }else if (value === '主卧室') {
              this.roomId = 2;
            }else if (value === '次卧室') {
              this.roomId = 3;
            }else if (value === '洗手间') {
              this.roomId = 4;
            }else if (value === '厨房') {
              this.roomId = 5;
            }else if (value === '默认房间') {
              this.roomId = 6;
            }else{
              MessageBox('提示','没有这个房间！')
            }
          });
        }
      }

    }
  }
</script>

<style scoped>
  .imgcard {
    text-align: center;
    margin: 3rem auto;
    height: 5rem;
    width: 96%;
    box-shadow: 0 1px 8px 0 rgba(0, 0, 0, 0.2), 0 1px 15px 0 rgba(0, 0, 0, 0.19);
    border-radius: 10px;
  }

  .container {
    padding: 10px;
  }

  .btn-Style {
    font-size: 14px;
    color: darkgray;
    margin: 1rem auto;
    background-color: transparent;
    width: 100%;
    height: 100%;
  }
</style>
