<template>
    <div class="my-module">
        <!-- <h2>我开发的页面</h2> -->
        <!-- <h4 @click="toLottery">抽奖功能</h4> -->
        <el-container style="height: 100%; border: 1px solid #eee">
            <el-menu default-active="2" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose"
                background-color="#545c64" text-color="#fff" active-text-color="#ffd04b" style="min-width: 200px;;">
                <el-submenu index="1">
                    <template slot="title">
                        <i class="el-icon-location"></i>
                        <span>学习vue-router</span>
                    </template>
                    <el-menu-item index="1-1">
                        <!-- 使用路由实现页面不同内容的加载 -->
                        <router-link to="/about" active-class="active">About</router-link>
                    </el-menu-item>
                    <el-menu-item index="1-2">
                        <!-- 使用路由实现页面不同内容的加载 -->
                        <router-link to="/lottery" active-class="active">Lotery</router-link>
                    </el-menu-item>
                </el-submenu>
                <el-submenu index="2">
                    <template slot="title">
                        <i class="el-icon-menu"></i>
                        <span>我的开发</span>
                    </template>
                    <el-menu-item index="2-1">抽奖功能</el-menu-item>
                    <el-menu-item index="2-2">选项2</el-menu-item>
                </el-submenu>
                <el-menu-item index="3" disabled>
                    <i class="el-icon-document"></i>
                    <span slot="title">导航三</span>
                </el-menu-item>
            </el-menu>
            <!-- <el-aside width="180px" height="100%" style="background-color: #545c64;">
            </el-aside> -->

            <el-container>
                <el-header height="50px" class="my-header">学习快乐</el-header>
                <!-- 中间部分 -->
                <el-main height="400px" class="my-center">
                    <p>此处到底展示什么组件，得看用户点击的是哪个导航项</p>
                    <!-- 指定组件的呈现位置 -->
                    <router-view></router-view>
                </el-main>
                <!-- 底部 -->
                <el-footer class="my-footer">
                    <span><a href="https://router.vuejs.org" target="_blank" rel="noopener">vue-router</a></span>
                    <span><a href="https://vuex.vuejs.org" target="_blank" rel="noopener">vuex</a></span>
                    <span><a href="https://github.com/vuejs/vue-devtools#vue-devtools" target="_blank"
                            rel="noopener">vue-devtools</a>
                    </span>
                    <span><a href="https://vue-loader.vuejs.org" target="_blank" rel="noopener">vue-loader</a></span>
                    <span><a href="https://github.com/vuejs/awesome-vue" target="_blank"
                            rel="noopener">awesome-vue</a></span>
                </el-footer>
            </el-container>
        </el-container>
    </div>
</template>

<script>
export default {
    name: "MyModule",
    data() {
        return {
            url: "",
            activeIndex: 1,
        };
    },
    methods: {
        toLottery() {
            console.log("点击去抽奖页面");
        },
        handleOpen(key, keyPath) {
            console.log(key, keyPath);
        },
        handleClose(key, keyPath) {
            console.log(key, keyPath);
        },
    },
    components: {

    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
a {
    text-decoration: none;
    /* 去除默认的下划线 */
    color: #fff;
    /* 去除默认的颜色和点击后变化的颜色 */
}

.my-module {
    width: 100%;
    height: 100vh;

    .active {
        color: #ffd04b;
    }

    .my-header {
        font-size: 24px;
        line-height: 50px;
        color: #fff;
        background: #545c64;
    }

    .my-center {
        background: #fff;
    }

    .my-footer {
        padding: 0 80px;
        background: #ccc;
        width: 100%;
        height: 60px;
        overflow: hidden;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        align-items: center;
    }

}
</style>