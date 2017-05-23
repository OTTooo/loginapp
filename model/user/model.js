var mongoose = require('mongoose');
var bcryptjs = require('bcryptjs');
var Schema = mongoose.Schema;

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
});
