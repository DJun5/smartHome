<template>
  <div class="content6">
    <section class="aui-flexView">
      <mt-header class="aui-navBar" fixed style="background-color: white">
        <mt-button slot="left" style="color: black;font-size: 1.7rem;">我的</mt-button>
        <mt-button slot="right"  id="settings">
          <i class="icon icon-info"></i>
          <i class="icon icon-set"></i>
        </mt-button>
        <!--<p  class="aui-navBar-item">我的</p>-->
        <!--<div class="aui-center">-->
          <!--<span class="aui-center-title"></span>-->
        <!--</div>-->
        <!--<router-link to="/user" class="aui-navBar-item">-->

        <!--</router-link>-->
      </mt-header>
      <div style="height: 2.8rem;"></div>
      <section class="aui-scrollView">
        <div class="aui-panel">
          <router-link to="/user" class="aui-panel-cell">
            <div class="aui-panel-cell-hd">
              <img src="../../../../assets/image/userCenter/icon_headimg_default.png" alt="">
            </div>
            <div class="aui-panel-cell-bd">
              <h4>
                <i>邓先生</i>
                <em>
                  <img src="../../../../assets/image/userCenter/icon-lv.png" alt="">
                </em>
              </h4>
              <p>
                <em class="aui-panel-back">粉丝 299</em>
                <em class="aui-medal">关注 908</em>
              </p>
            </div>
            <div class="aui-panel-cell-fr">
              <p>
                <i class="icon icon-sign"></i>
                待领取积分
                <em>+50积分</em>
              </p>
            </div>
          </router-link>
          <div class="aui-panel-time">
            在线<em>1</em>
            小时<em>25</em>
            分

          </div>
        </div>
        <div class="aui-card-box">
          <div class="aui-card-list">
            <router-link to="/user" class="aui-well-item">
              <div class="aui-well-item-hd">
                <img src="../../../../assets/image/userCenter/icon-vip.png" alt="">
              </div>
              <div class="aui-well-item-bd">
                <h3>VIP会员</h3>
              </div>
              <span class="aui-well-item-fr">免费领取30天会员</span>
            </router-link>
          </div>
          <div class="aui-card-white">
            <div class="aui-palace clearfix">
              <router-link to="/user" class="aui-palace-grid">
                <div class="aui-palace-grid-icon">22
                </div>
                <div class="aui-palace-grid-text">
                  <h2>已购</h2>
                </div>
              </router-link>
              <router-link to="/user" class="aui-palace-grid">
                <div class="aui-palace-grid-icon">2
                </div>
                <div class="aui-palace-grid-text">
                  <h2>优惠券</h2>
                </div>
              </router-link>
              <router-link to="/user" class="aui-palace-grid">
                <div class="aui-palace-grid-icon">123
                </div>
                <div class="aui-palace-grid-text">
                  <h2>金币</h2>
                </div>
              </router-link>
              <router-link to="/user" class="aui-palace-grid">
                <div class="aui-palace-grid-icon">909
                </div>
                <div class="aui-palace-grid-text">
                  <h2>积分</h2>
                </div>
              </router-link>
              <router-link to="/user" class="aui-palace-grid aui-palace-grid-line">
                <div class="aui-palace-grid-icon">
                  <img src="../../../../assets/image/userCenter/icon-money.png" alt="">
                </div>
                <div class="aui-palace-grid-text">
                  <h2>钱包</h2>
                </div>
              </router-link>
            </div>
          </div>
          <div class="aui-card-white">
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
          </div>
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
              <img src="../../../../assets/image/userCenter/icon-points.png" alt="">
            </div>
            <div class="aui-well-item-bd">
              <h3>积分兑换</h3>
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
      </section>
    </section>
  </div>

</template>

<script>
  export default {
    name: "User",
    data(){
      return{
        isLogin:true
      }
    }
  }
</script>

<style scoped>
  @import "../../../../assets/css/usercenter.css";
  .content6{
    font-size: 20px;
    width: 100%;
    height: 700px;
  }
</style>
