import "./RollCounter.css";

export function RollCounter(props) {
  return (
    <>
      {props.rollNbr > 0 && (
        <p>
          {props.lang === "eng"
            ? props.content.eng.counter
            : props.content.fr.counter}{" "}
          <span>{props.rollNbr}</span>{" "}
          {props.lang === "eng"
            ? props.content.eng.counterBis
            : props.content.fr.counterBis}
        </p>
      )}
    </>
  );
}
