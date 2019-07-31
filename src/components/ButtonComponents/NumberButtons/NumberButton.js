import React from "react";
import { tsPropertySignature } from "@babel/types";

const NumberButton = () => {
  return (
    <>
      <button className="Numbers">{props.number}</button>
    </>
  );
};

export default NumberButton;