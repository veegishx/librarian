const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const schema = require('./schema/schema')

const app = express();

// Our middleware for handling GraphQL requests
app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true,
}));

app.listen(4000, () => {
  console.log('Now listening for requests on port 4000');
})