const mongoose = require('mongoose');

const ListSchema = new mongoose.Schema({
  name: String,
  game: String,
  date: String
}, {
  timestamps: true
});
const List = mongoose.model('list', ListSchema);

ListSchema.statics.findList = (callback) => {
    return List.find({}, callback);
};

module.exports = List;