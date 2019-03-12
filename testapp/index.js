const userDao = require('./server/db/UserDao')
const songDao = require('./server/db/SongDao')
const performerDao = require('./server/db/PerformerDao')
const db = require('./server/db/db')

songDao.getAll().then(function (v) {
  // console.log(v)
});


performerDao.getByType(4).then(function (v) {
  // console.log(v);
})


const res = userDao.getById(96).then(function (v) {
  // console.log(v)
  db.pool.end();
});