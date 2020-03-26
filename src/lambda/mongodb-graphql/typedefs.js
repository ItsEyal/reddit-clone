const { gql } = require('apollo-server-lambda');

module.exports = gql`
  type Post {
    id: ID!
    title: String!
    body: String!
  }

  type Query {
    allPosts: [Post]
  }
`;
