import React from "react";


const NumberButton = props => {
  return (
    <>
      <button className="Numbers">{props.number}</button>
    </>
  );
};

export default NumberButton;