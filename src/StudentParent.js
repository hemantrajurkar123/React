// This component is created to pass the data from parent to child using props
// The parent will contain a component which will pass the value to child in the follwing manner
// Ex. <ChildComponent name="Hemant" />. Here the <ChildComponent> is imported in the ParentComponent
// And the "name" props is passed to the ChildCompnent which will have it defined somewhere else
// It is similar to function call, where parent component will pass arguments into the parameters of child component

import React from "react";
import StudentChild from "./StudentChild";
import StudentChildPropsDestrcturing from "./StudentChildPropsDestrcturing";

const StudentParent = () => {
  return (
    <>
      <StudentChild name="John" age={20} isStudent={true} />
      <StudentChild name="Ryan" age={30} isStudent={false} />
      <StudentChildPropsDestrcturing name="Sachin" age={35} isStudent={true} />
      <StudentChildPropsDestrcturing name="Virat" age={25} isStudent={false} />
    </>
  );
};

export default StudentParent;
