var express = require('express');
var router = express.Router();
const json = require('../matchdata.json');

/* GET home page. */

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
  console.log("hello")
});
router.get('/', function(req, res, next) {
  res.send('value', { array: json })
})
module.exports = router;
