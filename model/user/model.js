var mongoose = require('mongoose');
var bcryptjs = require('bcryptjs');

var UserSchema = mongoose.Schema({
  username: {
    type: String,
    index: true
  },
  email: {
    type: String
  },
  password: {
    type: String
  }
})

var User = mongoose.model('User',UserSchema);

exports.createUser = function(newUser,callback) {
  
}
