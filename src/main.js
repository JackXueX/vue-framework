import Vue from 'vue'
import './cube-ui'
import App from './App.vue'
import axios from 'axios'// 导入axios
import VueAxios from 'vue-axios'
import router from '@/router/index'// 导入路由模块
import VueAwesomeSwiper from 'vue-awesome-swiper'// 引入swiper组件
import 'swiper/dist/css/swiper.css'
import * as filters from '@/filters'

Vue.config.productionTip = false;
Vue.use(VueAxios, axios);

Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})
Vue.use(VueAwesomeSwiper);

new Vue({
  render: h => h(App),
  router
}).$mount('#app');
