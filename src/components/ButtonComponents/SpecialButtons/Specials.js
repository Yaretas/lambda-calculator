import React, {useState} from "react";

//import any components needed
import SpecialButton from "./SpecialButton";

//Import your array data to from the provided data file
import data from "../../../data";
const specials = data.specials;

const Specials = () => {
  // STEP 2 - add the imported data to state
  const [specialsState, setspecialsState] = useState(specials);
  return (
    <div>
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
      component matching the name on the provided file. Pass
      it any props needed by the child component*/}
      {specials.map(specialObj =>{
        return <SpecialButton specials={specialObj}/>;
      })}
    </div>
  );
};

export default Specials;