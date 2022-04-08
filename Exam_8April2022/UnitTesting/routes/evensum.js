var express = require('express');
var router = express.Router();
const testingController = require('../unittests/evensumtest');

router.get('/testingsum', testingController.testSum);

module.exports = router;
