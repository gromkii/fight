var express = require('express'),
    router  = express.Router();

router.route('/')
  // Show index page.
  .get ( (req, res) => {
    res.render('index/index');
  });

router.route('/login')
  // Show login page.
  .get( (req, res) => {
    res.render('index/login');
  })

module.exports = router;
