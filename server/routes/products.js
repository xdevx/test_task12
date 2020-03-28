module.exports = (router) => {

  router
  .get('/api/products', async (req , res) => {
    await res.json(models.product.get_all());
  });
  return router;
}
