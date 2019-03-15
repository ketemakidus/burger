var mysql = require("mysql");

require("dotenv").config();

let env = process.env.NODE_ENV || 'development';

if (process.env.JAWSDB_URL) {

    var connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {

    var connection = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "Ketemasama22",
        database: "burgers_db"
    })
};

var mysql = require('mysql');

connection.connect(function(err) {
    if (err) {
        console.error("error connecting db: " + err.stack);
        return;
    }
    console.log("connected as id " + connection.threadId);
});

module.exports = connection;