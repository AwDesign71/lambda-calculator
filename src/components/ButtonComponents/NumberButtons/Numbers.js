import React, {useState} from "react";
//import any components needed
import NumberButton from './NumberButton';
//Import your array data to from the provided data file
import {numbers} from '../../../data';

 const Numbers = (props) => {
  // STEP 2 - add the imported data to state
const [count, doCount] = useState(numbers);

   console.log('Numbers', props)
  return (
    <div>
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/}
      {count.map((numbers, index) => <NumberButton numbers={numbers} key={index} calculateNums={props.calculateNums} />)} 
    </div>
    );
};
export default Numbers;