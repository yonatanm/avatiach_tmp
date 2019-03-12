const db = require('./db')
var _ = require('lodash');

const recordToEntry = function (r) {
  return {
    id: r.E_ID,
    name: r.E_NAME,
    userId: r.U_ID,
    performerId: r.P_ID,
    songId: r.S_ID,
    origLine: r.E_ORIG_LINE,
    wrongLine: r.E_WRONG_LINE,
    description: r.E_DESCRIPTION,
    age: r.E_AGE,
    remark: r.E_REMARK,
    rankCount: r.E_RANK_COUNT,
    rankSum: r.E_RANK_SUM,
    date: r.E_DATE,
    updateId: r.D_ID
  };
}

const getAll = function () {
  return db.runQuery("SELECT * FROM ENTRIES").then(function (rows) {
    return _.map(rows, recordToEntry);
  });
};

const getBySongId = function (songId) {
  return db.runQuery("SELECT * FROM ENTRIES WHERE S_ID = ?", [songId]).then(function (rows) {
    return _.map(rows, recordToEntry);
  });
};

const getByPerformerId = function (performerId) {
  return db.runQuery("SELECT * FROM ENTRIES WHERE P_ID = ?", [performerId]).then(function (rows) {
    return _.map(rows, recordToEntry);
  });
};

const getByUserId = function (performerId) {
  return db.runQuery("SELECT * FROM ENTRIES WHERE U_ID = ?", [userId]).then(function (rows) {
    return _.map(rows, recordToEntry);
  });
};

const getByUpdateId = function (updateId) {
  return db.runQuery("SELECT * FROM ENTRIES WHERE D_ID = ?", [updateId]).then(function (rows) {
    return _.map(rows, recordToEntry);
  });
};

const getById = function (id) {
  return db.runQuery("SELECT * FROM ENTRIES WHERE E_ID=?", [id]).then(function (rows) {
    return recordToEntry(r[0]);
  });
};

module.exports = {
  getAll: getAll,
  getBySongId: getBySongId,
  getByPerformerId: getByPerformerId,
  getByUserId: getByUserId,
  getByUpdateId: getByUpdateId,
  getById: getById
};

