const Product = require('../models/product');

exports.getAddProduct = (req, res, next) => {
  res.render('admin/add-product', {
    htmlTitle: 'EJS version Add Products',
    path: '/admin/add-product',
  });
};

exports.postAddProduct = (req, res, next) => {
  const { title, imgURL, price, description } = req.body;
  const product = new Product(title, imgURL, price, description);
  product.save();
  res.redirect('/');
};

exports.getProducts = (req, res, next) => {
  Product.fetchAll(products => {
    res.render('admin/view-product', {
      products,
      htmlTitle: 'EJS version Shop',
      path: '/admin/products',
    });
  });
};
