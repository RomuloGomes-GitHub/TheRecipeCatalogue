const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    '/login',  // Replace with the path that your backend API uses
    createProxyMiddleware({
      target: 'http://localhost:8080',  // Replace with your backend server URL
      changeOrigin: true,
    })
  );
};