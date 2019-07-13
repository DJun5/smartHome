<template>
    <div class="txt-container">
        <mt-header class="header-style" fixed>
            <mt-button slot="left">房间</mt-button>
            <mt-button slot="right" id="settings" >
                <img src="../../../../assets/image/icon_plus.png" height="30" width="30"/>&nbsp;&nbsp;
            </mt-button>
        </mt-header>
        <!-- 右上菜单 -->
        <div id="options">
            <ul>
                <li>
                    <mt-cell-swipe>添加房间</mt-cell-swipe>
                </li>
                <li>
                    <mt-cell-swipe>添加设备</mt-cell-swipe>
                </li>
                <li>
                    <mt-cell-swipe style="padding-right:10px ">扫一扫</mt-cell-swipe>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        computed: {

        }
    }
</script>

<style scoped>
    .header-style {
        background-color: white;
        color: black;
        font-family: "Microsoft YaHei", "仿宋", "Segoe UI", "Lucida Grande", Helvetica, Arial, sans-serif, FreeSans, Arimo;
        font-size: 1.7rem;
        z-index: 999 !important;
        height: 3.5rem;
    }

    .txt-container {
        margin-bottom: 3rem;
    }

    /*
  右上角下拉列表样式
   */
    #options {
        display: none;
        z-index: 999;
        position: fixed;
        padding: 10px;
        width: 120px;
        font: 12px/140% Arial, Helvetica, sans-serif;
        background: white;
        top: 3rem;
        right: 0;
    }

    #options ul {
        padding: 0;
        margin: 0;
    }

    li {
        list-style: none;
    }
</style>
