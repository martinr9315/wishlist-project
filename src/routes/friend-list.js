

var express = require('express');
var router = express.Router();
//connect to mysql
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
//render list of friends based on the username from the session cookies and SQL query
router.get('/', function(req, res, next) {
  username=req.cookies.name;
  con.query("USE Wishlist;", function (err, result) {
    if (err) throw err;
  });
  con.query(("SELECT * FROM Lists WHERE UserName=\"" + mysql.escape(username) + "\""), function (err, result) {
    if (err) throw err;
    res.render('friend-list',{list1:result});
  });
});

//handles all post request - add friend, view friend, delete friend
router.post('/', function(req, res, next) {
  action=req.body.action;
  if (action=='add') {
    //Add - checks if friend is not null and if friend actually exists, then adds it
    //finally refreshes the page
    console.log("Requested to add friend");
    itemname=req.body.name;
    username=req.cookies.name;

    con.query("USE Wishlist;", function (err, result) {
      if (err) throw err;
    });
    if (itemname!='') {
        con.query(("SELECT * FROM Users WHERE UserName=\"" + mysql.escape(itemname) + "\""), function (err, result) {
            len=(Object.keys(result).length);
            if (len!=0) {
                con.query(("INSERT INTO Lists VALUES (\""+ mysql.escape(itemname) + "\", \"" + mysql.escape(username) +"\")"), function (err, result) {
                    if (err) throw err;
                });
            }
        });
      
    }
    con.query(("SELECT * FROM Lists WHERE UserName=\"" + mysql.escape(username) + "\""), function (err, result) {
        if (err) throw err;
        res.redirect("/my-friends");
    });
  } else if (action=='view') {
    //View - set session cookie and redirect to the view-friend page
    username=req.body.name;
    console.log("Requested to view friend");
    res.cookie('friend', username); //Sets name = express
    res.redirect("/view-friend");

  } else {
    //Delete - use SQL to delete, and then re-render updated friends list
    console.log("Requested to delete friend");
    itemname=req.body.name;
    username=req.cookies.name;

    con.query("USE Wishlist;", function (err, result) {
      if (err) throw err;
    });
    con.query(("DELETE FROM Lists WHERE ListName=\""+mysql.escape(itemname)+"\" AND UserName=\"" + mysql.escape(username) + "\""), function (err, result) {
      if (err) throw err;
    });
    con.query(("SELECT * FROM Lists WHERE UserName=\"" + mysql.escape(username) + "\""), function (err, result) {
      if (err) throw err;
      res.render('friend-list',{list1:result});
    });
  }
});
module.exports = router;
