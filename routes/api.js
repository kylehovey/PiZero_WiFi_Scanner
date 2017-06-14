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
        message : "Could not get results."
      });
    } else {
      res.json({
        success : true,
        results : networks
      });
    }
  });
});

module.exports = router;
