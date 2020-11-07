let baseURL;
// 在webpack中可以通过 process.env.NODE_ENV获取在package.json中配置的环境模式
// 其里面的环境模式要按照固定的写法
switch (process.env.NODE_ENV) {
    case 'development':
      baseURL = 'http://dev-mall-pre.springboot.cn/api';
      break;
    case 'test':
      baseURL = 'http://test-mall-pre.springboot.cn/api';
      break;
    case 'prev':
      baseURL = 'http://prev-mall-pre.springboot.cn/api';
      break;
    case 'prod':
      baseURL = 'http://mall-pre.springboot.cn/api';
      break;
    default:
      baseURL = 'http://mall-pre.springboot.cn/api';
      break;
  }
  
export default {
    baseURL
}