//we are using use Context in this app to create a global state and provide those values to the
//child components

/* steps:
1. Creata a context in the App.js file (It basically means create a data). Use 
createContext() method to create it.

2. Create Child components and access the Context in the Child components using
useContext() method

3. Do it by using useState along with useContext */
import "./App.css";
import { createContext, useState } from "react";
// import Child from "./Child";
import ParentComponent from "./StudentParent";

const UserDataContext = createContext();

function App() {
  const [name, setName] = useState("Jack");
  const [location, setLocation] = useState("Mumbai");
  const [role, setRole] = useState("Software Developer");
  const [company, setCompany] = useState("Nihilent");

  const userData = {
    name,
    location,
    role,
    company,
    setName,
    setLocation,
    setRole,
    setCompany,
  };

  return (
    <UserDataContext.Provider value={userData}>
      <div>
        <h3>This is the main app</h3>
        <ParentComponent />
        {/* <Child /> */}
      </div>
    </UserDataContext.Provider>
  );
}

export default App;
export { UserDataContext };
