import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import "./Favorites.css";
import { eliminarPeliculaDeFav } from "../../actions/index.js";

export class ConnectedList extends Component {
  render() {
    return (
      <div>
        <h2>Películas Favoritas</h2>
        <ul>
          {this.props.peliculas.map((e) => {
            return (
              <div className="contenedorPlicula" key={e.imdbID}>
                <Link to={`movie/${e.imdbID}`}>
                  <label>{e.Title}</label>
                </Link>
                <button
                  className="btnFav"
                  onClick={() => this.props.borrarFavorito(e.imdbID)}
                >
                  ✖️
                </button>
              </div>
            );
          })}
        </ul>
      </div>
    );
  }
}

function mapStateToProps({ peliculasFavoritas }) {
  return {
    peliculas: peliculasFavoritas,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    borrarFavorito: (id) => dispatch(eliminarPeliculaDeFav(id)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ConnectedList);
