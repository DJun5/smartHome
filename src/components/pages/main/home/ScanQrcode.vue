<template>
   <div>
       <div id="code">
           <div style="width:14rem;height:14rem; background-color: #fff; margin: 15% auto 5%; text-align: center"></div>
           <p class="tip" style="text-align: center">...载入中...</p>
       </div>
       <p>将二维码放入框内，即可自动扫描</p>
       <div class="sweep" @click="sweep">开始扫码</div>
   </div>
</template>

<script>
    export default {
        name: "ScanQrcode",
        methods:{
        },
        mounted () {
            const self = this;
            if(window.plus) {
                self.plusReady()
            } else {
                document.addEventListener('plusready', self.plusReady, false);
            }

            document.addEventListener('DOMContentLoaded', function() {
                alert('DOMLoaded');
                self.domready = true;
                self.plusReady()
            }, false)
        }
    }
</script>

<style scoped>

</style>
