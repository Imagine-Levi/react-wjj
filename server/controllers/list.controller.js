const List = require('../models/list.model');

const getList = (params, callback) => {
  List.find(params, (err, data) => {
    if (err) {
      callback(err);
    } else {
      callback(data);
    }
  });
};

module.exports = {
  getList
};
