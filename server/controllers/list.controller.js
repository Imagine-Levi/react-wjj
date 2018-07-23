const List = require('../models/list.model');

class MongoController {

  constructor() {}

  getList(callback) {
    List.find({}, (err, data) => {
      if (err) {
        callback('Invalid Request!');
      } else {
        callback(data);
      }
    });
  };
}

module.exports = MongoController;