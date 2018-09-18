const { ApolloServer, gql } = require('apollo-server');
const mongoose = require('mongoose');

require('dotenv').config({ path: 'variables.env'});

mongoose
  .connect(process.env.MOGO_URI, { useNewUrlParser: true })
  .then(() => console.log('DB connected'))
  .catch(err => console.err(err));

const typeDefs = gql(`
type Todo {
  task: String
  completed: Boolean
}

type Query {
  getTodos: [Todo]
}
`);

const resolvers = {
  Query: {
    getTodos: () => todos
  }
};



const server = new ApolloServer({
  typeDefs,
  resolvers
});

server.listen().then(({ url }) => {
  console.log(`Server Listening ${url}`);
});
