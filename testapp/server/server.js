const express = require('express')
const graphqlExpress = require('express-graphql')
const schema = require('./gql/schema')
const bodyParser = require('body-parser');


const APP_PORT = 3000

const app = express();

app.use('/graphql', bodyParser.json(), graphqlExpress({
  schema: schema.schema,
  pretty: true,
  graphiql: true,
  formatError: function (error) {
    return {
      message: error.message,
      locations: error.locations,
      stack: error.stack ? error.stack.split('\n') : [],
      path: error.path
    };
  }
}));


app.listen(APP_PORT, function () {
  console.log(`Avatiach is up and running on port ${APP_PORT}`)
});
