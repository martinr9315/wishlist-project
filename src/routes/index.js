var express = require('express');
var mysql = require('mysql');
//connect to mysql
var con = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'taesunglee1',
  insecureAuth: true
});
con.connect(function(err) {
  if (err) throw err;
  console.log("Connected to MySQL database");
  
});
var router = express.Router();

/* GET home page. */
//render login page
router.get('/', function(req, res, next) {
  res.cookie('name',"");
  res.render('index');
});
//Only post request is a login/registration request
//First determines whether user actually exists. if so, it checks password; if not, it creates a new user
router.post('/', function(req, res, next) {
  console.log("registration request received");
  user=req.body.username;
  pass=req.body.password;
  console.log("username: "+user+", password: "+pass);
  var validated=0;
  con.query("USE Wishlist;", function (err, result) {
    if (err) throw err;
  });
  var userdata=0;
  con.query(("SELECT * FROM Users WHERE UserName=\"" + mysql.escape(user) + "\""), function (err, result) {
    if (err) throw err;
    userdata=result;
    len=(Object.keys(userdata).length);
    if (len!=0) {
      userdata=userdata[0];
      pass="'"+pass+"'";
      if (pass===userdata.Password) validated=1;
      if (validated) {
        console.log("validated!");
        res.cookie('name', user); //Sets name
        res.redirect('/dashboard');
      } else {
        console.log("invalid password");
        res.redirect('/');
      }
    } else {
      con.query(("INSERT INTO Users VALUES (\"" + mysql.escape(user) + "\", \""+mysql.escape(pass)+"\")"), function (err, result) {
        if (err) throw err;
        res.redirect('/');
      });
    }
  });
});
module.exports = router;
