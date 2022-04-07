var express = require('express');
var router = express.Router();
const categoryModel = require('../models').CategoryTable;

router.get('/', function (req, res, next) {
  categoryModel.findAll().then(
    function (categories) {
      res.status(200).json(categories);
    },
    function (error) {
      res.status(500).json(error);
    }
  );
});

router.post('/', (req, res) => {
  categoryModel.create(req.body).then(
    (category) => {
      res.status(200).json({status: 1, category});
    },
    (error) => {
      res.status(500).json(error);
    }
  );
});

router.delete('/:id', (req, res) => {
  categoryModel
    .destroy({
      where: {id: req.params.id},
    })
    .then((category) => {
      res.status(200).json({message: 'Deleted Successfully'});
    });
});

router.put('/', (req, res) => {
  const {id, name} = req.body;
  categoryModel
    .update(
      {
        name: name,
      },
      {
        where: {
          id: id,
        },
      }
    )
    .then((category) => {
      res.status(200).json({status: 1, category});
    });
});
module.exports = router;
