var express = require('express');
var router = express.Router();
var dbService = require('../service/productDBService.js');

/* GET Products listing. */
router.get('/fetchProducts', function(req, res, next) {
  var s = dbService.fetchAllProducts(
  (err, result) => {
    if (err) {
      res.send("Unsuccessfull");
    }
    else {
    res.send(result);
    }
  });
});


router.post('/insertProduct', function (req, res, next) {
  var obj = req.body;
  var cursor = dbService.insert(obj, () => res.send("record inserted"));
});

module.exports = router;
