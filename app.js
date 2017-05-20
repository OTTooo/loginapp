var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var jade = require('jade');
var expressValidator = require('express-validator');
var flash = require('connect-flash');
var session = require('express-session');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var mongo = require('mongodb');
var mongoose = require('express-mongoose');

var app = express();

mongoose.promise = global.promise;
var db = mongoose.connect('mongodb://localhost/loginapp');

var routes = require('routes/index');
var users = require('routes/users');
