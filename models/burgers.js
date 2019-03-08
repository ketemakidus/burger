// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm");

var burger = {
  selectAll: function(cb) {
    orm.selectAll(function(res) {
      cb(res);
    });
  },
  insertOne: function(burgerName, cb) {
    orm.insertOne(burgerName,function(res) {
      cb(res);
    });
  },
  updateOne: function(obj,id, cb) {
    orm.updateOne(obj,id, function(res) {
      cb(res);
    });
  }
};
// console.log(burger);
//   delete: function(condition, cb) {
//     orm.delete("burgers", condition, function(res) {
//       cb(res);
//     });
//   }
// };

module.exports = burger;
