import { Link } from "react-router-dom";
import React from "react";

function PostLinksBar({ subreddit, user, post, time }) {
  return (
    <div>
      <Link exact to="/r/something">
        {subreddit}
      </Link>
      <Link exact to={user}>
        u/{user}
      </Link>
      <Link exact to={post}>
        at {time}
      </Link>
    </div>
  );
}

export default PostLinksBar;
