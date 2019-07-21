import { getMovieById } from 'app-components/movie/components/movie-details/store';

export const getMovieTitleById = (state, movieId) => {
  const movieData = getMovieById(state, movieId);

  if (!!movieData) {
    return movieData.title;
  }

  return '';
};
