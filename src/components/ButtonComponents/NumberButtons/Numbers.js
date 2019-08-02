import React, {useState} from "react";

//import any components needed
import NumberButton from "./NumberButton.js";
//Import your array data to from the provided data file
import data from "../../../data";
const numbers = data.numbers;

const Numbers = () => {
  const [numberState, setNumberState] = useState(numbers);
  // STEP 2 - add the imported data to state
  return (
    <div>
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
      component matching the name on the provided file. Pass
       it any props needed by the child component */}
      {numbers.map(numberObj =>{
        return <NumberButton number={numberObj}/>;
      })
      }
    </div>
  );
};

export default Numbers;
