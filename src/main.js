// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import 'lib-flexible/flexible'
import store from './store/index'
import FastClick from 'fastclick'
import './assets/css/public.css'/*引入公共样式*/


//import './assets/css/main.css'/*引入公共样式*/


import './assets/css/food.css'/*引入公共样式 food 点餐*/

import axios from './config/api/axios'   /*数据请求*/
axios.defaults.withCredentials=true;
Vue.prototype.$axios = axios;

import {api} from './config/env'; /*请求url链接*/
Vue.prototype.$api = api;


import Loading from './components/loading.vue'
Vue.component('Loading',Loading)  /*自定义loading 组件*/

Vue.config.productionTip = false;

import betterScroll from './components/betterScroll.vue'
Vue.component('betterScroll',betterScroll)  /*自定义loading 组件*/



import { ToastPlugin} from 'vux'  /**vux的弹框组件*/ //ConfirmPlugin,AlertPlugin
 Vue.use(ToastPlugin)
// Vue.use(ConfirmPlugin)
//Vue.use(AlertPlugin)

//公用的弹窗(全局变量)
Vue.prototype.showToast = function(text,type,width="8em",postion='bottom'){
  this.$vux.toast.show({
    text: text,
    type: type,
    width: width,
    position: postion
  })
}


if ('addEventListener' in document) {
  document.addEventListener('DOMContentLoaded', function() {
    FastClick.attach(document.body);
  }, false);
}





new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})


