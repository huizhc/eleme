import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import routes from './router.config'
import axios from 'axios'
import '../public/stylus/index.styl'



Vue.config.productionTip = false

Vue.use(VueRouter);

Vue.prototype.$http = axios;

let router = new VueRouter({
  // mode: 'history',
  linkActiveClass: 'active',
  routes
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
