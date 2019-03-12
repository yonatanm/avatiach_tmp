const db = require('./db')
var _ = require('lodash');



const recordToSong = function (r) {
  return { id: r.S_ID, name: r.S_NAME };
}

const getAll = function () {
  return db.runQuery("SELECT * FROM SONGS LIMIT 5").then(function (rows) {
    return _.map(rows, recordToSong);
  });
};

const getByPerformerId = function (performerId) {
  return db.runQuery("SELECT SONGS.* FROM SONGS JOIN ENTRIES ON (SONGS.S_ID=ENTRIES.S_ID) WHERE ENTRIES.P_ID=?", [performerId]).then(function (rows) {
    return _.map(rows, recordToSong);
  });
};


const getById = function (id) {
  return db.runQuery("SELECT * FROM SONGS WHERE S_ID=?", [id]).then(function (rows) {
    return recordToSong(r[0]);
  });
};

module.exports = {
  getAll: getAll,
  getByPerformerId: getByPerformerId,
  getById: getById
};

