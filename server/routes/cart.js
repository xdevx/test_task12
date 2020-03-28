module.exports = (router) => {
  router
  .get('/api/cart/mini', async (req, res) => {
    let total_qty = 0;
    if(!req.session.cart) {
      await res.json({total_qty:total_qty});
    } else {
      for(let i in req.session.cart) {
          total_qty += req.session.cart[i];
      }
      await res.json({total_qty:total_qty});
    }
  })
  .post('/api/cart/add', async(req, res) => {
    if(!req.body) {
      await res.json({
        status:'error'
      });
      return false;
    }

    let product_id = req.body.id ? Number(req.body.id) : null;
    if(!product_id ||
        product_id == undefined ||
        isNaN(product_id) ||
        product_id < 1
      ) {
      await res.json({
        status:'error'
      });
      return false;
    }

    let qty = req.body.qty ? Number(req.body.qty) : null;
    if(!qty ||
        qty == undefined ||
        isNaN(qty) ||
        qty < 1
      ) {
      await res.json({
        status:'error'
      });
      return false;
    }


    if(!req.session.cart) {
      req.session.cart = {};
      req.session.cart[product_id] = qty;
    } else {
      if(!req.session.cart[product_id]) {
        req.session.cart[product_id] = qty;
      } else {
        req.session.cart[product_id] += qty;
      }
    }




    let total_qty = 0;
    for(let i in req.session.cart) {
        total_qty += req.session.cart[i];
    }
    await res.json({
      status:'success',
      total_qty:total_qty
    });

  })
  .get('/api/cart/full', async( req, res) => {

    if( !req.session.cart) {
      await res.json({
        status:'success',
        items:[]
      });
    } else {
      let items = [];

      for(let product_id in req.session.cart) {

        let item = models.product.get_one_by_id(Number(product_id));

        if(!item) {
          continue;
        }

        item.qty = req.session.cart[product_id];
        items.push(item);
      }

      await res.json({
        status:'success',
        items:items
      });

    }


  })
  .get('/api/cart/summarize', async (req, res) => {

    if(!req.session.cart || Object.keys(req.session.cart).lenght == 0) {
      await res.json({
        status:'success',
        data:null
      });
    } else {
      let currs = currencies.get_all();
      for(let i in currs) {
        currs[i].total = 0;
        for(let product_id in req.session.cart) {
          let product = models.product.get_one_by_id(product_id);
          currs[i].total += product.price * currs[i].price * req.session.cart[product_id];
        }
        currs[i].total = Number(currs[i].total).toFixed(2);
      }

      await res.json({
        status:'success',
        data:currs
      });
    }



  });







  return router;
}
