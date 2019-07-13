<template>
    <div>
        <common-header :header-title="headerTitle"/>
        <div style="height: 2.3rem"></div>
        <!---------------------------->
        <div class="addEquipment" v-cloak>
            <div class="imgcard">
                <div class="container">
                    <!--<p>温度：{{temperature}}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;湿度：{{wetDegree}}%</p>-->
                    <!--<p>煤气浓度：{{coalDegree}}%&nbsp;&nbsp;&nbsp;光照强度：{{lightDegree}}</p>-->
                    <table class="table">
                        <thead>
                        <tr>
                            <th>室内温度</th>
                            <th>室内湿度</th>
                            <th>煤气浓度</th>
                            <th>光照强度</th>
                            <th>门状态</th>
                            <th>客厅窗户状态</th>
                            <th>卧室窗户状态</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr v-if="coalDegree === ''&& temperature ===''&&wetDegree===''
                        &&coalDegree===''&&doorStatus===''&&window1Status === ''&&window2Status ===''">
                            <th  colspan="7">暂时没有数据,请检查下设备是否开了哦</th>
                        </tr>
                        <tr v-else>
                            <th v-if="temperature=== ''"></th>
                                <th v-else>{{temperature}}℃</th>
                            <th v-if="wetDegree === ''"></th>
                                <th v-else>{{wetDegree}}%</th>
                            <th v-if="coalDegree === ''"></th>
                                <th v-else>{{coalDegree}}%</th>
                            <th v-if="lightDegree === ''"></th>
                             <th v-else>{{lightDegree}}%</th>
                            <th>{{doorStatus}}</th>
                            <th>{{window1Status}}</th>
                            <th>{{window2Status}}</th>
                        </tr>

                        </tbody>
                    </table>
                </div>
            </div>
            <div class="aui-grids-box" v-cloak>
                <div class="aui-grids-item" v-for="(item,index) in gridsData" :key="index">
                    <div class="aui-grids-item-hd" @click="modalControl(item.equipmentName,item.index)">
                        <img :src="item.imgName" alt="DJun">
                    </div>
                    <br/>
                    <div class="aui-grids-item-bd">
                        {{item.equipmentName}}
                    </div>
                </div>
            </div>
        </div>
        <!---------------------------->
        <div>
            <!--popup-transition="popup-fade"-->
            <mt-popup style="background-color: white" v-model="addPopupVisible" position="right" class="mint-popup-3"
                      :modal="false">
                <div v-if="equipmentName==='活体检测'">
                    <div >
                        <h3 class="modal-header modal-title">{{equipmentName}}</h3>
                    </div>
                    <div style="height: 4rem"></div>
                    <div class="modal-body modal-content">
                        <span style="width: 100%">当前客厅<span style="color: red;">{{liveScan}}</span></span>
                    </div>
                    <mt-button @click.native="addPopupVisible = false" size="large" type="primary">退出</mt-button>
                </div>
                <div v-else>
                    <div>
                        <h3 class="modal-header modal-title">{{equipmentName}}</h3>
                    </div>
                    <div style="height: 4rem"></div>
                    <div class="modal-body modal-content">
                        <span style="width: 100%">设备状态</span>
                        <mt-cell title="设备开关">
                            <!--<mt-button type="default"  @click.native="requestService('打开灯')">开关</mt-button>-->
                            <mt-switch v-model="equipmentStatus"></mt-switch>
                        </mt-cell>
                    </div>
                    <mt-button @click.native="addPopupVisible = false" size="large" type="primary">确认</mt-button>
                </div>
            </mt-popup>
        </div>
    </div>
</template>

<script>
    import CommonHeader from "../../../common/Header"

    export default {
        name: "CustomerEquipment",
        data() {
            return {
                resData: '',
                headerTitle: '',
                postUrl: 'http://192.168.0.3:8886/add',
                equipIndex: 0,
                visible: this.popupVisible,
                addPopupVisible: false,
                equipmentStatus: false,
                equipmentName: '',
                gridsData: [
                    {
                        imgName: require('../../../../assets/image/equipmentImages/icon_lights.png'),
                        equipmentName: '厨房灯',
                        index: 11
                    },{
                        imgName: require('../../../../assets/image/equipmentImages/icon_all_light.png'),
                        equipmentName: '全部灯',
                        index: 12
                    },
                    {
                        imgName: require('../../../../assets/image/equipmentImages/icon_colorLight.png'),
                        equipmentName: '主卧灯',
                        index: 6
                    }, {
                        imgName: require('../../../../assets/image/equipmentImages/icon_light.png'),
                        equipmentName: '客厅灯',
                        index: 7
                    }, {
                        imgName: require('../../../../assets/image/equipmentImages/icon_aisle_light.png'),
                        equipmentName: '次卧灯',
                        index: 8
                    },
                    {
                        imgName: require('../../../../assets/image/equipmentImages/icon_airCheack.png'),
                        equipmentName: '空气检测仪',
                        index: 1
                    }, {
                        imgName: require('../../../../assets/image/equipmentImages/icon_socket.png'),
                        equipmentName: '智能插座',
                        index: 2
                    }, {
                        imgName: require('../../../../assets/image/equipmentImages/icon_door.png'),
                        equipmentName: '门的状态',
                        index: 3
                    }, {
                        imgName: require('../../../../assets/image/equipmentImages/icon_smokeAlarm.png'),
                        equipmentName: '活体检测',
                        index: 4
                    }, {
                        imgName: require('../../../../assets/image/equipmentImages/icon_temp.png'),
                        equipmentName: '温控器',
                        index: 5
                    },
                    {
                        imgName: require('../../../../assets/image/icon_circle.png'),
                        equipmentName: '窗户1状态',
                        index: 9
                    }, {
                        imgName: require('../../../..//assets/image/icon_circle.png'),
                        equipmentName: '窗户2状态',
                        index: 10
                    }
                ],
                index1: false,
                index2: false,
                index3: false,
                index4: false,
                index5: false,
                index6: false,
                index7: false,
                index8: false,
                index9: false,
                index10: false,
                index11: false,
                index12: false,
                // 温度
                temperature: '',
                // 光照强度
                lightDegree: '',
                // 湿度
                wetDegree: '',
                // 煤气浓度
                coalDegree: '',
                // 门的状态
                doorStatus:'',
                // 窗户1的状态 客厅
                window1Status:'',
                // 窗户2的状态 卧室
                window2Status:'',
                // 活体检测
                liveScan:''
            }
        },
        props: ['popupVisible'],
        mounted() {
            this.getRouteParam();
            this.setTimer();

        },
        components: {
            CommonHeader
        },
        methods: {
            setTimer() {
                this.timer = setInterval( () => {
                    this.requestService("现在多热");
                    this.requestService("现在光照强度");
                    this.requestService("现在湿度");
                    this.requestService("煤气浓度");
                    this.requestService("现在客厅窗户的状态");
                    this.requestService("现在卧室窗户的状态");
                    this.requestService("现在门的状态");
                    this.requestService("客厅有人吗");
                }, 3000)

            },
            getRouteParam() {
                this.headerTitle = this.$route.query.roomName + "的设备";
            },
            modalControl(equipmentName, index) {
                this.equipmentName = equipmentName;
                this.equipIndex = index;
                this.addPopupVisible = true
            },
            /**
             * 1.现在多热（温度）
             * 2.现在光照强度/湿度
             * 3.现在烟雾浓度
             * 4.煤气浓度
             * 5.打开过道灯
             * 6.打开客厅灯
             * 7.打开卧室灯
             * 8.打开厨房灯
             * 9.打开全部灯
             * @param direction 以上指令
             */
            requestService(direction) {
                let that = this;
                // console.log(direction);
                this.$http.get(this.postUrl, {
                    params: {
                        "a": direction
                    }
                }).then(function (response) {
                    if (direction === "现在多热") {
                        that.temperature = response.data;
                    } else if (direction === "现在光照强度") {
                        that.lightDegree = response.data;
                    } else if (direction === "现在湿度") {
                        that.wetDegree = response.data;
                    } else if (direction === "煤气浓度") {
                        that.coalDegree = response.data;
                    } else if(direction === "现在客厅窗户的状态"){
                        if (response.data === "现在客厅的窗户是开着的"){
                            that.window1Status = "开";
                        } else{
                            that.window1Status = "关";
                        }
                    }else if (direction === "现在卧室窗户的状态") {
                        if (response.data === "现在卧室窗户是开着的"){
                            that.window2Status = "开";
                        } else{
                            that.window2Status = "关";
                        }
                    }else if (direction === "现在门的状态") {
                        if (response.data === "现在门是开着的"){
                            that.doorStatus = "开";
                        } else{
                            that.doorStatus = "关";
                        }
                    }else if(direction === "客厅有人吗"){
                        if (response.data === "当前客厅没人")
                            that.liveScan ="有人";
                         else
                            that.liveScan = "没人";
                    } else{
                        that.resData = response.data;
                    }
                });
            }

        },
        watch: {
            equipmentStatus: function () {
                let that = this;                // console.log(this.equipIndex);
                switch (this.equipIndex) {
                    case 1: {
                        that.index1 = true;
                        break;
                    }
                    case 2: {
                        that.index2 = true;
                        break;
                    }
                    case 3: {
                        that.index3 = true;

                        break;
                    }
                    case 4: {
                        that.index4 = true;
                        break;
                    }
                    case 5: {
                        that.index5 = true;

                        break;
                    }
                    // 卧室灯
                    case 6: {
                        that.index6 = true;
                        that.requestService("打开主卧灯");
                        console.log(this.equipmentStatus);
                        if (that.equipmentStatus === false) {
                            this.requestService("关闭主卧灯");
                            console.log(this.equipmentStatus);
                        }
                        break;
                    }
                    // 客厅灯
                    case 7: {
                        that.index7 = true;
                        that.requestService("打开客厅灯");
                        console.log(this.equipmentStatus);
                        if (that.equipmentStatus === false) {
                            this.requestService("关闭客厅灯");
                            console.log(this.equipmentStatus);
                        }
                        break;
                    }
                    // 过道灯
                    case 8: {
                        that.index8 = true;
                        that.requestService("打开次卧灯");
                        if (that.equipmentStatus === false) {
                            this.requestService("关闭次卧灯");
                        }
                        break;
                    }
                    case 9: {
                        that.index9 = true;

                        break;
                    }
                    case 10: {
                        that.index10 = true;

                        break;
                    }
                    // 厨房灯
                    case 11: {
                        that.index11 = true;
                        that.requestService("打开厨房灯");
                        if (that.equipmentStatus === false) {
                            that.requestService("关闭厨房灯");
                        }
                        break;
                    }
                    // 全部灯
                    case 12: {
                        that.index12 = true;
                        that.requestService("打开全部灯");
                        if (that.equipmentStatus === false) {
                            that.requestService("关闭全部灯");
                        }
                        break;
                    }
                }
            }
        }

    }
</script>

<style scoped>
    @import url("../../../../assets/css/equip_style.css");

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

    .imgcard {
        margin: 2.3rem auto;
        background-color: #FF8C00;
        width: 80%;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
        text-align: center;
    }

    .container {
        padding: 10px;
    }
</style>
