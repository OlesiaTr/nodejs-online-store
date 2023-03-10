/* eslint-disable import/no-extraneous-dependencies */
const express = require('express');

const shopController = require('../controllers/shop');

const Router = express.Router();

Router.get('/', shopController.getIndex);

Router.get('/products', shopController.getProductsList);

Router.get('/cart', shopController.getCart);

Router.get('/orders', shopController.getOrders);

Router.get('/checkout', shopController.getCheckout);

module.exports = Router;
