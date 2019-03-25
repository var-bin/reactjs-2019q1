const path = require('path');

module.exports = {
  DIST: path.resolve(__dirname, '../dist'),
  ENTRY: './index.js',
  PUBLIC_PATH: '/',
  FILENAME: '[name].bundle.js',
  HTML_TEMPLATE: './index.html',
  FAVICON: './favicon.ico'
};
