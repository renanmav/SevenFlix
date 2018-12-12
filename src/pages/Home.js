import React, { Component } from "react";

import { Container } from "../styles/Home";

import MovieList from "../components/MovieList";
import GenresList from "../components/GenresList";

// import styles from './styles';

export default class Home extends Component {
  static navigationOptions = {
    title: "SevenFlix"
  };

  render() {
    return (
      <Container>
        <MovieList />
        <GenresList />
      </Container>
    );
  }
}
