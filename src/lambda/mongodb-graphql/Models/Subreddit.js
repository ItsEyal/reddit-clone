const mongoose = require('mongoose');

const SubredditSchema = new mongoose.Schema(
  {
    members: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
      },
    ],
    name: {
      type: String,
      required: true,
    },
    about: String,
    posts: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Post',
      },
    ],
  },
  { timestamps: true },
);

module.exports = mongoose.model('Subreddit', SubredditSchema);
