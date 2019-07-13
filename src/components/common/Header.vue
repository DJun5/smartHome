<template>
  <div>
    <mt-header class="header-style" :title="headerTitle" fixed>
      <mt-button slot="left" icon="back" @click="$router.go(-1)"></mt-button>
    </mt-header>
  </div>
</template>

<script>
  export default {
    props: {
      headerTitle: {
        type: String,
        default: {}
      }
    },
    data() {
      return {}
    },
    methods: {}
  }
</script>

<style scoped>
  .header-style{
    background-color: white;
    color: black;
  }
</style>
