var express = require("express");

var router = express.Router();

var orm = require('../config/orm');

router.get("/", function (req, res) {
    orm.selectALL(function (error, burgers) {
        if (error) {
            return res.status(501).json({
                message: "not able to query"
            });
        }
        res.render("index")
    });

});

module.exports = router;