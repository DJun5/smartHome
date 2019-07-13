<!--<template>-->
    <!--<div>-->
        <!--<div class="crumbs">-->
            <!--<el-breadcrumb separator="/">-->
                <!--<el-breadcrumb-item><i class="el-icon-date"></i> 智能识别</el-breadcrumb-item>-->
                <!--<el-breadcrumb-item>相机识别</el-breadcrumb-item>-->
            <!--</el-breadcrumb>-->
        <!--</div>-->
        <!--<div class="container">-->
            <!--<div class="container-left">-->
                <!--<video ref="video" width="600" height="600" autoplay></video>-->
                <!--<button ref="capture" @click="faceDetect">智能辨别</button>-->
                <!--<canvas ref="canvas" id="convas" width="320" height="320" style="visibility:hidden">-->
                <!--</canvas>-->
            <!--</div>-->
            <!--<div class="container-right">-->
                <!--<el-form :model="resultForm" status-icon  ref="resultForm" label-width="100px" class="demo-ruleForm">-->
                    <!--<el-form-item label="人物类型" prop="faceType">-->
                        <!--<el-input type="text" v-if="resultForm.faceType=='human'" value="真实人物"></el-input>-->
                        <!--<el-input type="text" v-if="resultForm.faceType=='cartoon'" value="卡通人物"></el-input>-->
                    <!--</el-form-item>-->
                    <!--<el-form-item label="年龄" prop="age">-->
                        <!--<el-input type="text" v-if="resultForm.age!=''" v-model="resultForm.age"></el-input>-->
                    <!--</el-form-item>-->
                    <!--<el-form-item label="性别" prop="gender">-->
                        <!--<el-input type="text" v-if="resultForm.gender=='male'" value="男"></el-input>-->
                        <!--<el-input type="text" v-if="resultForm.gender=='female'" value="女"></el-input>-->
                    <!--</el-form-item>-->
                    <!--<el-form-item label="人种" prop="race">-->
                        <!--<el-input type="text" v-if="resultForm.race=='yellow'" value="黄种人"></el-input>-->
                        <!--<el-input type="text" v-if="resultForm.race=='white'" value="白种人"></el-input>-->
                        <!--<el-input type="text" v-if="resultForm.race=='black'" value="黑种人"></el-input>-->
                        <!--<el-input type="text" v-if="resultForm.race=='arabs'" value="阿拉伯人"></el-input>-->
                    <!--</el-form-item>-->
                    <!--<el-form-item label="戴眼镜" prop="glasses">-->
                        <!--<el-input type="text" v-if="resultForm.glasses=='none'" value="无眼镜"></el-input>-->
                        <!--<el-input type="text" v-if="resultForm.glasses=='common'" value="普通眼镜"></el-input>-->
                        <!--<el-input type="text" v-if="resultForm.glasses=='sun'" value="墨镜"></el-input>-->
                    <!--</el-form-item>-->
                    <!--<el-form-item label="表情" prop="expression">-->
                        <!--<el-input type="text" v-if="resultForm.expression=='none'" value="不笑"></el-input>-->
                        <!--<el-input type="text" v-if="resultForm.expression=='smile'" value="微笑"></el-input>-->
                        <!--<el-input type="text" v-if="resultForm.expression=='laugh'" value="大笑"></el-input>-->
                    <!--</el-form-item>-->
                    <!--<el-form-item label="颜值" prop="beauty">-->
                        <!--<el-input type="text" v-if="resultForm.beauty<=20&&resultForm.beauty>0" value="奇丑无比"></el-input>-->
                        <!--<el-input type="text" v-if="resultForm.beauty>20&&resultForm.beauty<=40" value="丑陋"></el-input>-->
                        <!--<el-input type="text" v-if="resultForm.beauty>40&&resultForm.beauty<=70" value="俊美"></el-input>-->
                        <!--<el-input type="text" v-if="resultForm.beauty>70" value="绝美无比"></el-input>-->
                    <!--</el-form-item>-->
                <!--</el-form>-->
            <!--</div>-->
        <!--</div>-->
    <!--</div>-->
<!--</template>-->
<!--<script>-->
    <!--import axios from 'axios'-->
    <!--export default{-->
        <!--data(){-->
            <!--return{-->
                <!--resultForm:{-->
                    <!--//人物类型-->
                    <!--faceType:'',-->
                    <!--//年龄-->
                    <!--age:'',-->
                    <!--//性别-->
                    <!--gender:'',-->
                    <!--//人种-->
                    <!--race:'',-->
                    <!--//戴眼镜-->
                    <!--glasses:'',-->
                    <!--//表情-->
                    <!--expression:'',-->
                    <!--//颜值-->
                    <!--beauty:''-->
                <!--}-->
            <!--}-->
        <!--},mounted() {-->
            <!--this.useCamera();-->
        <!--},-->
        <!--methods:{-->
            <!--//访问用户媒体设备的兼容方法-->
            <!--getUserMedia(constraints, success, error) {-->
                <!--if (navigator.mediaDevices.getUserMedia) {-->
                    <!--//最新的标准API-->
                    <!--navigator.mediaDevices.getUserMedia(constraints).then(success).catch(error);-->
                <!--} else if (navigator.webkitGetUserMedia) {-->
                    <!--//webkit核心浏览器-->
                    <!--navigator.webkitGetUserMedia(constraints,success, error)-->
                <!--} else if (navigator.mozGetUserMedia) {-->
                    <!--//firfox浏览器-->
                    <!--navigator.mozGetUserMedia(constraints, success, error);-->
                <!--} else if (navigator.getUserMedia) {-->
                    <!--//旧版API-->
                    <!--navigator.getUserMedia(constraints, success, error);-->
                <!--}-->
            <!--},-->
            <!--//摄像头访问成功-->
            <!--success(stream) {-->
                <!--//兼容webkit核心浏览器-->
                <!--let CompatibleURL = window.URL || window.webkitURL;-->
                <!--//将视频流设置为video元素的源-->
                <!--console.log(stream);-->
                <!--//video.src = CompatibleURL.createObjectURL(stream);-->
                <!--let video = this.$refs.video;-->
                <!--video.srcObject = stream;-->
                <!--video.play();-->
            <!--},-->
            <!--//摄像头访问失败-->
            <!--error(error) {-->
                <!--console.log(`访问用户媒体设备失败${error.name}, ${error.message}`);-->
            <!--},-->
            <!--//调用摄像头进行访问-->
            <!--useCamera(){-->
                <!--let video = this.$refs.video;-->
                <!--if (navigator.mediaDevices.getUserMedia || navigator.getUserMedia || navigator.webkitGetUserMedia-->
                    <!--|| navigator.mozGetUserMedia) {-->
                    <!--//调用用户媒体设备, 访问摄像头-->
                    <!--this.getUserMedia({video : {width: 600, height: 600}}, this.success, this.error);-->
                <!--} else {-->
                    <!--alert('不支持访问用户媒体');-->
                <!--}-->
            <!--},-->
            <!--//获取摄像头图片提交后台验证-->
            <!--faceDetect(){-->
                <!--let canvas = this.$refs.canvas;-->
                <!--let context = canvas.getContext('2d');-->
                <!--let video = this.$refs.video;-->
                <!--context.drawImage(video, 0, 0, 480, 320);-->
                <!--let base64Data = convas.toDataURL('image/jpeg');-->
                <!--let blob = this.getDataURItoBlob(base64Data,'abcd.jpg');-->
                <!--let params = new FormData();-->
                <!--params.append('file',blob);-->
                <!--axios.post('http://localhost:8080/recognition/faceDetect',params,-->
                    <!--{-->
                        <!--headers:{-->
                            <!--'Content-Type':'multipart/form-data'-->
                        <!--}-->
                    <!--}-->
                <!--).then((response)=>{-->
                    <!--console.log(response);-->
                    <!--if(response.data.error_code===0){-->
                        <!--let faceDetect = response.data.result.face_list;-->
                        <!--if(faceDetect!=null){-->
                            <!--for(let i =0;i<faceDetect.length;i++){-->
                                <!--this.resultForm.faceType = faceDetect[i].face_type.type;-->
                                <!--this.resultForm.age = faceDetect[i].age;-->
                                <!--this.resultForm.gender = faceDetect[i].gender.type;-->
                                <!--this.resultForm.race = faceDetect[i].race.type;-->
                                <!--this.resultForm.glasses = faceDetect[i].glasses.type;-->
                                <!--this.resultForm.expression = faceDetect[i].expression.type;-->
                                <!--this.resultForm.beauty = faceDetect[i].beauty;-->
                            <!--}-->
                        <!--}-->
                    <!--}else{-->
                        <!--this.$message("图片人物形象不明显,无法分辨");-->
                    <!--}-->
                <!--}).catch((response)=>{-->
                    <!--this.$message("图片人物形象不明显,无法分辨");-->
                <!--});-->
            <!--},-->
            <!--//把canvas标签获取的base64对象转换成bolb对象 也就是file对象-->
            <!--getDataURItoBlob (base64Data,fileName) {-->
                <!--let arr = base64Data.split(','), mime = arr[0].match(/:(.*?);/)[1],-->
                    <!--bstr = atob(arr[1]), n = bstr.length, u8arr = new Uint8Array(n);-->
                <!--while(n&#45;&#45;){-->
                    <!--u8arr[n] = bstr.charCodeAt(n);-->
                <!--}-->
                <!--return new File([u8arr], fileName, {type:mime});-->
            <!--}-->
        <!--}-->
    <!--}-->
<!--</script>-->
