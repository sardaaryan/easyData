import { useState, useEffect } from "react";
import SearchIcon from "./search.svg";
import "./App.css";

const App = () => {
  /*const[elementOne, setElementOne] = useState("Poverty");*/

  return (
    <div className="main">
      <h1>Enter values to find their correlation</h1>
      <div className="sub">
        <input type="text" placeholder="Topic 1..." />
        <input type="text" placeholder="Topic 2..." />
      </div>
      <img className="search" src={SearchIcon} alt="search" />
    </div>
  );
};

export default App;
