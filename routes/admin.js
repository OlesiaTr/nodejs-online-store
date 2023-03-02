/* eslint-disable import/no-extraneous-dependencies */
const path = require('path');

const express = require('express');

const rootDir = require('../helpers/path');

const Router = express.Router();
const products = [];

Router.get('/add-product', (req, res, next) => {
  // res.sendFile(path.join(rootDir, 'views', 'add-product.html'));

  // // For PUG template engine
  // res.render('add-product', {
  //   htmlTitle: 'PUG version Add Products',
  //   path: '/admin/add-product',
  // });

  // For EJS template engine
  res.render('add-product', {
    htmlTitle: 'EJS version Add Products',
    path: '/admin/add-product',
  });
});

Router.post('/add-product', (req, res, next) => {
  products.push({ title: req.body.title });
  res.redirect('/');
});

module.exports = { Router, products };
