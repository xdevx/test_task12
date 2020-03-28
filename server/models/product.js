module.exports = () => {
  let records = [
    {
      id:1,
      name: 'Product 0',
      price: 23.00,
    },
    {
      id:2,
      name: 'Product 1',
      price: 134.00,
    },
    {
      id:3,
      name: 'Product 2',
      price: 234.00,
    },
    {
      id:4,
      name: 'Product 3',
      price: 314.00,
    },
    {
      id:5,
      name: 'Product 4',
      price: 342.00,
    },
    {
      id:6,
      name: 'Product 5',
      price: 334.00,
    },
    {
      id:7,
      name: 'Product 6',
      price: 434.00,
    }
  ];

  var model = {};

  model.get_all = () => {
    return records;
  }

  model.get_one_by_id = (id) => {
    for(let i in records) {
        if(id == records[i].id) {
          return records[i];
        }
    }
    return null;
  }

  return model;

}
