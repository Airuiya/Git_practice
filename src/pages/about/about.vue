<template>
    <div class="about">
        <P>我是about</P>

        <div>
            <!-- 使用路由实现页面不同内容的加载 -->
            <router-link to="/about/message" active-class="active" style="margin-right: 30px;">Message</router-link>
            <router-link to="/about/news" active-class="active">News</router-link>
        </div>

        <p>以下是内容</p>
        <!-- 指定组件的呈现位置 -->
        <div class="main">
            <router-view></router-view>
        </div>

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