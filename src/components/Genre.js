import React, { Component } from "react";
import PropTypes from "prop-types";
import { withNavigation } from "react-navigation";

import { Container, Title } from "../styles/Genre";

class Genre extends Component {
  static propTypes = {
    genre: PropTypes.object,
    navigation: PropTypes.object
  };

  handleGenreClick = () => {
    this.props.navigation.navigate("GenreMovieList", {
      title: this.props.genre.name,
      genreId: this.props.genre.id
    });
  };

  render() {
    const { genre } = this.props;
    return (
      <Container onPress={this.handleGenreClick}>
        <Title>{genre.name}</Title>
      </Container>
    );
  }
}

export default withNavigation(Genre);
