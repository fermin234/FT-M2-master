import React from "react";
import { connect } from "react-redux";
import {
  agregarPeliculaAFavorito,
  detalleDePlicula,
} from "../../actions/index";

import "./Movie.css";

class Movie extends React.Component {
  componentDidMount() {
    this.props.detallePeli(this.props.match.params.id);
  }

  render() {
    return (
      <div className="movie-detail">
        <h3>Detalle de la pelicula</h3>
        Title: {this.props.detallePelicula.Title}
        <br />
        Year: {this.props.detallePelicula.Year}
        <br />
        Released: {this.props.detallePelicula.Released}
        <br />
        Runtime: {this.props.detallePelicula.Runtime}
        <br />
        Genre: {this.props.detallePelicula.Genre}
        <br />
        <img
          src={this.props.detallePelicula.Poster}
          alt="imagen de la pelicula"
        />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    todasLasPeliculas: state.todasLasPeliculas,
    detallePelicula: state.detallePelicula,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    detallePeli: (id) => dispatch(detalleDePlicula(id)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Movie);
