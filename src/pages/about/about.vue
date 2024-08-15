<template>
    <div class="about">
        我是about
        <!-- <p>==this.$route===</p>
        <div>{{ route }}</div>
        <p>==this.$router===</p>
        <div>{{ router }}</div> -->
    </div>
</template>

<script>
// export default require("./about"); 
import about from '../about/about'
export default about;
</script>

<style lang="less" scoped>
@import "about.less";
</style>