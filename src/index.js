import React, { Fragment, Component } from "react";
import Routes from "./routes";

import { StatusBar } from "react-native";

import "./config/Reactotron";
import "./config/DevTools";

export default class App extends Component {
  render() {
    return (
      <Fragment>
        <StatusBar hidden />
        <Routes />
      </Fragment>
    );
  }
}
