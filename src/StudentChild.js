// This is the definition of StudentChild components
// Here it is nesessary to add props as parameters in the StudentChild component function to accept props from parent component

import React from "react";
import propTypes from 'prop-types'
const StudentChild = (props) => {
  return (
    <div className="student-child-card">
      <p>Name: {props.name}</p>
      <p>Age: {props.age}</p>
      {/* If the value coming from isStudent prop from the parent is true, then render "Yes" or render "No" */}
      <p>Student: {props.isStudent ? "Yes" : "No"}</p>
    </div>
  );
};

StudentChild.propTypes={
name:propTypes.string,
age:propTypes.number,
isStudent:propTypes.bool
}

// using a propTypes is like a typescript for props
// It insures that the correct data type is being used for the props. propTypes is already present in the node-modules.We have to just import it in the child component (in the component definition)
// We can use PropTypes after the component function ends
export default StudentChild;
