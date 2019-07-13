<template>
  <div class="user-content">
    <section class="aui-flexView">
      <header class="aui-navBar aui-navBar-fixed">
        <p  class="aui-navBar-item">我的</p>
        <div class="aui-center">
          <span class="aui-center-title"></span>
        </div>
        <router-link to="/user" class="aui-navBar-item">
          <i class="icon icon-info"></i>
          <i class="icon icon-set"></i>
        </router-link>
      </header>
      <section class="aui-scrollView">
        <div class="aui-panel">
          <router-link to="/login" class="aui-panel-cell">
            <div class="aui-panel-cell-hd">
              <img src="../../../../assets/image/userCenter/icon_headimg_default.png" alt="">
            </div>
            <div class="aui-panel-cell-bd">
              <h4>
                <i>您好，请点击登录！</i>
              </h4>
            </div>
          </router-link>
          <div class="aui-palace aui-palace-clear" >
            <router-link to="/user" class="aui-palace-grid">
              <div class="aui-palace-grid-icon">
                <img src="../../../../assets/image/userCenter/icon-introduce.png" alt="">
              </div>
              <div class="aui-palace-grid-text">
                <h2>设备推荐</h2>
              </div>
            </router-link>

          <router-link to="/user" class="aui-palace-grid">
            <div class="aui-palace-grid-icon">
              <img src="../../../../assets/image/userCenter/icon-family.png" alt="">
            </div>
            <div class="aui-palace-grid-text">
              <h2>家庭管理</h2>
            </div>
          </router-link>
          <router-link to="/user" class="aui-palace-grid aui-palace-grid-line">
            <div class="aui-palace-grid-icon">
              <img src="../../../../assets/image/userCenter/icon-work.png" alt="">
            </div>
            <div class="aui-palace-grid-text">
              <h2>工作台</h2>
            </div>
          </router-link>
          </div>
          <div class="aui-well-list">
            <router-link to="/user" class="aui-well-item">
              <div class="aui-well-item-hd">
                <img src="../../../../assets/image/userCenter/icon-msg.png" alt="">
              </div>
              <div class="aui-well-item-bd">
                <h3>问题反馈</h3>
              </div>
              <span class="aui-well-item-fr"></span>
            </router-link>
            <router-link to="/user" class="aui-well-item">
              <div class="aui-well-item-hd">
                <img src="../../../../assets/image/userCenter/icon-about.png" alt="">
              </div>
              <div class="aui-well-item-bd">
                <h3>关于我们</h3>
              </div>
              <span class="aui-well-item-fr"></span>
            </router-link>
          </div>

        </div>
      </section>

    </section>
  </div>

</template>

<script>
  export default {
      name: "NotLoginUserPage",
      data() {
          return {
              isLogin: false
          }
      }
  }
</script>

<style scoped>
  @import "../../../../assets/css/usercenter.css";
  .user-content{
    font-size: 20px;
    width: 100%;
  }
</style>
