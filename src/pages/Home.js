import React, { Component } from "react";

import { Header, HeaderText, Container } from "../styles/Home";
import MovieList from "../components/MovieList";

// import styles from './styles';

export default class Home extends Component {
  render() {
    return (
      <Container>
        <Header>
          <HeaderText>SevenFlix</HeaderText>
        </Header>
        <MovieList />
      </Container>
    );
  }
}
