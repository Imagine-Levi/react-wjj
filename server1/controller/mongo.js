let MongoClient = require('mongodb').MongoClient;
let DB_CONN_STR = "mongodb://localhost:27017/wjj";

let queryList = function(db, callback) {
  //连接到表
  let collection = db.collection('list');
  //查询数据
  let whereStr = {};
  collection.find(whereStr).toArray(function(err, result) {
    if (err) {
      console.log('Error:' + err);
      return;
    }
    callback();
    return result;
  });
}

MongoClient.connect(DB_CONN_STR, function(err, db) {
  if (err) {
    console.log(err);
    return;
  }
  console.log("连接成功！");

  queryList(db, function() {
    db.close();
  });

  //2、查询数据
  // queryList(db, function(result) {
  //   data = result;
  //   console.log(data);
  //   db.close();
  // });
});

module.exports = {
  queryList
}



