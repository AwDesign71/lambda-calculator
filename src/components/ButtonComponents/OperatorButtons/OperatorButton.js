import React from "react";
/* import {operators} from '../../../data'; */
const OperatorButton = (props) => {
  //console.log(props)
  return (
    <>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      <button className='operator sizing'>{props.operator}</button>
    </>
  );
};
export default OperatorButton;