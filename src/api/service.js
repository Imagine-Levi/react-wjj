import http from './http.js'; // 导入我们封装好的axios对象
import apis from './apis.js'; // 导入我们封装好的apis对象
import qs from 'qs';

// 从外部接受参数，没有参数默认为空对象
// return对应的get/post方法，第一个填路径，第二个给参数对象
const getExampleData = (params = {}) => {
  return http.get(apis.getExampleData, params);
}

const getList = (params = {}) => {
  return http.post(apis.getList, qs.stringify(params));
}

const queryList = (params = {}) => {
  return http.get(apis.queryList, params);
}

export default {
  getExampleData,
  getList,
  queryList
}