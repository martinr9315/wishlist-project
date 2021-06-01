

var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var con = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'taesunglee1',
  insecureAuth: true
});
con.connect(function(err) {
  if (err) throw err;
  
});
/* GET home page. */

router.get('/', function(req, res, next) {
  username=req.cookies.name;
  console.log("Fetching items for user " + username);
  con.query("USE Wishlist;", function (err, result) {
    if (err) throw err;
  });
  con.query(("SELECT * FROM Items WHERE ListName=\"" + mysql.escape(username) + "\" AND UserName=\""+mysql.escape(username)+"\""), function (err, result) {
    if (err) throw err;
    console.log(result);
    res.render('my-list',{list1:result});
  });
});


router.post('/', function(req, res, next) {
  action=req.body.action;
  if (action=='add') {
    console.log("Requested to add item");
    itemname=req.body.name;
    itemdesc=req.body.desc;
    username=req.cookies.name;

    con.query("USE Wishlist;", function (err, result) {
      if (err) throw err;
    });
    if (itemname!='') con.query(("INSERT INTO Items VALUES (\""+ mysql.escape(itemname) + "\", \"" + mysql.escape(username) + "\", \""+ mysql.escape(username) +"\", \""+mysql.escape(itemdesc)+"\")"), function (err, result) {
      if (err) throw err;
    });
    con.query(("SELECT * FROM Items WHERE ListName=\"" + mysql.escape(username) + "\" AND UserName=\""+mysql.escape(username)+"\""), function (err, result) {
      if (err) throw err;
      console.log(result);
      res.render('my-list',{list1:result});
    });
  } else {
    console.log("Requested to delete item");
    itemname=req.body.name;
    username=req.cookies.name;

    con.query("USE Wishlist;", function (err, result) {
      if (err) throw err;
    });
    con.query(("DELETE FROM Items WHERE ItemName=\""+mysql.escape(itemname)+"\" AND ListName=\"" + mysql.escape(username) + "\" AND UserName=\""+mysql.escape(username)+"\""), function (err, result) {
      if (err) throw err;
    });
    con.query(("SELECT * FROM Items WHERE ListName=\"" + mysql.escape(username) + "\" AND UserName=\""+mysql.escape(username)+"\""), function (err, result) {
      if (err) throw err;
      console.log(result);
      res.render('my-list',{list1:result});
    });
  }
});
module.exports = router;
