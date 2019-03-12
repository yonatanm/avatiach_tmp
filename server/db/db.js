var mysql = require('promise-mysql');

const dev_dbConfig = {
  host: 'localhost',
  database: 'avatiach_com',
  user: 'avatiach_db',
  password: 'Bananas38',
  connectionLimit: 10
}

const prod_dbConfig = {
  host: 'www.avatiach.com',
  database: 'avatiach_heroku',
  user: 'avatiach_db_her',
  password: 'Bananas38_heroku',
  connectionLimit: 10
}

const pool = mysql.createPool(prod_dbConfig);

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
