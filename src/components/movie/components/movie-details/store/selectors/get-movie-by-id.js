import { getMovies } from 'app-components/movie/components/movie-list/store';

export const getMovieById = (state, movieId) => {
  return getMovies(state).find((movie) => movie.id === movieId);
};
