const proxy = require('http-proxy-middleware');

module.exports = function (app) {
  app.use('/v1', proxy({
    target: 'http://47.95.9.75:8080',
    pathRewrite: {
      '^/v1': ''
    },
    changeOrigin: true,
  }));
};