import React from "react";
//import {specials} from '../../../data';

const SpecialButton = (props) => {
  //console.log('SpecialButton', props)
  return (
    <>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      <button className='special'onClick={()=>props.shwSpecials(props.specialChar)}>{props.specialChar}</button>
    </>
  );
};
export default SpecialButton;