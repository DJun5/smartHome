# smartHome APP
Vue.js 2.x + Axios + Mint-UI + JQuery + Vue-awesome-mui

## app效果图
  下图不是app卡，这个gif有5.3M大小，10帧的卡很正常。
![blockchain](https://github.com/DJun5/smartHome/blob/master/SmartHome.gif)

## 关于此APP一些说明
  1、这个app没有使用数据库，仅为了控制设备。
  2、在控制硬件的页面，用了后台，后台是用Python写的Restful风格的api，调用硬件的方式各不相同，所以后台代码拿出来给你也没什么用就不贴出来了。
  3、缓存用的Vuex（如保存登录状态）。
  
## 此APP的目录结构
  标准的Vue.js的项目结构。

## APP某些功能实现细节
### tabbar
  tabbar就是上图中的下面的三个按钮。对于这个功能我在做的时候踩了坑，希望你不要再踩了。在src下面的app.vue里面有这么一行代码：
`<BottomNav v-show="$route.meta.showBottomNav"/>`，如在router添加页面的时候需要写上如下的一种格式：
```
   {
      path: '/room',
        name:'room',
      component: Room,
      meta:{
        index:2,
        showBottomNav:true
      }
```
1、这里的index表示路由的深度，用于确认页面是前进还是后台，然后播放指定的动画效果；
2、这里的showBottomNav表示在此页面上是否需要显示tabbar；
  所以，这个tabbar的显示是通过在router设置是否显示的。
  
### 登录功能
  这里的登录功能，采用手机号码和验证码登录的方式，这里是真的能够发送验证码的，但是只有5次验证码的机会，我调试的时候用完了。。。所以要付费，才能接着使用。
