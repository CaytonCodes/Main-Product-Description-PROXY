module.exports = {
  service1: {
    api: '/lego/products',
    url: 'http://50.18.208.198:3053',
    //url: 'http://localhost:3053',
    bundle: 'bundle.js',
  },
  service2: {
    api: '/productDescription/itemAndUser',
    url: 'http://3.134.111.54:3034',
    // url: 'http://localhost:3034',
    bundle: 'bundle.js',
  },
  service3: {
    api: '/products/:id',
    url: 'http://54.219.85.151:3003',
    // url: 'http://localhost:3003',
    bundle: 'bundle.js',
  },
  service4: {
    api: '/reviews',
    // api: {window.location.pathname},
    url: 'http://54.219.85.151:3003',
    bundle: 'bundle.js'
  }
};