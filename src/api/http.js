import axios from 'axios';
axios.defaults.baseURL = 'http://127.0.0.1:3000';
axios.defaults.withCredentials = true;
axios.defaults.mode = 'no-cors';
axios.defaults.timeout = 100000;
// axios拦截器
// axios.interceptors.request.use(config => {
//   config.setHeaders([
//     // 在这里设置请求头与携带token信息
//   ])
//   return config;
// });

axios.interceptors.response.use(response => {
  response.setHeader("Access-Control-Allow-Origin", "*");// 跨域问题
  // 在这里你可以判断后台返回数据携带的请求码
  if (response.data.retcode === 200 || response.data.retcode === '200') {
    return response.data.data || response.data;
  } else {
    // 非200请求报错
    throw Error(response.data.msg || '服务异常');
  }
});

export default axios;