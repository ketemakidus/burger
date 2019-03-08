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
  updateOne: function(eat,id, cb) {
    orm.updateOne(eat,id, function(res) {
      cb(res);
    });
  }
};
console.log(burger);

module.exports = burger;
