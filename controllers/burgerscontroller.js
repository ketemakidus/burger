var express = require("express");

var router = express.Router();

var cat  = require ("../modales/cats.js");


router.get("/", function(req,res){

res.render("");

});

router.post("/api/", function(req,res){

});

