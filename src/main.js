import Vue from 'vue'
import App from './App.vue'
import router from './routers'
import store from './stores'
//引入axios
import axios from 'axios'
Vue.prototype.axios=axios
Vue.filter('setWH',(url,urg)=>{
  return url.replace(/w\.h/,urg)
})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
