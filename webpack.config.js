const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const merge = require('webpack-merge');

const PATHS = require('./buildTools/paths');
const CONSTANTS = require('./buildTools/constants');

const devConfig = require('./buildTools/webpack.dev.config');
const prodConfig = require('./buildTools/webpack.prod.config');

module.exports = function (env) {
  console.warn('NODE_ENV: ', env.NODE_ENV);

  const envConfig = env.NODE_ENV === CONSTANTS.DEVELOPMENT_MODE
    ? devConfig
    : prodConfig;

  return merge({
    entry: [
      PATHS.ENTRY
    ],
    resolve: {
      extensions: [
        '.js',
        '.jsx'
      ],
      alias: {
        'app-components': PATHS.APP_COMPONENTS,
        'app-constants': PATHS.APP_CONSTANTS,
        'app-assets': PATHS.APP_ASSETS,
        'app-store': PATHS.APP_STORE,
      }
    },
    output: {
      filename: PATHS.FILENAME,
      path: PATHS.DIST
    },
    plugins: [
      new CleanWebpackPlugin(),
      new HtmlWebpackPlugin({
        title: CONSTANTS.HTML_TITLE_DEVELOPMENT_MODE,
        template: PATHS.HTML_TEMPLATE,
        favicon: PATHS.FAVICON
      })
    ],
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          loader: 'babel-loader'
        },
        {
          test: /\.scss$/,
          use: [
            'style-loader', // creates style nodes from JS strings
            'css-loader', // translates CSS into CommonJS,
            'postcss-loader',
            'sass-loader' // compiles Sass to CSS, using Node Sass by default
          ]
        },
        {
          test: /\.css$/,
          use: [
            'style-loader',
            'css-loader'
          ]
        },
        {
          test: /\.(png|svg|jpg|gif)$/,
          use: [
            'file-loader'
          ]
        },
        {
          test: /\.(woff|woff2|eot|ttf|otf)$/,
          use: [
            'file-loader'
          ]
        }
      ]
    }
  }, envConfig);
};
