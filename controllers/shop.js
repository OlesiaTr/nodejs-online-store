const Product = require('../models/product');

exports.getIndex = (req, res, next) => {
  Product.fetchAll(products => {
    res.render('shop/index', {
      products,
      htmlTitle: 'EJS version Shop',
      path: '/',
    });
  });
};

exports.getProductsList = (req, res, next) => {
  Product.fetchAll(products => {
    res.render('shop/products-list', {
      products,
      htmlTitle: 'EJS version Shop',
      path: '/products',
    });
  });
};

exports.getCart = (req, res, next) => {
  res.render('shop/cart', {
    htmlTitle: 'Cart',
    path: '/cart',
  });
};

exports.getOrders = (req, res, next) => {
  res.render('shop/orders', {
    htmlTitle: 'Orders',
    path: '/orders',
  });
};

exports.getCheckout = (req, res, next) => {
  res.render('shop/checkout', {
    htmlTitle: 'Checkout',
    path: '/checkout',
  });
};
