var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
router.get('/login',function (req, res, next) {
    res.render('login');
});
router.get('/register',function (req, res, next) {
    res.render('register')
});
router.post('/checkLogin',function (req, res, next) {
    var userName = req.body.uName;
    var passWord = req.body.pwd;
    /*console.log(userName);*/
    if(userName == 'zhuhaixia' && passWord == '123456'){
      res.render('index',{title: 'Express',uName: userName})
    }else {
      res.send('fail');
    }
});
router.get('/checkUser',function (req, res, next) {
  var name = req.query.userName;
  /*console.log(name);*/
  if(name == 'zhuhaixia'){
    res.send('fail');
  }else {
    res.send('success');
  }
});
module.exports = router;
