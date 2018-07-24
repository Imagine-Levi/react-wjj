const User = require('../models/user.model');

const login = (params, callback) => {
  User.find(params, (err, data) => {
    if (err) {
      callback(err);
    } else {
      callback(data);
    }
  });
};

module.exports = {
  login
};
