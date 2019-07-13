<template>
    <div id="app">
        <transition :name="transitionName">
            <router-view></router-view>
        </transition>
        <!--可选择性的展示底部导航栏-->
        <BottomNav v-show="$route.meta.showBottomNav"/>
    </div>
</template>

<script>
    import BottomNav from './components/common/BottomNav'

    export default {
        name: 'App',
        data() {
            return {
                transitionName: '',
            }
        },
        mounted() {
            this.getRouteFrom();
        },
        methods: {
            getRouteFrom() {

            }
        },
        components: {
            BottomNav
        },
        watch: {
            //使用watch 监听$router的变化
            $route(to, from) {
                //如果to索引大于from索引,判断为前进状态,反之则为后退状态
                if (to.meta.index > from.meta.index) {
                    //设置动画名称
                    this.transitionName = 'slide-left';
                } else {
                    this.transitionName = 'slide-right';
                }
            }
        }
    }
</script>

<style scoped>
    /*@import url('./assets/css/vuescroll.css');*/
    .child-view {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
        transition: all .6s cubic-bezier(.55, 0, .1, 1);
    }

    .slide-right-enter-active,
    .slide-right-leave-active,
    .slide-left-enter-active,
    .slide-left-leave-active {
        will-change: transform;
        transition: all 120ms;
        position: fixed;
    }

    .slide-left-enter,
    .slide-right-leave-active {
        opacity: 0;
        -webkit-transform: translate(-100px, 0);
        transform: translate(-100px, 0);
    }

    .slide-left-leave-active,
    .slide-right-enter {
        opacity: 0;
        -webkit-transform: translate(100%, 0);
        transform: translate(100%, 0);
    }

</style>
