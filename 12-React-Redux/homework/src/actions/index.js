import {
  getMovies,
  getMovieDetail,
  addMovieFavorite,
  removeMovieFavorite,
} from "../actions-type/actions-type.js";

const apiKey = "429d26f2";

export function buscarPeliculas(titulo) {
  return function (dispatch) {
    return fetch(`http://www.omdbapi.com/?apikey=${apiKey}&s=` + titulo)
      .then((response) => response.json())
      .then((data) => {
        dispatch({ type: getMovies, payload: data.Search });
      });
    // .catch((error) => {
    //   throw new Error(error)
    // })
  };
}

export const agregarPeliculaAFavorito = (InfoPelicula) => {
  return {
    type: addMovieFavorite,
    payload: InfoPelicula,
  };
};

export function eliminarPeliculaDeFav(id) {
  return {
    type: removeMovieFavorite,
    payload: id,
  };
}

export function detalleDePlicula(id) {
  return function (dispatch) {
    return fetch(`http://www.omdbapi.com/?apikey=${apiKey}&i=` + id)
      .then((response) => response.json())
      .then((data) => {
        dispatch({ type: getMovieDetail, payload: data });
      });
  };
}
