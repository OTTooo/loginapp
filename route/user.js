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

  // 对表单提交内容进行验证
  req.checkBody('username','用户名不能为空').notEmpty();
  req.checkBody('email','邮箱不能为空').notEmpty();
  req.checkBody('email','请输入正确的邮箱地址').isEmail();
  req.checkBody('password1','密码不能为空').notEmpty();
  req.checkBody('password2','密码不一致').equals(req.body.password1);

  var errors = req.validationErrors();
  if (errors) {
    res.render('register',{
      errors:errors
    })
  } else {
    console.log('pass');
  }
});

// 登录
router.get('/login',function(req,res) {
  res.render('login', {
    title: '登录'
  });
});


module.exports = router
