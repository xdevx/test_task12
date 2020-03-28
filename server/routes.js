module.exports = (router) => {
  require('./routes/currencies.js')(router);
  require('./routes/products.js')(router);
  require('./routes/cart.js')(router);
  return router;
}
