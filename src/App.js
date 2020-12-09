import "./App.css";
import React, { Component } from "react";
import Body from "./Component/LeftPanel/Body";
import RightPanel from "./Component/RightPanel/RightPanel";

class App extends Component {
  render() {
    return (
      <div className="app">
        <Body />
        <RightPanel />
      </div>
    );
  }
}

export default App;
