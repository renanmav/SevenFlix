import React, { Component } from "react";

import "./config/Reactotron";
import "./config/DevTools";

import Home from "./pages/Home";

console.tron.log("Hello World");

export default class App extends Component {
  render() {
    return <Home />;
  }
}
