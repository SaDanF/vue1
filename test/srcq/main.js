import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

import VueRouter from "vue-router";
import router from "./router/index"
Vue.use(VueRouter)

new Vue({
  render: h => h(App),
  beforeCreate(){
    Vue.prototype.$bus = this
  },
  router:router,
}).$mount('#app')
