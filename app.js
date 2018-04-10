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
var mongoose = require('mongoose');

var app = express();

// 创建 loginapp 数据库
mongoose.promise = global.promise;
var db = mongoose.connect('mongodb://localhost/loginapp');

// 引入路由
var index = require('./route/index');
var user = require('./route/user');

// 渲染引擎
app.set('views',path.join(__dirname,'view/page/'));
app.set('view engine','jade');

// 使用中间件
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use(cookieParser());

// 设置静态文件
app.use(express.static(path.join(__dirname,'public')));

// 会话
app.use(session({
  secret: 'secret',
  saveUninitialized: true,
  resave: true
}))

// express-validator 它验证请求的body, params, query, headers 和 cookies
// 并且如果任何配置的验证规则失败,返回一个错误的响应;
app.use(expressValidator({
  errorFormatter: function(param, msg, value) {
      var namespace = param.split('.')
      , root    = namespace.shift()
      , formParam = root;

    while(namespace.length) {
      formParam += '[' + namespace.shift() + ']';
    }
    return {
      param : formParam,
      msg   : msg,
      value : value
    };
  }
}));

// connect flash
app.use(flash());

// 设置全局变量
app.use(function(req,res,next){
  res.locals.success_msg = req.flash('success_msg');
  res.locals.error_msg = req.flash('error_msg');
  res.locals.error = req.flash('error');
  next();
})

// 路径划分
app.use('/',index);
app.use('/user',user);

// 设置监听端口
app.set('port',(process.env.PORT || 3001));

app.listen(app.get('port'),function(){
  console.log('Server start on port 1111' + app.get('port'));
})
