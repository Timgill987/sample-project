import React, { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

import SWChars from "./component";
const App = () => {
  const [starWarsStuff, setStarWarsStuff] = useState([]);
  useEffect(() => {
    axios
      .get(`https://swapi.co/api/people`)
      .then(response => {
        console.log(response.data.results);
        setStarWarsStuff(response.data.results);
      })
      .catch(error => {
        console.log("the data was not return", error);
      });
  }, []);
  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
      {starWarsStuff.map(item => (
        <SWChars
          key = {item}
          name={item.name}
          gender={item.gender}
          birth_year={item.birth_year}
        />
      ))}
    </div>
  );
};

export default App;
// Try to think through what state you'll need for this app before starting. Then build out
// the state properties here.

// Fetch characters from the star wars api in an effect hook. Remember, anytime you have a
// side effect in a component, you want to think about which state and/or props it should
// sync up with, if any.
