const mongoose = require('mongoose');

const ListSchema = mongoose.Schema({
  name: String,
  game: String,
  date: String
}, {
  collection: 'list',
  timestamps: true
});
const List = mongoose.model('list', ListSchema);

ListSchema.statics.findList = (callback) => {
    return List.find({}, callback);
};

module.exports = List;