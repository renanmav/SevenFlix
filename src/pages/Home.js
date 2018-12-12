import React, { Component } from "react";
import PropTypes from "prop-types";

import { Container } from "../styles/Home";

import MovieList from "../components/MovieList";
import GenresList from "../components/GenresList";

export default class Home extends Component {
  static navigationOptions = {
    title: "SevenFlix"
  };

  static propTypes = {
    navigation: PropTypes.object
  };

  render() {
    return (
      <Container>
        <MovieList navigation={this.props.navigation} />
        <GenresList />
      </Container>
    );
  }
}
