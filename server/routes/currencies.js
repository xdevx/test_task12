module.exports = (router) => {

  router
  .get('/api/currencies', async (req , res) => {
    await res.json({
      status:'success',
      currencies:currencies.get_all()
    });
  });
  return router;
}
