const http = require('http');
const hostname = '127.0.0.1';
const port = 3000;
var mysql = require('mysql');

//connect to sql database
var con = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'taesunglee1',
  insecureAuth: true
});
con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  
});

//this is the code that lets you use command line
const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
})

//replace this with html parser once that's done
/*
Commands:
init - creates a database and tables and stuff, should really only be called once ever
reset - resets entire database - use sparingly
addlist USERNAME LISTNAME - adds list LISTNAME to user USERNAME
adduser USERNAME - adds user USERNAME to the database
additem USERNAME LISTNAME ITEMNAME - adds item ITEMNAME to list LISTNAME for user USERNAME, username is probably not needed for this unless we
want to do something fancy like return a list of all items in any list for a given user. well, maybe that'll happen idk


*/
readline.on('line', (input) => {
  //console.log(`  Received: ${input}`); 
  args=input.split(" ");
  if (args[0]==="init") {
    initDatabase();
    return;
  }
  if (args[0]==="reset") {
    reset();
    return;
  }
  //to make sure that if database doesn't exist, it throws an error, and if it does exist, we are doing commands in it
  con.query("USE Wishlist;", function (err, result) {
    if (err) throw err;
  });
  if (args[0]==="adduser") {
    if (args.length==1) {
      console.log("  No username entered");
    } else {
      adduser(args[1]);
    }
  }
  if (args[0]==="addlist") {
    if (args.length<3) {
      console.log("  Too few arguments");
    } else {
      addlist(args[1],args[2]);
    }
  }
  if (args[0]==="additem") {
    if (args.length<4) {
      console.log("  Too few arguments");
    } else {
      additem(args[1],args[2],args[3]);
});
function addlist(username, listname) {
  con.query(("INSERT INTO Lists VALUES (\"" + listname + "\", \""+username+"\")"), function (err, result) {
    if (err) throw err;
    console.log("  List " + listname + " created for user " + username);
  });
}
function adduser(name) {
  con.query(("INSERT INTO Users VALUES (\"" + name + "\")"), function (err, result) {
    if (err) throw err;
    console.log('  User ' + name + ' created');
  });
}
function additem(username, listname, itemname) {
  con.query(("INSERT INTO Items VALUES (\""+ username + "\", \"" + listname + "\", \""+username+"\")"), function (err, result) {
    if (err) throw err;
    console.log("  Item " + itemname + " created in list " + listname + " for user " + username);
  });
}
function reset() {
  con.query("DROP DATABASE Wishlist;", function (err, result) {
    if (err) throw err;
    console.log("  Database reset");
  });
}
function initDatabase() {
  console.log("  Creating database \"Wishlist\"");
  con.query("CREATE DATABASE Wishlist;", function (err, result) {
    if (err) throw err;
    console.log("  Database created");
  });
  con.query("USE Wishlist;", function (err, result) {
    if (err) throw err;
    console.log("  Switched to Wishlist database");
  });
  con.query("CREATE TABLE Users (UserName varchar(255));", function (err, result) {
    if (err) throw err;
    console.log("  User table created");
  });
  con.query("CREATE TABLE Lists (ListName varchar(255), UserName varchar(255));", function (err, result) {
    if (err) throw err;
    console.log("  Wish list table created");
  });
  con.query("CREATE TABLE Items (ItemName varchar(255), ListName varchar(255), UserName varchar(255));", function (err, result) {
    if (err) throw err;
    console.log("  Item table created");
  });
  con.query("CREATE TABLE Friends (FriendName varchar(255), UserName varchar(255));", function (err, result) {
    if (err) throw err;
    console.log("  Friend table created");
  });

}
//Functions to add: rmuser NAME, LISTNAME, rmlist NAME LISTNAME, rmitem NAME LISTNAME ITEMNAME,
//addfriend NAME, rmfriend NAME
//getlists NAME, getlist NAME LISTNAME, getfriends NAME
//inittable
//Add check for adding list or friend to invalid user, adding item to invalid list
