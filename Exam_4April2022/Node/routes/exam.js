var express = require('express');
var router = express.Router();
const connector = require('../poolconnect');

router.get('/login/:username/:value/:password/:value1', function (req, res) {
  req.session[req.params.username] = req.params.value;
  req.session[req.params.password] = req.params.value1;
  res.send(
    `session with username : ${req.params.username} and value ${req.params.value} is set`
  );
});

router.get('/logout', function (req, res) {
  req.session.destroy(function (err) {
    if (err) {
      res.send('Error while deleting');
    } else {
      res.send('Session Destroyed');
    }
  });
});

module.exports = router;
