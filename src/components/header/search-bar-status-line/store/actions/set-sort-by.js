import {
  setSortByFilter
} from './set-sort-by-filter';

export function setSortBy(filter) {
  return (dispatch) => {
    setTimeout(() => {
      dispatch(setSortByFilter(filter));
    }, 2000);
  };
}
