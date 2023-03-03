const fs = require('fs');
const path = require('path');

const p = path.join(
  path.dirname(require.main.filename),
  'data',
  'products.json'
);

const getProductsFromFile = cb => {
  fs.readFile(p, (err, data) => {
    if (err) return cb([]);
    return cb(JSON.parse(data));
  });
};

module.exports = class Product {
  constructor(title, img, price, desc) {
    this.title = title;
    this.img = img;
    this.desc = desc;
    this.price = price;
  }

  save() {
    getProductsFromFile(products => {
      products.push(this);
      fs.writeFile(p, JSON.stringify(products), e => console.log(e));
    });
  }

  static fetchAll(cb) {
    getProductsFromFile(cb);
  }
};
