const requireText = require('require-text');

const { ApolloServer } = require('apollo-server');
const mongoose = require('mongoose');

// Import typeDefs and resolvers
const resolvers = require('./resolvers');
const typeDefs = requireText('./typeDefs.graphql', require);

// Improt Enviroment Variables and Mongoose models
require('dotenv').config({ path: 'variables.env'});
const User = require('./models/User');
const Post = require('./models/Post');


// Connect to Mlab Database
mongoose
  .connect(process.env.MOGO_URI, { useNewUrlParser: true })
  .then(() => console.log('DB connected'))
  .catch(err => console.err(err));

// Create Apollo/GraphQL Server using typeDefs, resolvers and context
// object
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
