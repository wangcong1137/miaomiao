import Vue from 'vue'
import App from './App.vue'
import router from './routers'
import store from './stores'
//引入axios
import axios from 'axios'
Vue.prototype.axios=axios
//图片全局样式更换地址中的w.h
Vue.filter('setWH',(url,urg)=>{
  return url.replace(/w\.h/,urg)
})
//better-scroll方法全局调用
import Scroller from './components/Scroller'
Vue.component('Scroller',Scroller)
//loading动画全局引入
import Loading from '@/components/Loading'
Vue.component('Loading',Loading)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
