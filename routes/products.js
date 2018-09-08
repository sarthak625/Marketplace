var express = require('express');
var router = express.Router();
var dbService = require('../service/productDBService.js');

// /* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });


router.post('/insertProduct', function (req, res, next) {
  var obj = req.body;
  var cursor = dbService.insert(obj, () => res.send("record inserted"));
});

module.exports = router;
