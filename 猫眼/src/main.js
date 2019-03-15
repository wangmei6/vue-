// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Axios from 'axios'
import LazyLoad from 'vue-lazyload'

Vue.config.productionTip = false
Vue.prototype.$axios = Axios 

Axios.interceptors.response.use(function (response) { 
  // Do something with response data
  return response;
}, function (error) {
  // Do something with response error
  return Promise.reject(error);
});



// Vue.use(LazyLoad,{
//   loading: require('./assets/2.png'),//在js 中通过require 加载图片
//   attempt: 1
// })

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
