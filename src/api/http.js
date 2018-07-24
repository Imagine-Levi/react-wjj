import axios from 'axios';
axios.defaults.baseURL = 'http://127.0.0.1:8090';
axios.defaults.withCredentials = true;
axios.defaults.mode = 'no-cors';
axios.defaults.timeout = 6000;
axios.defaults.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';
// axios拦截器
axios.interceptors.request.use(config => {
  return config;
});

axios.interceptors.response.use(response => {
  // 在这里你可以判断后台返回数据携带的请求码
  if (response.status === 200 || response.status === '200') {
    return response.data;
  } else {
    // 非200请求报错
    throw Error(response.msg || '服务异常');
  }
});

export default axios;