import React from "react";
// this is the props desstrcturing components
// instead of using const StudentChildPropsDestrcturing = (props) => {} we can directly pass the props we are going to use directly in the function as parameters
// This is useful to avod using props.name or props.age and so on. We can directly write name, age etc. while using the props
// We have to pass these destuctured props as object in the function parameters

const StudentChildPropsDestrcturing = ({ name, age, isStudent }) => {
  return (
    <>
      <div className="student-child-card">
        <p>Name: {name}</p>
        <p>Age: {age}</p>
        {/* If the value coming from isStudent prop from the parent is true, then render "Yes" or render "No" */}
        <p>Student: {isStudent ? "Yes" : "No"}</p>
      </div>
    </>
  );
};

export default StudentChildPropsDestrcturing;
