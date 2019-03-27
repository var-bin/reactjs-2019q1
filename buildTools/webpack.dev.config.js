const webpack = require('webpack');

const PATHS = require('./paths');
const CONSTANTS = require('./constants');

module.exports = {
  mode: CONSTANTS.DEVELOPMENT_MODE,
  watch: true,
  devtool: CONSTANTS.DEVTOOL,
  devServer: {
    contentBase: PATHS.DIST,
    hot: true,
    // loggin set to minimal
    stats: {
      assets: true,
      colors: true,
      version: false,
      hash: false,
      timings: true,
      chunks: false,
      chunkModules: false,
      children: false
    }
  },
  plugins: [
    new webpack.DefinePlugin({
      [CONSTANTS.NODE_ENV]: JSON.stringify(CONSTANTS.DEVELOPMENT_MODE)
    }),
    new webpack.HotModuleReplacementPlugin()
  ]
};
