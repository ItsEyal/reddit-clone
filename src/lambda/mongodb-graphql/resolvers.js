const DateScalar = require('./DateScalar');

module.exports = (models) => ({
  Date: DateScalar,
  Query: {
    subreddits: async () => await models.Subreddit.find({}),
    subreddit: async (_, { name }) => await models.Subreddit.findOne({ name }),
    post: async (_, {postId}) => await models.Post.findOne({postId}),
    comment: async (_, {commentId}) => await models.Comment.findOne({ commentId }),
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
    createPost: async (_, {body, attachment = '', userId, subredditId}) => {
      const post = new models.Post({
        body,
        attachment,
        userId,
        subredditId,
        comments: [],
        upvotes: 0,
        downvotes: 0
      });
      try {
        await post.save();
        return post;
      } catch (e) {
        throw new Error(e);
      }

    },
    createComment: async (body, userId) => {
      const comment = new models.Comment({
        body,
        userId,
        upvotes: 0,
        downvotes: 0,
        comments: []
      });
      try {
        await comment.save();
        return comment;
      } catch (e) {
        throw new Error(e);
      }
    },
    addUserToSubreddit: async () => {},
    deleteSubreddit: async (_, { subredditId }) => {},
  },
});
