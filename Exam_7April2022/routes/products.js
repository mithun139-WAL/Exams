var express = require('express');
var router = express.Router();
const productModel = require('../models').ProductTable;

router.get('/', function (req, res, next) {
  productModel.findAll().then(
    function (products) {
      res.status(200).json(products);
    },
    function (error) {
      res.status(500).json(error);
    }
  );
});

router.post('/', (req, res) => {
  productModel.create(req.body).then(
    (product) => {
      res.status(200).json({status: 1, product});
    },
    (error) => {
      res.status(500).json(error);
    }
  );
});

router.delete('/:id', (req, res) => {
  productModel
    .destroy({
      where: {id: req.params.id},
    })
    .then((product) => {
      res.status(200).json({message: 'Deleted Successfully'});
    });
});

router.put('/', (req, res) => {
  const {id, name, price, inStore, categoryId} = req.body;
  productModel
    .update(
      {
        name: name,
        price: price,
        inStore: inStore,
        categoryId: categoryId,
      },
      {
        where: {
          id: id,
        },
      }
    )
    .then((product) => {
      res.status(200).json({status: 1, product});
    });
});

module.exports = router;
