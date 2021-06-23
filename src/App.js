import React, { Component } from "react";
import Usage from "./pages/higerOrderComponent";
import MediumClap from "./pages/customHook";
import ContextExample from "./pages/context";
import "./App.css";
class App extends Component {
  render() {
    return (
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <Usage />
        <MediumClap />
        <ContextExample />
      </div>
    );
  }
}

export default App;
