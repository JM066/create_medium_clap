import React, { Component } from "react";
import Usage from "./pages/higerOrderComponent";
import MediumClap from "./pages/customHook";
import "./App.css";
class App extends Component {
  render() {
    return (
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <Usage />
        <MediumClap />
      </div>
    );
  }
}

export default App;
