import React, { Component, Fragment } from "react";

import { Title } from "../styles/GenresList";
import Genre from "./Genre";

export default class GenresList extends Component {
  state = {
    genres: [
      {
        id: 28,
        name: "Ação"
      },
      {
        id: 12,
        name: "Aventura"
      },
      {
        id: 16,
        name: "Animação"
      },
      {
        id: 35,
        name: "Comédia"
      },
      {
        id: 80,
        name: "Crime"
      },
      {
        id: 99,
        name: "Documentário"
      },
      {
        id: 18,
        name: "Drama"
      }
    ]
  };

  render() {
    return (
      <Fragment>
        <Title>Seções</Title>
        {this.state.genres.map(genre => (
          <Genre key={genre.id} genre={genre} />
        ))}
      </Fragment>
    );
  }
}
