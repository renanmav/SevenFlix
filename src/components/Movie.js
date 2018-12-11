import React, { Component } from "react";
import PropTypes from "prop-types";

import { Container, Title, Poster, Content, Info } from "../styles/Movie";

export default class Movie extends Component {
  static propTypes = {
    movie: PropTypes.object
  };

  render() {
    const { movie } = this.props;

    return (
      <Container>
        <Poster
          source={{
            uri:
              "https://image.tmdb.org/t/p/w600_and_h900_bestv2" +
              movie.poster_path,
            width: 150,
            height: 230
          }}
        />
        <Content>
          <Title>{movie.title}</Title>
          <Info>{movie.vote_average}</Info>
          <Info>{movie.release_date}</Info>
          <Info>{movie.original_language}</Info>
        </Content>
      </Container>
    );
  }
}
