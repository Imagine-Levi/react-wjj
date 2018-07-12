exports.userById = userById;
exports.createUser = createUser;
exports.getList = getList;

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