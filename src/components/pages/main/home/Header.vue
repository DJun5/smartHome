<template>
    <div class="header">
        <mt-header class="header-style" fixed>
            <mt-button slot="left" class="btnFont-style" @click="chooseEquipment" v-model="logins" v-cloak>
                {{userName}}的家&nbsp;
                <img src="../../../../assets/image/icon_right_noline.png" height="18" width="18"/>
            </mt-button>
            <mt-button slot="right"  id="settings">
                <img src="../../../../assets/image/icon_plus.png" height="30" width="30"/>&nbsp;
            </mt-button>
        </mt-header>
        <mt-actionsheet :actions="actions" v-model="isLogin"></mt-actionsheet>
        <!-- 右上菜单 -->
        <div id="options">
            <ul>
                <li><mt-cell-swipe>添加设备</mt-cell-swipe></li>
                <li><mt-cell-swipe style="padding-right:10px ">扫一扫</mt-cell-swipe></li>
            </ul>
        </div>
    </div>
</template>

<script>
    import store_login from '../../../../store/index';
    import {MessageBox,CellSwipe } from 'mint-ui'

    export default {
        name: "Header",
        data() {
            return {
                userName: '我',
                isLogin: false,
                actions: [
                    {
                        name: '个人设备',
                        method: this.userEquipment
                    },
                    {
                        name: '家庭设备',
                        method: this.homeEquipment
                    }
                ]
            }
        },
        methods: {
            chooseEquipment() {
                this.isLogin = true;
            },
            userEquipment() {
                MessageBox('提示', '抱歉，您还没有添加个人设备哦 :)')
            },
            homeEquipment() {
                if (store_login.state.isLogin === false) {
                    MessageBox('提示', '您还没有登录哦！')
                }
                else
                    MessageBox('提示', '抱歉，您还没有添加家庭设备哦 :)')
            }
        },
        computed: {
            logins() {//登陆后，用户名的改变
                if (store_login.state.isLogin === true) {
                    this.userName = '邓先生'
                }
            }
        }
    }
</script>

<style scoped>
    .btnFont-style {
        color: black !important;
        font-size: 16px;
    }

    .header-style {
        background-color: white;
    }

    .header {
        z-index: 5;
    }
    /*
    右上角下拉列表样式
     */
    #options {
        z-index: 5;
        display: none;
        position: fixed;
        padding-bottom: 10px;
        padding-left: 10px;
        width: 120px;
        padding-right: 10px;
        font: 12px/140% Arial, Helvetica, sans-serif;
        background: white;
        top: 3rem;
        right: 0;
        padding-top: 10px;
    }

    #options ul {
        padding: 0;
        margin: 0;
    }
    li{
        list-style: none;
    }

</style>
