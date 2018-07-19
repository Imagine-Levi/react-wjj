// const MongoClient = require('mongodb').MongoClient;
// const DB_CONN_STR = "mongodb://localhost:27017/wjj";
const data = require('./mongo.js');

function userById(req, res) {
  res.end('welcome to the home.');
}

function createUser(req, res) {
  res.end('waiting for impl.');
}

function getList(req, res) {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify({
    status: 0,
    msg: 'success',
    data: {
      page: 1,
      pageSize: 10,
      list: [{
        key: '1',
        name: 'John Brown',
        age: 32,
        address: 'New York No. 1 Lake Park',
      }, {
        key: '2',
        name: 'Jim Green',
        age: 42,
        address: 'London No. 1 Lake Park',
      }, {
        key: '3',
        name: 'Joe Black',
        age: 32,
        address: 'Sidney No. 1 Lake Park',
      }]
    }
  }));
}

function queryList(req, res) {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');
  console.log(data);
  res.end('123');
}


// MongoClient.connect(DB_CONN_STR, function(err, db) {
//   if (err) {
//     console.log(err);
//     return;
//   }
//   console.log("连接成功！");
//
//   //2、查询数据
//   data.queryList(db, function(result) {
//     console.log(result);
//     db.close();
//   });
//
//
// });

exports.userById = userById;
exports.createUser = createUser;
exports.getList = getList;
exports.queryList = queryList;


