<template>
    <div class="imgcard">
        <div class="container">
            <mt-button type="primary" class="btn-Style" @click="startScan">
                <img src="../../../../assets/image/icon_qrcode.png" height="20" width="20" slot="icon">
                &nbsp;扫描二维码
            </mt-button>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Scan",
        data() {
            return {
                codeUrl: ''
            }
        },
        mounted() {
            this.startRecognize();
        },
        methods: {
            startRecognize() {
                let that = this;
                if (!window.plus) return;
                scan = new plus.barcode.Barcode('bcid');
                scan.onmarked = onmarked;

                function onmarked(type, result, file) {
                    switch (type) {
                        case plus.barcode.QR:
                            type = 'QR';
                            break;
                        case plus.barcode.EAN13:
                            type = 'EAN13';
                            break;
                        case plus.barcode.EAN8:
                            type = 'EAN8';
                            break;
                        default:
                            type = '其它' + type;
                            break;
                    }
                    result = result.replace(/\n/g, '');
                    that.codeUrl = result;
                    alert(result);
                    that.closeScan();

                }
            },
            //开始扫描
            startScan() {
                if (!window.plus) return;
                scan.start();
            },
            //关闭扫描
            cancelScan() {
                if (!window.plus) return;
                scan.cancel();
            },
            //关闭条码识别控件
            closeScan() {
                if (!window.plus) return;
                scan.close();
            }
        }
    }
</script>

<style scoped>
    .imgcard {
        text-align: center;
        margin: 3rem auto;
        height: 5rem;
        width: 96%;
        box-shadow: 0 1px 8px 0 rgba(0, 0, 0, 0.2), 0 1px 15px 0 rgba(0, 0, 0, 0.19);
        border-radius: 10px;
    }

    .container {
        padding: 10px;
    }

    .btn-Style {
        font-size: 14px;
        color: darkgray;
        margin: 1rem auto;
        background-color: transparent;
        width: 100%;
        height: 100%;
    }

    footer {
        position: absolute;
        left: 0;
        bottom: 1rem;
        height: 2rem;
        line-height: 2rem;
        z-index: 2;
    }
</style>
