const app = require('express')();
require('console-stamp')(console, 'HH:MM:ss.l');

const PORT = 8080;

(function() {
  const webpack = require('webpack');
  const webpackDevMiddleware = require('webpack-dev-middleware');
  const webpackHotMiddleware = require('webpack-hot-middleware');
  const config = require('./webpack.config.js');
  const compiler = webpack(config);

  app.use(webpackDevMiddleware(compiler, {
    publicPath: config.output.publicPath
  }));

  app.use(webpackHotMiddleware(compiler));
})();

// Listen on port 8080
app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}!\n`);
});
