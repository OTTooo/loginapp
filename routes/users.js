var express = require('express');
var router = express.Router();

// 登录
router.get('/register',function(req,res) {
  res.render('register');
});

// 注册
router.get('login',function(req,res) {
  res.render('login');
});

module.exports = router
