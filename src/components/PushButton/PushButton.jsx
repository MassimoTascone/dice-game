import "./PushButton.css";

export function PushButton(props) {
  return (
    <button className="btn" onClick={props.handleRoll}>
      <span className="btn--shadow"></span>
      <span className="btn--edge"></span>
      <span className="btn--front">
        {props.lang === "eng" ? props.content.eng.btn : props.content.fr.btn}
      </span>
    </button>
  );
}
