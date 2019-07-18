import React from "react";
/* import {numbers} from './../../../data'; */

const NumberButton = (props) => {
  //console.log(props)
  return (
    <>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      <button className='number' onClick={()=>props.displayNum(props.numbers)}>{props.numbers}</button>
    </>
  );
};
export default NumberButton;
