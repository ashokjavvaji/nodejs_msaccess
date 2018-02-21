var express = require('express');
var router = express.Router();

var usersApi = require('../data/UsersApi');

/* GET users listing. */
router.get('/', function(req, res, next) {
  usersApi.getAllUsers(function(err,data){
    if(!err){
      res.render('users', {users:data});
    } else {
      res.render('error', {error:err});
    }
  });
});

module.exports = router;
