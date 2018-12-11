import React, { Component } from "react";
import PropTypes from "prop-types";

import { Container, Title } from "../styles/Genre";

export default class Genre extends Component {
  static propTypes = {
    genre: PropTypes.object
  };

  render() {
    const { genre } = this.props;
    return (
      <Container>
        <Title>{genre.name}</Title>
      </Container>
    );
  }
}
