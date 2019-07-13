<template>
  <div class="container">
    <Header :header-title="title"/>
    <div style="height: 4rem"></div>
    <!---------------------------->
    <div class="addEquipment" v-if="handleName ==='add'">
      <div class="aui-grids-box" v-cloak>
        <div class="aui-grids-item" v-for="(item,index) in gridsData" :key="index">
          <div class="aui-grids-item-hd" @click="addPopupVisible = true">
            <img :src="item.imgName" alt="Kepai">
          </div>
          <br/>
          <div class="aui-grids-item-bd">
            {{item.equipmentName}}
          </div>
        </div>
      </div>
    </div>
    <!---------------------------->
    <div v-else-if="handleName ==='del'">
      <div class="aui-grids-box" v-cloak>
        <div v-if="Object.keys(roomEquipments).length === 1 " class="noData-style">
          您还没有添加设备哦 :)
        </div>

        <div v-else class="aui-grids-item" v-for="(item,index) in roomEquipments" :key="index">
          <div class="aui-grids-item-hd">
            <img :src="item.imgName" alt="Kepai">
          </div>
          <br/>
          <div class="aui-grids-item-bd">
            {{item.equipmentName}}
          </div>
        </div>
      </div>
    </div>
    <!---------------------------->
    <div v-else="handleName ==='edit'">
      <div class="aui-grids-box" v-cloak>
        <div v-if="Object.keys(roomEquipments).length === 1 " class="noData-style">
          您还没有添加设备哦 :)
        </div>

        <div v-else class="aui-grids-item" v-for="(item,index) in roomEquipments" :key="index">
          <div class="aui-grids-item-hd">
            <img :src="item.imgName" alt="Kepai">
          </div>

          <br/>
          <div class="aui-grids-item-bd">
            {{item.equipmentName}}
          </div>
        </div>
      </div>
    </div>
    <!---------------------------->
    <!--<connect-wifi :popupVisible="addPopupVisible"></connect-wifi>-->
    <mt-popup style="background-color: white" v-model="addPopupVisible" position="right" class="mint-popup-3" :modal="false">
      <mt-button @click.native="addPopupVisible = false" size="large" type="primary">确认</mt-button>
    </mt-popup>
  </div>
</template>

<script>
  import Header from '../../../../components/common/Header';
  import {MessageBox} from 'mint-ui';

  export default {
    name: "EquipmentOperation",
    components: {
      Header
    },
    data() {
      return {
        handleId: -1,
        title: '',
        handleName: '',
        // 模态层
        addPopupVisible: false,
        gridsData: [
          {
            imgName: require('../../../../assets/image/equipmentImages/icon_airCheack.png'),
            equipmentName: '空气检测仪',
          }, {
            imgName: require('../../../../assets/image/equipmentImages/icon_waterClean.png'),
            equipmentName: '净水器',
          }, {
            imgName: require('../../../../assets/image/equipmentImages/icon_security.png'),
            equipmentName: '安防',
          }, {
            imgName: require('../../../../assets/image/equipmentImages/icon_socket.png'),
            equipmentName: '智能插座',
          }, {
            imgName: require('../../../../assets/image/equipmentImages/icon_gateway.png'),
            equipmentName: '智能网关',
          }, {
            imgName: require('../../../../assets/image/equipmentImages/icon_dry.png'),
            equipmentName: '除湿器',
          }, {
            imgName: require('../../../../assets/image/equipmentImages/icon_temp.png'),
            equipmentName: '温控器',
          }, {
            imgName: require('../../../../assets/image/equipmentImages/icon_heatPump.png'),
            equipmentName: '热泵',
          }, {
            imgName: require('../../../../assets/image/equipmentImages/icon_pressureCooker.png'),
            equipmentName: '电压力锅',
          }, {
            imgName: require('../../../../assets/image/equipmentImages/icon_doorLock.png'),
            equipmentName: '智能门锁',
          }, {
            imgName: require('../../../../assets/image/equipmentImages/icon_switch.png'),
            equipmentName: '面板开关',
          }, {
            imgName: require('../../../../assets/image/equipmentImages/icon_mirror.png'),
            equipmentName: '智能魔镜',
          },
          {
            imgName: require('../../../../assets/image/equipmentImages/icon_colorLight.png'),
            equipmentName: '彩灯',
          }, {
            imgName: require('../../../../assets/image/equipmentImages/icon_light.png'),
            equipmentName: '色温灯',
          }, {
            imgName: require('../../../../assets/image/equipmentImages/icon_lights.png'),
            equipmentName: '灯带',
          }, {
            imgName: require('../../../../assets/image/equipmentImages/icon_smokeAlarm.png'),
            equipmentName: '烟雾报警器',
          }
        ],
        roomEquipments: [{}]
      }
    },
    mounted() {
      this.getRouteParam();
      this.test();

    },
    methods: {
      getRouteParam() {
        this.handleId = this.$route.query.id;
        this.handleName = this.$route.query.name;
        /*
        动态更新 title 的值
        */
        let name = this.handleName;
        if (name === 'add') {
          this.title = '选择设备类型';
        } else if (name === 'del') {
          this.title = '删除设备'
        } else {
          this.title = '更改设备信息'
        }
      },
      /*
      给房间添加设备
       */
      addEquipment(id) {
        // console.log(id);
        MessageBox({
          title: '提示',
          message: '确定执行此操作?',
          showCancelButton: true
        });
        this.addPopupVisible = false
      },
      /*
      删除房间的设备
       */
      delEqipment(id) {
        MessageBox.confirm('确定执行此操作?').then(action => {
          MessageBox('提示', '操作成功');
        });
        this.$router.go(-1)
      },
      /*
      更改房间的设备信息
       */
      editEquiment(id) {
        alert('该房间还没有添加设备哦~');
        this.$router.go(-1);
      },
      test(){
        /*
        this.roomEquipments).length === 1 时该对象为空
        当对象为 {} 时也会存在一个 ["0"] 的值
         */
      }
    }
  }
</script>

<style scoped>
  @import url("../../../../assets/css/equip_style.css");

  [v-cloak] {
    display: none;
  }

  .container {
    background-color: #FFFFF0;
  }

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
  .noData-style{
    text-align: center;
    font-size: 24px;
    background-color: #FFFFF0;
  }
</style>
