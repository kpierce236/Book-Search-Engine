require('dotenv').config();
const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const db = require('./config/connection');
const routes = require('./routes');
const { authMiddleware } = require('./utils/auth');
const { typeDefs, resolvers } = require('./schemas');


const app = express();
const PORT = process.env.PORT || 3001;


async function startApolloServer() {
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: authMiddleware,
    cache: 'bounded',
  });
  
  await server.start();
  
  server.applyMiddleware({ app });

  app.use(express.urlencoded({ extended: true }));
  app.use(express.json());


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

startApolloServer();