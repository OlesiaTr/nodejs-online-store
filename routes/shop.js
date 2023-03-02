/* eslint-disable import/no-extraneous-dependencies */
const path = require('path');

const express = require('express');

const rootDir = require('../helpers/path');
const adminData = require('./admin');

const Router = express.Router();

Router.get('/', (req, res, next) => {
  // console.log(adminData.products);
  // res.sendFile(path.join(rootDir, 'views', 'shop.html'));

  const { products } = adminData;
  // // For PUG template engine
  // res.render('shop', {
  //   products,
  //   htmlTitle: 'PUG version Shop',
  //   path: '/',
  // });

  // For EJS template engine
  res.render('shop', {
    products,
    htmlTitle: 'EJS version Shop',
    path: '/',
  });
});

module.exports = Router;
