import React, { useState } from "react";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";

function Score() {
  const [score, setScore] = useState(0);
  return (
    <div>
      <ArrowUpwardIcon onClick={() => setScore(score + 1)} />
      {score}
      <ArrowDownwardIcon onClick={() => setScore(score - 1)} />
    </div>
  );
}

export default Score;
