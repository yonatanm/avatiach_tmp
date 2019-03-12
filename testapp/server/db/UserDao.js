const db = require('./db')
var _ = require('lodash');

const recordToSong = function (r) {
  return { id: r.U_ID, email: r.U_EMAIL, name: r.U_NAME };
}

const getAll = function () {
  return db.runQuery("SELECT * FROM USERS").then(function (rows) {
    return _.map(rows, recordToSong);
  });
};

const getById = function (id) {
  return db.runQuery("SELECT * FROM USERS WHERE U_ID=?", [id]).then(function (rows) {
    return recordToSong(rows[0]);
  });
};

module.exports = {
  getAll: getAll,
  getById: getById
};