import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

// 导入vue-router
import VueRouter from 'vue-router'
// 导入router的配置页
import router from './router/index.js'

// 使用vue-router插件
Vue.use(VueRouter)
new Vue({
  render: h => h(App),
  // 使用了router之后就相当于与创建了一个配置页直接使用
  router: router
}).$mount('#app')
