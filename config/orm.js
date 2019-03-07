var connection = require("./connection");

var orm = {
    selectALL: function(cd){
        connection.query("SELECT * FROM burger", function (err, data) {
            if (err) cd(err , null);
            cd(null,data);
        });
}

    };

module.exports = orm;