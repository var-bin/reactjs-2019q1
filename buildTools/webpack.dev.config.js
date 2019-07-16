const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const PATHS = require('./paths');
const CONSTANTS = require('./constants');

module.exports = function(env) {
  const envMode = `${env.NODE_ENV.toUpperCase()}_MODE`;

  return {
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
      },
      historyApiFallback: true
    },
    plugins: [
      new webpack.DefinePlugin({
        [CONSTANTS.NODE_ENV]: JSON.stringify(CONSTANTS.DEVELOPMENT_MODE)
      }),
      new webpack.HotModuleReplacementPlugin(),
      new CleanWebpackPlugin(),
      new HtmlWebpackPlugin({
        title: `${CONSTANTS.APP_TITLE} [${envMode}]`,
        template: PATHS.HTML_TEMPLATE,
        favicon: PATHS.FAVICON
      })
    ]
  };
};
