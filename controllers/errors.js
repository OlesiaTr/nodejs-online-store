exports.get404 = (req, res, next) => {
  res
    .status(404)
    .render('404', { htmlTitle: 'EJS version of Page Not Found', path: false });
};
