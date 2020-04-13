import React, {Component} from "react";

//Import Component
import Launches from './components/Launches';

import "./App.css";
import logo from "./logo.jpg";


class App extends Component {
  render(){
  return (
      <div className="container">
        <h1>
          <img
            src={logo}
            alt="SpaceX"
            style={{
              width: 300,
              display: "block",
              margin: "auto",
              marginTop: 15
            }}
          ></img>
        </h1>
        <Launches></Launches>
      </div>
  );
}
}
export default App;
