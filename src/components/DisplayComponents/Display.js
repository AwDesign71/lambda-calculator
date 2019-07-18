import React from "react";
/* import { numbers } from './../../data';
import Numbers from './../ButtonComponents/NumberButtons/Numbers'; */
const Display = (props) => {
  console.log()
  return <div className='align'>{/* Display any props data here */}
    {props.showNumbers}
  </div>;
};
export default Display;