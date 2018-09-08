var express = require('express');
var router = express.Router();
var dbService = require('../service/dbService');

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

// Login
router.post('/login', function (req, res, next) {

    var s = dbService.find({ 
      'name': req.body.name, 
      'password': req.body.password 
    }, 
    (err, result) => {
      if (result.length == 0) {
        res.send("Unsuccessfull");
      }
      else {
      res.send("Success");
      }
    });

});

//Signup
router.post('/signup', function (req, res, next) {
  var obj = req.body;
  var cursor = dbService.insert(obj, () => res.send("record inserted"));
});


module.exports = router;
