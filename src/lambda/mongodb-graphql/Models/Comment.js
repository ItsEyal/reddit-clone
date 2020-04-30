const mongoose = require('mongoose');

const CommentSchema = new mongoose.Schema(
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
    body: {
      type: String,
      required: true,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
  },
  { timestamps: true },
);

module.exports = mongoose.model('Comment', CommentSchema);
