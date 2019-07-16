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
        'app-pages': PATHS.APP_PAGES,
      }
    },
    output: {
      filename: PATHS.FILENAME,
      path: PATHS.DIST
    },
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
  }, envConfig(env));
};
