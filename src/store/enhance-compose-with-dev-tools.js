import { applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';

import { composeWithDevTools } from 'redux-devtools-extension';

const CONSTANTS = require('../../buildTools/constants');

// for redux dev tools in dev mode
export function enhanceComposeWithDevTools() {
  if (CONSTANTS.NODE_ENV !== CONSTANTS.PRODUCTION_MODE) {
    return composeWithDevTools(applyMiddleware(
      thunkMiddleware,
    ));
  }

  return applyMiddleware(
    thunkMiddleware,
  );
}
