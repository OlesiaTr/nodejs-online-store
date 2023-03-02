/* eslint-disable import/no-extraneous-dependencies */
const path = require('path');

const express = require('express');

const rootDir = require('../helpers/path');
const adminData = require('./admin');

const Router = express.Router();

Router.get('/', (req, res, next) => {
  // console.log(adminData.products);
  // res.sendFile(path.join(rootDir, 'views', 'shop.html'));

  // For PUG template engine
  const { products } = adminData;
  res.render('shop', { products, htmlTitle: 'PUG version Shop' });
});

module.exports = Router;
