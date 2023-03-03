/* eslint-disable import/no-extraneous-dependencies */
const express = require('express');

const adminController = require('../controllers/admin');

const Router = express.Router();

Router.get('/add-product', adminController.getAddProduct);

Router.get('/products', adminController.getProducts);

Router.post('/add-product', adminController.postAddProduct);

module.exports = Router;
