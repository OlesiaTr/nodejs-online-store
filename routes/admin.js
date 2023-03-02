/* eslint-disable import/no-extraneous-dependencies */
const path = require('path');

const express = require('express');

const rootDir = require('../helpers/path');

const Router = express.Router();

Router.get('/add-product', (req, res, next) =>
  res.sendFile(path.join(rootDir, 'views', 'add-product.html'))
);

Router.post('/add-product', (req, res, next) => res.redirect('/'));

module.exports = Router;
