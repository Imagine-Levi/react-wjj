const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
  userName: String,
  password: String
}, {
  collection: 'user',
  timestamps: true
});
const User = mongoose.model('user', UserSchema);

module.exports = User;