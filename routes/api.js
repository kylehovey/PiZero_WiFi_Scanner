// Get the router
const express = require('express');
const router = express.Router();

/* GET scan results. */
router.get('/', function(req, res, next) {
  // TODO (stub)
  res.json({
    success : true,
    message : [
      "Hello world!",
      "More results.",
      "Even more, you bet."
    ]
  });
});

module.exports = router;
