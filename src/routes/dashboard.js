var express = require('express');
var router = express.Router();

/* GET home page. */
//render dashboard - nothing too fancy here
router.get('/', function(req, res, next) {
  res.render('dashboard');
  console.log("Cookie:", req.cookies.name);
});

module.exports = router;
