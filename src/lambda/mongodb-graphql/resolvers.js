const DateScalar = require('./DateScalar');

module.exports = (models) => ({
  Date: DateScalar,
  Query: {
    subreddits: async () => await models.Subreddit.find({}),
    subreddit: async (_, { name }) => await models.Subreddit.findOne({ name }),
  },
  Mutation: {
    createSubreddit: async (_, { name, about = '' }) => {
      const subreddit = new models.Subreddit({
        name,
        about,
        members: [],
        posts: [],
      });
      try {
        await subreddit.save();
        return subreddit;
      } catch (e) {
        throw new Error(e);
      }
    },
    addUserToSubreddit: async () => {},
    createPost: async () => {},
  },
});
