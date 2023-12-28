import React from "react";
import { useContext } from "react";
import { UserDataContext } from "./App";

const Child = () => {
  const { name, setName, location, setLocation } = useContext(UserDataContext);
  return (
    <div>
      <h4>This is a Child Component</h4>
      <h5>The name is: {name}</h5>
      <button onClick={() => setName("Jack the Millionaire")}>
        Change Name
      </button>
      <h5>The location is: {location}</h5>
      <button onClick={() => setLocation("Los Angeles")}>Change Name</button>
    </div>
  );
};

export default Child;
