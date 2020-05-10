import React from "react";
import Score from "../Score/Score";
import Title from "../Title/Title";
import Body from "../Body/Body";
import CommentIcon from "@material-ui/icons/Comment";
import ShareIcon from "@material-ui/icons/Share";
import { withStyles } from "@material-ui/core/styles";

const styles = {
  root: {
    backgroundColor: "white",
    border: 1,
    color: "black",
    display: "flex",
    //alignItems: "center",
    //justifyContent: "center",
  },
};

function Post(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <Score />
      <div>
        <Title text="This is a test title" />
        <Body text="This is a test body" />
      </div>
      <CommentIcon /> 5k
      <ShareIcon />
      user123 r/something 1 year ago
      {/*link to subbredit, link to post(coments), user link, time*/}
    </div>
  );
}

export default withStyles(styles)(Post);
