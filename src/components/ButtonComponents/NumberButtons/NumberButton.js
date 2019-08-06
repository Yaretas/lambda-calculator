import React from "react";


const NumberButton = props => {
  return (
    <>
      <button onClick={() => {props.setDisplayState(props.number)}} className="Numbers">{props.number}</button>
    </>
  );
};

export default NumberButton;