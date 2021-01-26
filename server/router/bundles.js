const axios = require('axios');
const { Router } = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');
const { productDescription, productGallery, productReviews } = require('../config/services.js');

// Router() creates new router objects
//   router objects are isolated instances of middleware and routes
const router = Router();

// function to perform when any requests come to this router.
//  ie: any middle ware action
// router.use('/MainProductGallery.js', (req, res, next) => {
//   console.log('GET REQ IN');
//   axios.get(`${productDescription.url}/${productDescription.bundle}`).then((resp) => {
//     console.log(resp);
//     res = (resp);
//   });
// });

// // route specific endpoints like normal express app.get, only applies to router.
// router.get('/events', (req, res, next) => {

// });

// router.use('/service1.js', createProxyMiddleware({
//   target: service1.url,
//   pathRewrite: {
//     '^/bundles/service1.js': service1.bundle,
//   },
//   changeOrigin: true,
// }));

router.use('/MainProductDescription.js', createProxyMiddleware({
  target: productDescription.url,
  pathRewrite: {
    '^/bundles/MainProductDescription.js': productDescription.bundle,
  },
  changeOrigin: true,
}));

router.use('/MainProductGallery.js', createProxyMiddleware({
  target: productGallery.url,
  pathRewrite: {
    '^/bundles/MainProductGallery.js': productGallery.bundle,
  },
  changeOrigin: true,
}));

// router.use('/service3.js', createProxyMiddleware({
//   target: service3.url,
//   pathRewrite: {
//     '^/bundles/service3.js': service3.bundle,
//   },
//   changeOrigin: true,
// }));

module.exports = router;
