<template>
    <div class="box-content">
        <HomeHeader/>
        <router-view></router-view>
        <ConnectCenter/>
        <AddEquipment/>
        <Scan/>
    </div>
</template>

<script>
    import HomeHeader from "./Header"
    import ConnectCenter from "./ConnectCenter"
    import AddEquipment from "./AddEquipment"
    import Scan from "./Scan"

    export default {
        name: 'Home',
        components: {
            HomeHeader,
            ConnectCenter,
            AddEquipment,
            Scan
        }
    }
</script>

<style scoped>
    .box-content {
        width: 100%;
    }
</style>
