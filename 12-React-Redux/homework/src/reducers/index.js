import {
  getMovies,
  getMovieDetail,
  addMovieFavorite,
  removeMovieFavorite,
} from "../actions-type/actions-type.js";

const initialState = {
  todasLasPeliculas: [],
  peliculasFavoritas: [],
  detallePelicula: {},
};

export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    case getMovies:
      return {
        ...state,
        todasLasPeliculas: action.payload,
      };
    case addMovieFavorite:
      let peliculaEncontrada = state.peliculasFavoritas.find(
        (pelicula) => pelicula.imdbID === action.payload.imdbID
      );
      if (!peliculaEncontrada)
        return {
          ...state,
          peliculasFavoritas: [...state.peliculasFavoritas, action.payload],
        };
    case removeMovieFavorite:
      return {
        ...state,
        peliculasFavoritas: state.peliculasFavoritas.filter(
          (e) => e.imdbID != action.payload
        ),
      };
    case getMovieDetail:
      return {
        ...state,
        detallePelicula: action.payload,
      };
    default:
      return state;
  }
}
