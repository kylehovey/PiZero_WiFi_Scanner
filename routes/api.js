// Dependencies
const express = require('express');
const router = express.Router();
const scanner = require('node-wifi-scanner');

/* GET scan results. */
router.get('/', function(req, res, next) {
  // Scan for results
  scanner.scan((err, networks) => {
    if (err) {
      res.json({
        success : false,
        message : []
      });
    } else {
      res.json({
        success : true,
        message : networks.map(network => network.ssid)
      });
    }
  });
});

module.exports = router;
