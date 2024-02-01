const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
    /*app.use(
        '/api/v1/recipes',  // Replace with the path that your backend API uses
        createProxyMiddleware({
            //target: 'http://localhost:8080',  // Replace with your backend server URL
            target: 'http://localhost:8080',  // Replace with your backend server URL
            changeOrigin: true,
        })
    );*/

    app.use(
        '/api/v1/auth/authenticate',  // Replace with the path that your backend API uses
        createProxyMiddleware({
            //target: 'http://localhost:8080',  // Replace with your backend server URL
            target: 'http://localhost:8080',  // Replace with your backend server URL
            changeOrigin: true,
        })
    );
};