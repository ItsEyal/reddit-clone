const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    firstName: String,
    lastName: String,
    subreddits: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Subreddit',
      },
    ],
    upvotes: [
      {
        onModel: {
          type: String,
          required: true,
          enum: ['Comment', 'Post'],
        },
        object: {
          type: mongoose.Schema.Types.ObjectId,
          refPath: 'onModel',
        },
      },
    ],
    downvotes: [
      {
        onModel: {
          type: String,
          required: true,
          enum: ['Comment', 'Post'],
        },
        object: {
          type: mongoose.Schema.Types.ObjectId,
          refPath: 'onModel',
        },
      },
    ],
    comments: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Comment',
      },
    ],
  },
  { timestamps: true },
);

module.exports = mongoose.model('User', UserSchema);
