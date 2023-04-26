/* eslint-disable react/prop-types */
import "./PushButton.css";

export function PushButton(props) {
  return (
    <button
      className="btn"
      onClick={props.gameWon ? props.restart : props.handleRoll}
    >
      <span className="btn--shadow"></span>
      <span className="btn--edge"></span>
      <span className="btn--front">
        {props.gameWon
          ? props.content[props.lang].again
          : props.content[props.lang].btn}
      </span>
    </button>
  );
}