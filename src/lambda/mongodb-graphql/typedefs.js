const { gql } = require('apollo-server-lambda');

module.exports = gql`
  scalar Date

  interface node {
    id: ID!
    createdAt: Date!
    updatedAt: Date!
  }

  type User implements node {
    id: ID!
    createdAt: Date!
    updatedAt: Date!
    username: String!
    firstName: String
    lastName: String
    email: String!
    upvotes: [Vote]!
    downvotes: [Vote]!
    comments: [Comment]!
  }

  union Vote = Comment | Post

  type Comment implements node {
    id: ID!
    createdAt: Date!
    updatedAt: Date!
    upvotes: Int!
    downvotes: Int!
    comments: [Comment]!
    body: String!
    user: User!
  }

  type Post implements node {
    id: ID!
    createdAt: Date!
    updatedAt: Date!
    upvotes: Int!
    downvotes: Int!
    body: String!
    attachment: String
    comments: [Comment]!
    user: User!
  }

  type Subreddit implements node {
    id: ID!
    createdAt: Date!
    updatedAt: Date!
    members: [User]!
    name: String!
    about: String
    posts: [Post]!
  }

  type Query {
    subreddits: [Subreddit]!
    subreddit(name: String!): Subreddit!
  }

  type Mutation {
    createSubreddit(name: String!, about: String): Subreddit!
    addUserToSubreddit(subredditId: ID!, userId: ID!): User!
    createPost(
      body: String!
      attachment: String
      userId: ID!
      subredditId: ID!
    ): Post!
  }
`;
