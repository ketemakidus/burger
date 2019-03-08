var express = require("express");

var router = express.Router();

var burgers = require("../models/burgers.js");

router.get("/", function(req, res) {
    burgers.selectAll(function(result) {
    res.render("index", {result});
  });
});

router.post("/api/burgers", function(req, res) {
  burgers.insertOne(req.body.burger_name, function(result) {
    res.json({ id: result.insertId });
  });
});

router.put("/api/burgers/:id", function(req, res) {
  burgers.updateOne(req.body.devoured,req.params.id, function(result){
res.json({ id:result });
  });
});

// console.log(router);

module.exports = router;
