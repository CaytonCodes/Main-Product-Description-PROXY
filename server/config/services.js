// api: the api path to a specific service, less its '/api/' leader.
//    ie: for a service using: /api/productDescription/itemData/:itemNum?
//                      enter: /productDescription/itemData/:itemNum?
// url: the url address of each service
//      pre-deployment: `http://localhost:${port}`
//      post-deployment: url of hosting server
// bundle: the name of that particular service's bundle.

module.exports = {
  productDescription: {
    api: '/productDescription/itemAndUser',
    url: 'http://localhost:3034',
    bundle: 'bundle.js',
  },
  productGallery: {
    api: '/lego/products',
    url: 'http://localhost:3053',
    bundle: 'bundle.js',
  },
  productReviews: {
    api: 'FILL_IN',
    url: 'http://localhost:3001',
    bundle: 'bundle.js',
  },
};
