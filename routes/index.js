var express = require('express'),
    router  = express.Router();

router.route('/')
  // Show index page.
  .get ( (req, res) => {
    res.render('index/index');
  });

module.exports = router;
