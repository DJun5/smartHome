<template>
    <div class="card" @click="connectEquipment">
        <div class="imgCenter">
            <div class="centerCard">
                <div class="cardHeader">
                    <img src="../../../../assets/image/icon_connect.png" style="width:70px;height:80px;padding-bottom:20px;"/>
                    <span style="margin: 0 auto;display: block;width: 100%;font-size: 1.5rem">一键连接设备</span>
                </div>
            </div>
        </div>
    </div>

</template>

<script>
    import {Indicator} from 'mint-ui'

    export default {
        name: "ExperienceCenter",
        data() {
            return {
                IsConnected: false,
                //description:'打破物联网企业壁垒，提供便捷的接入方式，实现不同企业，不同品牌、不同类型间的只能家居互联互通！'
            }
        },
        methods: {
            connectEquipment() {
                Indicator.open({
                    text: '正在连接设备...',
                    spinnerType: 'double-bounce'
                });

                setTimeout(() => Indicator.close(), 1000);
            }
        },
        beforeDestroy() {
            Indicator.close();
        }
    }
</script>

<style scoped>
    [v-cloak] {
        display: none;
    }
    .centerCard{ border-radius:10px;cursor:pointer;margin-top:10px;width: 100%; height:100%;box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19);text-align: center;transition: all 0.25s;}
    .centerCard:hover{margin-top:0px;box-shadow: 5px 8px 5px #778899;}
    .cardHeader{
        /*background-color: transparent;*/
        margin:0 auto;
        padding: 40px;
    }
    .centerCard img{width: 100%;}
    /*.card img { width: 100%; border-radius: 10px 10px 0 0}*/
    .card {
        height: 15rem;
        width: 96%;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
        border-radius: 10px;
        margin: 60px auto;
    }

    .card span {
        font-size: 12px;
        color: #BFBFBF;
        width: 88px;
        height: 16px;
        display: block;
        letter-spacing: 2px;
    }

    .imgCenter {
        width: 100%;
        height: 100%;
        background: url("../../../../assets/image/bgimg.jpg") no-repeat;
        background-size: cover;
        -webkit-background-size: cover;
        -o-background-size: cover;
        border-radius: 10px;
    }
</style>
