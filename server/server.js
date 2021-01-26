const express = require('express');
const path = require('path');
const router = require('./router');
// const bundleRouter = require('./router/bundles');

const PUBLIC_DIR = path.resolve(__dirname, '..', 'public');
const app = express();

app.use('(/productId/:productId?)?', express.static(PUBLIC_DIR));

// router.bundles handles reqs for bundles. router.api handles api reqs

// app.use(path, callback) adds middleware to specific paths
app.use('/api', router.api);
app.use('/bundles', router.bundles);

module.exports = app;
