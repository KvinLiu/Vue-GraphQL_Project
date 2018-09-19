const requireText = require('require-text');

const { ApolloServer } = require('apollo-server');
const mongoose = require('mongoose');

const resolvers = require('./resolvers');
const typeDefs = requireText('./typeDefs.graphql', require);

const User = require('./models/User');
const Post = require('./models/Post');

require('dotenv').config({ path: 'variables.env'});

mongoose
  .connect(process.env.MOGO_URI, { useNewUrlParser: true })
  .then(() => console.log('DB connected'))
  .catch(err => console.err(err));

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: {
    User,
    Post
  }
});

server.listen().then(({ url }) => {
  console.log(`Server Listening ${url}`);
});
