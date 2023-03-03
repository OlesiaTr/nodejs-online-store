const products = [];

exports.getAddProduct = (req, res, next) => {
  res.render('add-product', {
    htmlTitle: 'EJS version Add Products',
    path: '/admin/add-product',
  });
};

exports.postAddProduct = (req, res, next) => {
  products.push({ title: req.body.title });
  res.redirect('/');
};

exports.getProducts = (req, res, next) => {
  res.render('shop', {
    products,
    htmlTitle: 'EJS version Shop',
    path: '/',
  });
};
