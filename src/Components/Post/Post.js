import React from "react";
import Score from "../Score/Score";
import Title from "../Title/Title";
import Body from "../Body/Body";
import Icons from "../Icons/Icons";
import { withStyles } from "@material-ui/core/styles";
import PostLinksBar from "../PostLinksBar/PostLinksBar";
import { Link } from "react-router-dom";

const styles = {
  root: {
    backgroundColor: "white",
    border: 1,
    color: "black",
    display: "flex",
    alignItems: "center",
    //justifyContent: "center",
  },
};

function Post(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <Score />
      <div>
        <PostLinksBar
          subreddit="r/something"
          user="user123"
          post="title"
          time="1y ago"
        />
        <Title text="This is a test title" />
        <Body text="This is a test body" />
        <Icons />
      </div>
    </div>
  );
}

export default withStyles(styles)(Post);
