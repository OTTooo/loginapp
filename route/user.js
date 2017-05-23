var express = require('express');
var router = express.Router();

// 注册
router.get('/register',function(req,res) {
  res.render('register',{
    title: '注册'
  });
});

// 注册提交
router.post('/register',function(req,res) {
  var username = req.body.username;
  var email = req.body.email;
  var password1 = req.body.password1;
  var password2 = req.body.password2;

  // 验证
  req.checkBody('username','Name is require').notEmpty();

  var errors = req.validationErrors();
  if (errors) {
    console.log('YES');
  } else {
    console.log('NO');
  }
});

// 登录
router.get('/login',function(req,res) {
  res.render('login', {
    title: '登录'
  });
});


module.exports = router
