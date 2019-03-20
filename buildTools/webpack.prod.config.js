const webpack = require('webpack');

const CONSTANTS = require('./constants');

module.exports = {
  mode: CONSTANTS.PRODUCTION_MODE,
  devtool: CONSTANTS.DEVTOOL_PRODUCTION,
  stats: {
    assets: true,
    colors: true,
    version: true,
    hash: true,
    timings: true,
    chunks: true,
    chunkModules: true,
    children: true
  },
  plugins: [
    new webpack.DefinePlugin({
      [CONSTANTS.NODE_ENV]: JSON.stringify(CONSTANTS.PRODUCTION_MODE)
    })
  ]
};
