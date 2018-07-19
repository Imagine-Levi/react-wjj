const List = require('../models/list.model');

// const getList = (req, res) => {
//   List.find({}).exec((err, list) => {
//     if (err) {
//       return res.json({ status: 400, message: 'Invalid Request!' });
//     } else {
//       return res.json({ status: 200, message: 'Feched successfuly.', list: list});
//     }
//   });
// };

const getList = () => {
  List.find({}, (err, res) => {
    if (err) {
      console.log("Error:" + err);
    } else {
      console.log("Res:" + res);
    }
  });
};

module.exports = {
  getList
};