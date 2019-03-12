const db = require('./db')
var _ = require('lodash');



const recordToPerformer = function (r) {
  return { id: r.P_ID, type: r.P_TYPE, name: r.P_NAME };
}

const getAll = function () {
  return db.runQuery("SELECT * FROM PERFORMERS LIMIT 5").then(function (rows) {
    return _.map(rows, recordToPerformer);
  });
};

const getByType = function (type) {
  return db.runQuery("SELECT * FROM PERFORMERS WHERE P_TYPE=?", [type]).then(function (rows) {
    return _.map(rows, recordToPerformer);
  });
};

const getBySongId = function (songId) {
  console.log(`PerformerDao.getBySongId ${songId}`)
  return db.runQuery("SELECT PERFORMERS.* FROM PERFORMERS JOIN ENTRIES ON (PERFORMERS.P_ID=ENTRIES.P_ID) WHERE ENTRIES.S_ID=?", [songId]).then(function (rows) {
    console.log(`got performer `+JSON.stringify(rows ));
    return recordToPerformer(rows[0]);
  });
};

const getById = function (id) {
  return db.runQuery("SELECT * FROM PERFORMERS WHERE P_ID=?", [id]).then(function (rows) {
    return recordToPerformer(r[0]);
  });
};

module.exports = {
  getAll: getAll,
  getByType: getByType,
  getBySongId: getBySongId,
  getById: getById
};