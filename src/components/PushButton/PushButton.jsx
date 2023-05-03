/* eslint-disable react/prop-types */
import "./PushButton.css";

export function PushButton(props) {
  console.log(props.disabled);

  return (
    <button className="btn" onClick={props.onClick} disabled={props.disabled}>
      <span className="btn--shadow"></span>
      <span className="btn--edge"></span>
      <span className="btn--front">{props.children}</span>
    </button>
  );
}
