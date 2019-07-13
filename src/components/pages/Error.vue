<template>
  <div class="error-container">
    <mt-header title="错误" class="error-header">
        <mt-button icon="back" slot="left" @click="$router.go(-1)">返回</mt-button>
    </mt-header>
    <h1 style="text-align: center;color: blue;">Wow~<br/> 页面走丢了哦~</h1>
  </div>
</template>

<script>
    export default {name: "404"}
</script>
<style scoped>
  .error-header{
    background-color: white;
    color: black;
  }
</style>
