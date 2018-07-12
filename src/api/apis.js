/*集中管理路由，所有的接口地址：
1.整个应用用到了哪些接口一目了然
2.接口地址可能变化，方便管理*/
const prefix = 'http://127.0.0.1:3000'; // api地址前缀

export default {
  getExampleData: prefix + '/api/user',
  getList: prefix + '/api/getList'
}