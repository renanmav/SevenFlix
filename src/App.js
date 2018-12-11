import React, { Component } from "react";
import "./config/reactotronConfig";

import Home from "./pages/Home";

console.tron.log("Hello World");

export default class App extends Component {
  render() {
    return <Home />;
  }
}
