const { Router } = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');
const { productDescription, productGallery, productReviews } = require('../config/services.js');

// Router() creates new router objects
//   router objects are isolated instances of middleware and routes
const router = Router();

// // function to perform when any requests come to this router, further routing optional.
// //  ie: any middle ware action
// router.use(productDescription.api, (req, res, next) => {

// });

// // route specific endpoints like normal express app.get, only applies to router.
// router.get('/events', (req, res, next) => {
// //   Pass on to the service's server with appr. req.
// });

// router.use(service1.api, createProxyMiddleware({ target: service1.url, changeOrigin: true }));
router.use(
  productDescription.api,
  createProxyMiddleware({ target: productDescription.url, changeOrigin: true }),
);

router.use(
  productGallery.api,
  createProxyMiddleware({ target: productGallery.url,changeOrigin: true }),
);
// router.use(service3.api, createProxyMiddleware({ target: service3.url, changeOrigin: true }));

module.exports = router;
