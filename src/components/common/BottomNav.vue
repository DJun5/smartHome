<template>
    <div class="page-tabbar">
        <mt-tabbar v-model="selected" fixed>
            <mt-tab-item id="home">
                <img slot="icon" src="../../assets/image/icon_home_active.png" v-if="this.selected === 'home'">
                <img slot="icon" src="../../assets/image/icon_home.png" v-else>
                <span class="font-style">家</span>
            </mt-tab-item>
            <mt-tab-item id="room">
                <img slot="icon" src="../../assets/image/icon_room_active.png" v-if="this.selected === 'room'">
                <img slot="icon" src="../../assets/image/icon_room.png" v-else>
                <span class="font-style">房间</span>
            </mt-tab-item>

            <mt-tab-item id="user">
                <img slot="icon" src="../../assets/image/icon_user_active.png" v-if="this.selected === 'user'">
                <img slot="icon" src="../../assets/image/icon_user.png" v-else>
                <span class="font-style">我的</span>
            </mt-tab-item>
        </mt-tabbar>
    </div>
</template>

<script>
    import store_login from '../../store/index';

    export default {
        name: "BottomNav",
        data() {
            return {
                selected: 'home'
            }
        },
        watch: {
            //监听selected
            selected: function () {
                if (this.selected === 'room') {
                    this.$router.push({
                        path: '/room'
                    });
                }
                if (this.selected === 'user') {
                    if (store_login.state.isLogin)
                        this.$router.push({path: '/user', name: 'User'});
                    else
                        this.$router.push({path: '/user', name: 'NotLogin'});
                }
                if (this.selected === 'home') {
                    this.$router.push({
                        path: '/home'
                    });

                }
            }
        }
    }
</script>

<style scoped>
    @import "../../assets/css/my-mint.scss";

    .page-tabbar {
        background-color: transparent;
        text-decoration: none;
        z-index: 999 !important;
        position: absolute;
    }

    .font-style {
        color: #778899;
        text-decoration: none;
    }

    .font-style is-selected {
        color: #FF8C00;
        text-decoration: none;
    }
</style>
