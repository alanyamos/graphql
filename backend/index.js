
const graphql = require('graphql');
const graphqlHTTP = require('express-graphql');
const express = require('express');
const users = require('./schema');
const handlers = require("./middlewares/config");
const app = express();

app.use(handlers.enableCors);
app.use('/user', graphqlHTTP({
    schema:users,
    graphiql: true, 
    pretty: true}))
app.listen(3000, function () {
  console.log('Server on.')
})