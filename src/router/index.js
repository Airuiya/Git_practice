// 该文件专门用于创建整个应用的路由器
import VueRouter from 'vue-router'
// 引入组件
import About from '../pages/about/about.vue';
import Lottery from "../pages/lottery/lottery.vue";
import Message from "../pages/aboutMessage.vue"
import News from "../pages/aboutNews.vue"
import Detail from "../pages/messageDetail.vue"

// 创建并暴露一个路由器
export default new VueRouter({
    routes: [
        {
            path: '/about',
            component: About,
            children: [
                {
                    path: 'message',
                    component: Message,
                    children: [
                        {
                            path: 'detail',
                            component: Detail
                        }
                    ]
                },
                {
                    path: 'news',
                    component: News
                },
            ]
        },
        {
            path: '/lottery',
            component: Lottery
        },
    ]
})