const express = require('express');
const path = require('path');
const { ApolloServer } = require('apollo-server-express');
const { expressMiddleware } = require('@apollo/server/express4');
const db = require('./config/connection');
const routes = require('./routes');
const { authMiddleware } = require('./utils/auth');
const { typeDefs, resolvers } = require('./schemas');

const app = express();
const PORT = process.env.PORT || 3011;

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

async function startApolloServer() {

  await server.start();
  
  app.use(express.urlencoded({ extended: true }));
  app.use(express.json());

  app.use('/graphql', expressMiddleware(server, {
    context: authMiddleware
  }));


  app.use(express.static(path.join(__dirname, '../client/build')));

  app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
  });


  app.use(routes);

  db.once('open', () => {
    app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}!`);
    console.log(`Use GraphQL at http://localhost:${PORT}/graphql`);
  });
});

};

startApolloServer(typeDefs, resolvers);