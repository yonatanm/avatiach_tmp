var mysql = require('promise-mysql');

const pool = mysql.createPool({
  host: 'localhost',
  user: 'avatiach_db',
  password: 'Bananas38',
  database: 'avatiach_com',
  connectionLimit: 10
});

const runQuery = function (query, params) {
  return pool.getConnection().then(function (connection) {
    return connection.query(mysql.format(query, params)).then(function (rows) {
      return rows
    }).catch(function (err) {
      return Promise.reject(err);
    });
  }).catch(function (err) {
    return Promise.reject(err);
  });
};

module.exports = { runQuery: runQuery, pool : pool }
