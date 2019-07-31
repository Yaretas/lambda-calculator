import React from "react";

//import any components needed
import NumberButton from "./NumberBytton.js";
//Import your array data to from the provided data file
import data from "./scr/Img/data.js";

const numbers = data.numbers;

const Numbers = () => {
  // STEP 2 - add the imported data to state
  return (
    <div>
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
      component matching the name on the provided file. Pass
       it any props needed by the child component */}
    {numbers.map(function(num){ return <NumberButton numbers={numbers[i]/>})}
    </div>
  );
};
