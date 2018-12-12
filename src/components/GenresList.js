import React, { Component, Fragment } from "react";

import { Title } from "../styles/GenresList";
import Genre from "./Genre";

import api from "../services/api";
import theMovieDBConfig from "../config/TheMovieDB";

export default class GenresList extends Component {
  state = {
    genres: []
  };

  componentDidMount() {
    this.handleRenderGenresList();
  }

  handleRenderGenresList = async () => {
    const { data } = await api.get(
      "/genre/movie/list?" +
        "api_key=" +
        theMovieDBConfig.api_key +
        "&language=" +
        theMovieDBConfig.language
    );

    this.setState({ genres: data.genres });
  };

  render() {
    return (
      <Fragment>
        <Title>Seções</Title>
        {this.state.genres.length
          ? this.state.genres.map(genre => (
              <Genre genre={genre} key={genre.id} />
            ))
          : null}
      </Fragment>
    );
  }
}
