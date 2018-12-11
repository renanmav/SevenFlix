import React, { Component, Fragment } from "react";

import { StatusBar } from "react-native";

import "./config/Reactotron";
import "./config/DevTools";

import Home from "./pages/Home";

export default class App extends Component {
  render() {
    return (
      <Fragment>
        <StatusBar hidden />
        <Home />
      </Fragment>
    );
  }
}
