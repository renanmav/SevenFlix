import React, { Component } from "react";
import PropTypes from "prop-types";

import { Content, Text, Highlight } from "../styles/MovieDetail";

export default class MovieDetail extends Component {
  static navigationOptions = {
    title: "Detalhes"
  };

  static propTypes = {
    navigation: PropTypes.object
  };

  render() {
    const movie = this.props.navigation.getParam("movie");
    return (
      <Content>
        <Text>
          <Highlight>Título:</Highlight> {movie.title}
        </Text>
        <Text>
          <Highlight>Avaliações:</Highlight> {movie.vote_count}
        </Text>
        <Text>
          <Highlight>Nota:</Highlight> {movie.vote_average}
        </Text>
        <Text>
          <Highlight>Sinopse:</Highlight> {movie.overview}
        </Text>
      </Content>
    );
  }
}
