import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import "./Buscador.css";
import {
  buscarPeliculas,
  agregarPeliculaAFavorito,
} from "../../actions/index.js";

export class Buscador extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
    };
  }
  handleChange(event) {
    this.setState({ title: event.target.value });
  }
  handleSubmit(event) {
    event.preventDefault();
    this.props.todasLasPeliculas(this.state.title);
  }

  render() {
    const { title } = this.state;
    return (
      <div>
        <h2>Buscador</h2>
        <form className="form-container" onSubmit={(e) => this.handleSubmit(e)}>
          <div>
            <label className="label" htmlFor="title">
              Película:{" "}
            </label>
            <input
              type="text"
              id="title"
              autoComplete="off"
              value={title}
              onChange={(e) => this.handleChange(e)}
            />
          </div>
          <button type="submit">BUSCAR</button>
        </form>
        <ul>
          {this.props.peliculasBuscadas.map((e) => {
            return (
              <div className="contenedorPlicula" key={e.imdbID}>
                <Link to={`movie/${e.imdbID}`}>
                  <label>{e.Title}</label>
                </Link>
                <button
                  className="btnFavorito"
                  onClick={() => this.props.agregarPeliculaAFav(e)}
                >
                  ❤️
                </button>
              </div>
            );
          })}
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    peliculasBuscadas: state.todasLasPeliculas,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    todasLasPeliculas: (titulo) => dispatch(buscarPeliculas(titulo)),
    agregarPeliculaAFav: (pelicula) =>
      dispatch(agregarPeliculaAFavorito(pelicula)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Buscador);
