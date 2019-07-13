import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/pages/main/home/Home'
import Room from '../components/pages/main/room/Room'
import NotLogin from '../components/pages/main/user/NotLoginUserPage'
import Error404 from '../components/pages/Error'
import Login from '../components/pages/login/Login'
import User from '../components/pages/main/user/User'
// import Test from '../components/pages/test'
import EquipmentOperation from  '../components/pages/main/room/EquipmentOperation'
import CustomerEquipment from  '../components/pages/main/room/CustomerEquipment'
import SwitchStatus from  '../components/pages/main/room/SwitchStatus'

Vue.use(Router);
export default new Router({
  routes: [
    {
      path: '/home',
      component: Home,
      // 路由层级，数值越大层级越深，以此决定转场动画的前进和后退 大于前进，小于后退
      meta:{
        index:0,
        showBottomNav:true
      }
      // children:[
      //   {
      //     //以下两种路由写法都正确
      //     // path:'/home/handleconnect',
      //     path:'handleconnect',
      //     component: HandleConnect,
      //     meta:{
      //       index:3,
      //       showBottomNav:false
      //     }
      //   }
      // ]

    },
    {
      path: '/NotLogin',
      component: NotLogin,
      meta:{
        index:3,
        showBottomNav:true
      }
    },

    {
      path: '/room',
        name:'room',
      component: Room,
      meta:{
        index:2,
        showBottomNav:true
      },

      // children:[
      //   {
      //     path: '/room/equipmentOperation',
      //     component: EquipmentOperation,
      //     meta:{
      //       index:6,
      //       showBottomNav:false
      //     }
      //   }
      // ],
    },
      {
          path: '/CustomerEquipment',
          component: CustomerEquipment,
          meta:{
              index:10,
              showBottomNav:false
          }
      },{
          path: '/SwitchStatus',
          component: SwitchStatus,
          meta:{
              index:10,
              showBottomNav:false
          }
      },
    {
      path: '/login',
      name:'login',
      component: Login,
      meta:{
        index:3,
        showBottomNav:false
      }
    },
    {
      path: '/user',
      component: NotLogin,
      name:'NotLogin',
      meta:{
        index:4,
        showBottomNav:true
      }
    },
    {
      path: '/user',
      component: User,
      name:'User',
      meta:{
        index:5,
        showBottomNav:true
      }
    },
    // {
    //   path: '/test',
    //   component: Test,
    //   name:'Test',
    //   meta:{
    //     index:-1,
    //     showBottomNav:false
    //   }
    // },
    {
      path: '/equipmentOperation',
      component: EquipmentOperation,
      meta:{
        index:6,
        showBottomNav:false
      }
    },
    {
      path:'/',
      redirect:'/home',
      showBottomNav:true
    },
    {
      path:'*',
      component:Error404,
      meta:{
        index:100,
        showBottomNav:false
      }
    }
  ]
})
