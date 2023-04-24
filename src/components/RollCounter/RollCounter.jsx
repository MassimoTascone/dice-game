/* eslint-disable react/prop-types */
import "./RollCounter.css";

export function RollCounter(props) {
  return (
    <>
      {props.rollNbr > 0 && (
        <p>
          {props.content[props.lang].counter}
          <span> {props.rollNbr} </span>
          {props.content[props.lang].counterBis}
        </p>
      )}
    </>
  );
}
