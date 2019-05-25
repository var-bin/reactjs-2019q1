import {
  REQUEST_MOVIES
} from 'app-store/action-types';

export function requestMovies() {
  return {
    type: REQUEST_MOVIES
  };
}
