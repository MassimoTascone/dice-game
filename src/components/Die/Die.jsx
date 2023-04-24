/* eslint-disable react/prop-types */
import "./Die.css";

export function Die(props) {
  const dieStyle = {
    backgroundColor: props.isHeld ? "#59E391" : "#FFFFFF",
  };
  return (
    <div className="die" onClick={props.handleClick} style={dieStyle}>
      <h2>{props.value}</h2>
    </div>
  );
}
