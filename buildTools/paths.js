const path = require('path');

module.exports = {
  DIST: path.resolve(__dirname, '../dist'),
  ENTRY: './index.js',
  PUBLIC_PATH: '/',
  FILENAME: '[name].bundle.js',
  HTML_TEMPLATE: './index.html',
  FAVICON: './favicon.ico',
  APP_COMPONENTS: path.resolve(__dirname, '../src/components'),
  APP_STORE: path.resolve(__dirname, '../src/store'),
  APP_CONSTANTS: path.resolve(__dirname, '../src/constants'),
  APP_ASSETS: path.resolve(__dirname, '../src/assets'),
  MOVIE_DATA_MOCK: path.resolve(__dirname, '../__mocks__/moviesData')
};
