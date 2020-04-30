const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema(
  {
    upvotes: {
      type: Number,
      required: true,
    },
    downvotes: {
      type: Number,
      required: true,
    },
    comments: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Comment',
      },
    ],
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    body: {
      type: String,
      required: true,
    },
    attachment: String,
  },
  { timestamps: true },
);

module.exports = mongoose.model('Post', PostSchema);
