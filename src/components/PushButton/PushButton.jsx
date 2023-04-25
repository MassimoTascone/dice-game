import "./PushButton.css";

export function PushButton(props) {
  console.log(props.gameWon);
  return (
    <button className="btn" onClick={props.handleRoll}>
      <span className="btn--shadow"></span>
      <span className="btn--edge"></span>
      <span className="btn--front">
        {props.gameWon ? "Play Again ?" : props.content[props.lang].btn}
      </span>
    </button>
  );
}
