const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const CONSTANTS = require('./constants');

module.exports = function(env) {
  return {
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
      }),
      new MiniCssExtractPlugin({
        filename: '[name].css',
        chunkFilename: '[id].css'
      })
    ],
    module: {
      rules: [
        {
          test: /\.scss$/,
          use: [
            MiniCssExtractPlugin.loader,
            'css-loader',
            'sass-loader'
          ]
        }
      ]
    }
  };
};
