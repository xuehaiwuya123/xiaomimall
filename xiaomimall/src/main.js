import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import router from './router'
import App from './App.vue'
// import env from './env'

// VueAxios的作用将axios挂载到vue上,这样不用每个使用的页面单独引入
Vue.use(VueAxios,axios);

// 根据前端跨域的方式进行调整，
// 根据前端的跨域方式做调整 /a/b : /api/a/b => /a/b
// axios.defaults.baseURL = 'https://www.easy-mock.com/mock/5dc7afee2b69d9223b633cbb/mimall';
// 根据环境变量获取不同的请求地址
// axios.defaults.baseURL = env.baseURL;

// 本项目中使用代理
// 接口的代理，当接替到下面设置的值后，可以进行可以的代理
axios.defaults.baseURL = '/api';
// 设置请求超时的时间
axios.defaults.timeout = 10000;
// 对返回的数据用拦截器进行拦截
axios.interceptors.response.use(function(response){
  const res = response.data
  if (res.status === 0) {
    return res.data;
  } else if (res.status === 10) {
    window.location.href = '/#/login';
  } else {
    alert(res.msg)
  }
}, (error) => {
  alert(error)
})

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
