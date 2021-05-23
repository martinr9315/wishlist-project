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
    }
  }
  if (args[0]==="rmuser") {
    if (args.length==1) {
      console.log("  No username entered");
    } else {
      rmuser(args[1]);
    }
  }
  if (args[0]==="rmlist") {
    if (args.length<3) {
      console.log("  Too few arguments");
    } else {
      rmlist(args[1],args[2]);
    }
  }
  if (args[0]==="rmitem") {
    if (args.length<4) {
      console.log("  Too few arguments");
    } else {
      rmitem(args[1],args[2],args[3]);
    }
  }
  if (args[0]==="getlists") {
    if (args.length==1) {
      console.log("  No username entered");
    } else {
      getlists(args[1]);
    }
  }
  if (args[0]==="getitems") {
    if (args.length<3) {
      console.log("  Too few arguments");
    } else {
      getitems(args[1],args[2]);
    }
  }
});
function getlists(name) {
  con.query(("SELECT * FROM Lists WHERE UserName=\"" + mysql.escape(name) + "\""), function (err, result) {
    if (err) throw err;
    console.log(result);
  });
}
function getitems(name, listname) {
  con.query(("SELECT * FROM Items WHERE ListName=\"" + mysql.escape(listname) + "\" AND UserName=\""+mysql.escape(name)+"\""), function (err, result) {
    if (err) throw err;
    console.log(result);
  });
}
function rmuser(name) {
  //Remove user from table, remove user's lists and items
  con.query(("DELETE FROM Users WHERE UserName=\"" + mysql.escape(name) + "\""), function (err, result) {
    if (err) throw err;
    console.log('  User ' + name + ' deleted');
  });
  con.query(("DELETE FROM Lists WHERE UserName=\"" + mysql.escape(name) + "\""), function (err, result) {
    if (err) throw err;
    console.log('  User ' + name + '\'s lists deleted');
    console.log('  Number of lists deleted: ' + result.affectedRows);
  });
  con.query(("DELETE FROM Items WHERE UserName=\"" + mysql.escape(name) + "\""), function (err, result) {
    if (err) throw err;
    console.log('  User ' + name + '\'s items deleted');
    console.log('  Number of items deleted: ' + result.affectedRows);
  });
}
function rmlist(username, listname) {
  //Remove list from table, remove list's items
  con.query(("DELETE FROM Lists WHERE ListName=\"" + mysql.escape(listname) + "\" AND UserName=\""+mysql.escape(username)+"\""), function (err, result) {
    if (err) throw err;
    console.log('  List ' + listname + ' deleted');
  });
  con.query(("DELETE FROM Items WHERE ListName=\"" + mysql.escape(listname) + "\" AND UserName=\""+mysql.escape(username)+"\""), function (err, result) {
    if (err) throw err;
    console.log('  Items for list ' + listname + ' deleted');
    console.log('  Number of items deleted: ' + result.affectedRows);
  });
} 
function rmitem(username,listname,itemname) {
  con.query(("DELETE FROM Items WHERE Itemname=\""+mysql.escape(itemname)+"\" AND ListName=\"" + mysql.escape(listname) + "\" AND UserName=\""+mysql.escape(username)+"\""), function (err, result) {
    if (err) throw err;
    console.log('  Item ' + itemname + ' deleted');
  });
}
function addlist(username, listname) {
  con.query(("INSERT INTO Lists VALUES (\"" + mysql.escape(listname) + "\", \""+ mysql.escape(username) +"\")"), function (err, result) {
    if (err) throw err;
    console.log("  List " + listname + " created for user " + username);
  });
}
function adduser(name) {
  con.query(("INSERT INTO Users VALUES (\"" + mysql.escape(name) + "\")"), function (err, result) {
    if (err) throw err;
    console.log('  User ' + name + ' created');
  });
}
function additem(username, listname, itemname) {
  con.query(("INSERT INTO Items VALUES (\""+ mysql.escape(itemname) + "\", \"" + mysql.escape(listname) + "\", \""+ mysql.escape(username) +"\")"), function (err, result) {
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
//addfriend NAME, rmfriend NAME
//getfriends NAME

//Add check for adding list or friend to invalid user, adding item to invalid list (?)
