const { GraphQLSchema, GraphQLObjectType, GraphQLString, GraphQLInt, GraphQLList } = require('graphql')
const performerDao = require('../db/PerformerDao')
const songDao = require('../db/SongDao')
const userDao = require('../db/UserDao')
const entryDao = require('../db/EnryDao')

const EntryGQLType = new GraphQLObjectType({
  name: "Entry",
  description: "represent entry",
  fields: function () {
    return {
      id: {
        type: GraphQLInt,
        resolve(entryDB) {
          return entryDB.id;
        }
      },
      name: {
        type: GraphQLString,
        resolve(entryDB) {
          return entryDB.name;
        }
      },
      

      origLine: {
        type: GraphQLString,
        resolve(entryDB) {
          return entryDB.origLine;
        }
      },
      

      wrongLine: {
        type: GraphQLString,
        resolve(entryDB) {
          return entryDB.wrongLine;
        }
      },
      


      description: {
        type: GraphQLString,
        resolve(entryDB) {
          return entryDB.description;
        }
      },
      


      age: {
        type: GraphQLString,
        resolve(entryDB) {
          return entryDB.age;
        }
      },

      remark: {
        type: GraphQLString,
        resolve(entryDB) {
          return entryDB.remark;
        }
      },

      
      rankCount: {
        type: GraphQLInt,
        resolve(entryDB) {
          return entryDB.rankCount;
        }
      },


      rankSum: {
        type: GraphQLInt,
        resolve(entryDB) {
          return entryDB.rankSum;
        }
      },

      
      date: {
        type: GraphQLString,
        resolve(entryDB) {
          return entryDB.rankSum;
        }
      },


      user: {
        type: UserGQLType,
        resolve(entryDB) {
          return user.getById(entryDB.userId);
        }
      },

      song: {
        type: SongGQLType,
        resolve(entryDB) {
          return songDao.getById(entryDB.songId)
        }
      },
      performer: {
        type: PerformerGQLType,
        resolve(entryDB) {
          return performerDao.getById(entryDB.performerId)
        }
      },

      updateId: {
        type: GraphQLInt,
        resolve(entryDB) {
          return entryDB.rankSum;
        }
      },
    }
  }
});

const UserGQLType = new GraphQLObjectType({
  name: "User",
  description: "represent user",
  fields: function () {
    return {
      id: {
        type: GraphQLInt,
        resolve(userDB) {
          return userDB.id;
        }
      },
      email: {
        type: GraphQLString,
        resolve(userDB) {
          return userDB.email;
        }
      },
      name: {
        type: GraphQLString,
        resolve(userDB) {
          return userDB.name;
        }
      },
      entries: {
        type: new GraphQLList(EntryGQLType),
        resolve(userDB) {
          return entryDao.getByUserId(userDB.id);
        }
      }
    }
  }
});


const PerformerGQLType = new GraphQLObjectType({
  name: "Performer",
  description: "represent performer",
  fields: function () {
    return {
      id: {
        type: GraphQLInt,
        resolve(performerDB) {
          return performerDB.id;
        }
      },
      name: {
        type: GraphQLString,
        resolve(performerDB) {
          return performerDB.name;
        }
      },
      type: {
        type: GraphQLInt,
        resolve(performerDB) {
          return performerDB.type;
        }
      },
      songs: {
        type: new GraphQLList(SongGQLType),
        resolve(performerDB) {
          return songDao.getByPerformerId(performerDB.id)
        }
      },
      entries: {
        type: new GraphQLList(EntryGQLType),
        resolve(songDB) {
          return entryDao.getByPerformerId(songDB.id);
        }
      }
    }
  }
});

const SongGQLType = new GraphQLObjectType({
  name: "Song",
  description: "represent song",
  fields: function () {
    return {
      id: {
        type: GraphQLInt,
        resolve(songDB) {
          return songDB.id;
        }
      },
      name: {
        type: GraphQLString,
        resolve(songDB) {
          return songDB.name;
        }
      },
      performer: {
        type: PerformerGQLType,
        resolve(songDB) {
          return performerDao.getBySongId(songDB.id);
        }
      },
      entries: {
        type: new GraphQLList(EntryGQLType),
        resolve(songDB) {
          return entryDao.getBySongId(songDB.id);
        }
      }
    }
  }
});

const QueryGQLType = new GraphQLObjectType({
  name: "Query",
  description: "Top Query",
  fields: function () {
    return {
      performers: {
        type: new GraphQLList(PerformerGQLType),
        args: {
          id: {
            type: GraphQLInt
          }
        },
        resolve(root, args) {
          return performerDao.getAll();
        }
      },
      songs: {
        type: new GraphQLList(SongGQLType),
        args: {
          id: {
            type: GraphQLInt
          }
        },
        resolve(root, args) {
          return songDao.getAll();
        }
      },
      users: {
        type: new GraphQLList(UserGQLType),
        args: {
          id: {
            type: GraphQLInt
          }
        },
        resolve(root, args) {
          return userDao.getAll();
        }
      },
      entries: {
        type: new GraphQLList(EntryGQLType),
        args: {
          id: {
            type: GraphQLInt
          }
        },
        resolve(root, args) {
          return entries.getAll();
        }
      }
    }
  }
});

const schema = new GraphQLSchema({
  query: QueryGQLType,
});



module.exports = {
  schema: schema
}
