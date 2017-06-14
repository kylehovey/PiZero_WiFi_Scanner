var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('scanner', { title: 'WiFi Scan Results' });
});

module.exports = router;
