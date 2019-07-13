<template>
  <div class="parent">
    <vue-scroll>
      <div class="child">
      </div>
    </vue-scroll>
  </div>
</template>

<script>
    export default {
        name: "NativeScroll"
    }
</script>

<style scoped>
 .parent {
    width: 100%;
    height: 100px;
  }
  .child {
    width: 200px;
    height: 200px;
  }
</style>
