import React from "react";
 import {operators} from '../../../data';
const OperatorButton = (props) => {
  console.log('OperatorButton', props)
  return (
    <>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      <button className='operator sizing'onClick={()=>
        props.shwOperators(props.operators.value)}>{props.operators.char}</button>
    </>
  );
};
export default OperatorButton;