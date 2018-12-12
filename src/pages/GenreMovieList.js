import React, { Component } from "react";
import PropTypes from "prop-types";

import api from "../services/api";
import moment from "moment";
import theMovieDBConfig from "../config/TheMovieDB";

import Movie from "../components/Movie";

import { Container } from "../styles/GenreMovieList";

export default class GenreMovieList extends Component {
  state = {
    movies: []
  };

  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.getParam("title")
    };
  };

  static propTypes = {
    navigation: PropTypes.object
  };

  componentDidMount() {
    this.handleRenderMovieList();
  }

  handleRenderMovieList = async () => {
    const { data } = await api.get(
      "/discover/movie?" +
        "api_key=" +
        theMovieDBConfig.api_key +
        "&language=" +
        theMovieDBConfig.language +
        "&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=" +
        this.props.navigation.getParam("genreId")
    );

    const movies = data.results;

    movies.map(movie => {
      movie.data_de_lancamento = moment(movie.release_date).format(
        "DD/MM/YYYY"
      );
    });

    this.setState({ movies });
  };

  render() {
    return (
      <Container>
        {this.state.movies.map(movie => (
          <Movie
            key={movie.id}
            movie={movie}
            navigation={this.props.navigation}
          />
        ))}
      </Container>
    );
  }
}
