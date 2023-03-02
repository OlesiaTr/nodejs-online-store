/* eslint-disable import/no-extraneous-dependencies */
const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

// For PUG template engine
app.set('view engine', 'pug');
app.set('views', 'views'); // In case we named our 'views' folder where we store html bits differentily

const adminData = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminData.Router);
app.use(shopRoutes);

app.use((req, res, next) => {
  // res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));

  // For PUG template engine
  res.status(404).render('404', { htmlTitle: 'PUG version of Page Not Found' });
});

app.listen(3000);
