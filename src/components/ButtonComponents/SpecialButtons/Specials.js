import React, {useState} from "react";
//import any components needed
import SpecialBoutton from './SpecialButton'
import {specials} from '../../../data';
//Import your array data to from the provided data file

const Specials = (props) => {
  // STEP 2 - add the imported data to state
  const [calcSpecial, setSpecial] = useState(specials);
  return (
    <div>
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/}
       {calcSpecial.map((specialChar, index)=><SpecialBoutton specialChar = {specialChar} key = {index} shwSpecials={props.shwSpecials} />)}
    </div>
  );
};
export default Specials;