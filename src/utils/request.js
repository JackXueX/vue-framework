import axios from 'axios'; // 引入axios
import router from '../router';
import Vue from 'vue'
// import store from '../store';
import qs from 'querystring'
// import {Toast} from 'cube-ui'; // vant的toast提示框组件，大家可根据自己的ui组件更改。

let that = new Vue();

let Toast = that.$createToast({
  txt: ''
});
/**
 * 提示函数
 * 禁止点击蒙层、显示一秒后关闭
 */
const tip = msg => {
  that.$createToast({
    txt: msg,
    time: 1000
  }).show();
};


/**
 * 跳转登录页
 * 携带当前页面路由，以期在登录页面完成登录后返回当前页面
 */
const toLogin = () => {
  router.push({
    path: '/login',
    query: {
      redirect: router.currentRoute.fullPath
    }
  });
};

/**
 * 请求失败后的错误统一处理
 * @param {Number} status 请求失败的状态码
 */
const errorHandle = (status, other) => {
  // 状态码判断
  switch (status) {
    case 404:
      tip('请求的资源不存在');
      break;
    default:
      console.log();
  }
}

// 创建axios实例
var instance = axios.create({
  timeout: 1000 * 120
});
// 设置post请求头
instance.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
// instance.defaults.headers.post['Content-Type'] = 'application/jaon';
/**
 * 请求拦截器
 * 每次请求前，如果存在token则在请求头中携带token
 */
instance.interceptors.request.use(
  config => {
    Toast.show();
    if (localStorage.getItem('token')) {
      config.headers.Authorization = localStorage.getItem('token');
    }
    return config;
  },
  error => {
    Toast.hide();
    return Promise.error(error)
  })

// 响应拦截器
instance.interceptors.response.use(
  res => {
    Toast.hide();
    //对响应数据做些事
    if (res.data && res.data.code === 2001) {
      if(router.currentRoute.fullPath && (router.currentRoute.fullPath.indexOf("/login") === -1)){
        router.push({
          path: "/login"
        });
      }
      return Promise.reject(res.data.msg);
    }
    
    return res;
  },
  // 请求失败
  error => {
    //用户登录的时候会拿到一个基础信息, 比如用户名, token, 过期时间戳
    //直接丢localStorage或者sessionStorage
    if (!window.localStorage.getItem("token")) {
        // 若是接口访问的时候没有发现有鉴权的基础信息,直接返回登录页
        router.push({
          path: "/login"
        });
    } else {
      // 下面是接口回调的satus ,因为我做了一些错误页面,所以都会指向对应的报错页面
      if (error.response.status === 403) {
        router.push({
          path: "/error/403"
        });
      }
      if (error.response.status === 500) {
        router.push({
          path: "/error/500"
        });
      }
      if (error.response.status === 502) {
        router.push({
          path: "/error/502"
        });
      }
      if (error.response.status === 404) {
        router.push({
          path: "/error/404"
        });
      }
    }
    console.log(error);
    // 返回 response 里的错误信息
    let errorInfo = error.data.error ? error.data.error.message : error.data;
    return Promise.reject(errorInfo);
  });

export default instance;
