var express = require("express");

var router = express.Router();

var burgers = require("../models/burgers.js");

router.get("/", function (req, res) {
  burgers.selectAll(function (data) {
    var hbsobject = {
      burger: data
    };
    res.render("index", hbsobject);
  });
});
console.log(burgers);

router.post("/api/burgers/", function(req, res) {
  burgers.insertOne([
    'burger_name'
  ], [
    req.body.burger_name
  ], function(data) {
    res.redirect('/');
  });
});


router.put('/burgers/:id', function(req, res) {
  var condition = 'id = ' + req.params.id;

  burgers.updateOne({
    devoured: true
  }, condition, function(data) {
    res.redirect('/');
  });
});


module.exports = router;