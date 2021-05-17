const http = require('http');
const hostname = '127.0.0.1';
const port = 3000;
var mysql = require('mysql');

//connect to sql database
var con = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '[YOUR ROOT PASSWORD HERE]',
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
readline.on('line', (input) => {
  console.log(`Received: ${input}`); 
  args=input.split(" ");
  if (args[0]==="create") {
    if (args.length==1) {
      console.log("Must provide database name");
    } else {
      create(args[1]);
    }
  }
  //if (args[0]==="adduser") {

  //add more input parsing here
});

function create(dbName) {
  console.log("Creating database");
  con.query("CREATE DATABASE ${dbName}", function (err, result) {
    if (err) throw err;
    console.log("Database ${dbName} created");
  });
}
//Functions to add: adduser NAME, rmuser NAME, addlist NAME LISTNAME, rmlist NAME LISTNAME, additem NAME LISTNAME ITEMNAME, rmitem NAME LISTNAME ITEMNAME,
//addfriend NAME, rmfriend NAME
//getlists NAME, getlist NAME LISTNAME, getfriends NAME
