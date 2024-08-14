import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
// 引入Vue-Router
import VueRouter from 'vue-router'
// 引入路由器
import router from './router';

Vue.config.productionTip = false
// 应用插件
Vue.use(ElementUI)
Vue.use(VueRouter)

// 创建vm
new Vue({
  render: h => h(App),
  router: router
}).$mount('#app')
