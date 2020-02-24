var express = require('express');
var router = express.Router();
const match = require('./tbaAPI');
const matchdata = require('../matchdata.json');
// Create list of matches
var matches = [];
for(var i in matchdata) {
  var object = matchdata[i]["match"]
  matches.push(object)
}

/* GET home page. */
router.get('/', function(req, res, next) {
  // console.log(json);
  res.render('index', { matchdata: JSON.stringify(matchdata), matches: matches });
});
module.exports = router;