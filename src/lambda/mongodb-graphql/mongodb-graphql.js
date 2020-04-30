const { ApolloServer } = require('apollo-server-lambda');
const typeDefs = require('./typedefs');
const resolvers = require('./resolvers');
const connectToMongoDB = require('./db');
const Post = require('./Models/Post');
const Comment = require('./Models/Comment');
const User = require('./Models/User');
const Subreddit = require('./Models/Subreddit');

const models = {
  Post,
  Comment,
  User,
  Subreddit,
};

exports.handler = async function (event, context) {
  const db = await connectToMongoDB();
  const server = new ApolloServer({
    typeDefs,
    resolvers: resolvers(models),
  });
  return new Promise((yay, nay) => {
    const cb = (err, args) => (err ? nay(err) : yay(args));
    server.createHandler()(event, context, cb);
  });
};
