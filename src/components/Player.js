import React, { PropTypes } from "react";
import Counter from "./Counter";

const Player= (props) => {
  return (
    <div className="player">
      <div className="player-name">
        <a className="remove-player" onClick={props.onRemove}>
          ✖
        </a>
        {props.name}
      </div>
      <div className="player-score">
        <Counter onChange={props.onScoreChange} score={props.score} />
      </div>
    </div>
  );
}
export default Player;
