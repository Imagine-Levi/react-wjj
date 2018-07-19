const mongoose = require('mongoose');

const ListSchema = new mongoose.Schema({
  name: String,
  username: String,
  age: String
}, {
  timestamps: true
});
const List = mongoose.model('list', ListSchema);

module.exports = List;