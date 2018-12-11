import React, { Component, Fragment } from "react";
import { ScrollView } from "react-native";

import Movie from "./Movie";

import api from "../services/api";
import moment from "moment";

import theMovieDBConfig from "../config/TheMovieDB";

import { Title } from "../styles/MovieList";

// import styles from './styles';

export default class MovieList extends Component {
  state = {
    movies: []
  };

  componentDidMount() {
    this.handleRenderList();
  }

  handleRenderList = async () => {
    const { data: movies } = await api.get(
      "/movie/popular?" +
        "api_key=" +
        theMovieDBConfig.api_key +
        "&language=" +
        theMovieDBConfig.language +
        "&region=" +
        theMovieDBConfig.region
    );

    movies.results.map(movie => {
      movie.data_de_lancamento = moment(movie.release_date).format(
        "DD/MM/YYYY"
      );
    });

    this.setState({
      movies: movies.results
    });

    console.tron.log(this.state.movies[0]);
  };

  render() {
    return (
      <Fragment>
        <Title>Destaque</Title>
        <ScrollView>
          {this.state.movies.length ? (
            <Movie movie={this.state.movies[0]} />
          ) : null}
        </ScrollView>
      </Fragment>
    );
  }
}

/*
{this.state.movies.map(movie => (
            <Movie key={movie.id} movie={movie} />
          ))}
*/
