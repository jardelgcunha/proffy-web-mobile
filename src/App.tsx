import React from "react";

import Landing from "./pages/Landing";
import "./assets/styles/global.css";
import { Route } from "react-router-dom";
import Routes from "./routes";

// JSX = Javascript + XML

function App() {
  return (
    <Routes />
    // <Landing />
    // <div className="App">
    //   <h1>Hellor World!</h1>

    //   <button type="button">Clica em mim</button>
    // </div>
  );
}

export default App;
