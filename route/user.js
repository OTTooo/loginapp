var express = require('express');
var router = express.Router();

// 登录
router.get('/register',function(req,res) {
  res.render('register',{
    title: '注册'
  });
});

// 注册
router.get('/login',function(req,res) {
  res.render('login', {
    title: '登录'
  });
});

module.exports = router
